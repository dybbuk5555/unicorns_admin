import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import CreateBundle from 'src/view/bundle/form/components/CreateBundle';
import SelectUnicorns from 'src/view/bundle/form/components/SelectUnicorns';
import SelectLands from 'src/view/bundle/form/components/SelectLands';
import ReviewBundle from 'src/view/bundle/form/components/ReviewBundle';
import formActions from 'src/modules/form/formActions';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MDButton from 'src/mui/components/MDButton';
import MDBox from 'src/mui/components/MDBox';
import { Card, Grid } from '@mui/material';
import Stepper from 'src/view/shared/Stepper';
import MDTypography from 'src/mui/components/MDTypography';
import colors from 'src/mui/assets/theme/base/colors';

interface Bundle {
  UNIM: number;
  RBW: number;
  unicorns: number[];
  lands: number[];
  price: number;
}

function BundleForm(props) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [unicorns, setUnicorns] = useState(() => {
    const nfts = props.nfts;
    let unicorns = [];

    for (let i = 0; i < nfts.unicorns?.length; i++) {
      unicorns.push({
        tokenId: nfts.unicorns[i].tokenId,
        image: nfts.unicorns[i].image,
        title: nfts.unicorns[i].title,
        checked: false,
      });

      if (props.record?.unicorns) {
        for (
          let j = 0;
          j < props.record.unicorns.length;
          j++
        ) {
          if (
            props.record.unicorns[j].tokenId ===
            unicorns[i].tokenId
          )
            unicorns[i].checked = true;
        }
      }
    }

    return unicorns;
  });

  const [lands, setLands] = useState(() => {
    const nfts = props.nfts;
    let lands = [];

    for (let i = 0; i < nfts.lands?.length; i++) {
      lands.push({
        tokenId: nfts.lands[i].tokenId,
        image: nfts.lands[i].image,
        title: nfts.lands[i].title,
        checked: false,
      });

      if (props.record?.lands) {
        for (
          let j = 0;
          j < props.record.lands.length;
          j++
        ) {
          if (
            props.record.lands[j].tokenId ===
            lands[i].tokenId
          )
            lands[i].checked = true;
        }
      }
    }
    return lands;
  });

  const dispatch = useDispatch();
  const isLastStep: boolean = activeStep === 3;

  const handleBack = () => setActiveStep(activeStep - 1);

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      UNIM: record.UNIM,
      RBW: record.RBW,
      expirationDate: record.expirationDate,
      price: record.price,
    };
  });

  const [values, setValues] = useState<any>(initialValues);

  const schema = yup.object().shape({
    name: yupFormSchemas.string(
      i18n('bundle.fields.name'),
      {
        max: 200,
        min: 1,
      },
    ),
    UNIM: yupFormSchemas.integer(
      i18n('bundle.fields.UNIM'),
      {
        required: true,
        min: 0,
        max: props.tokens?.UNIM,
      },
    ),
    RBW: yupFormSchemas.integer(i18n('bundle.fields.RBW'), {
      required: true,
      min: 0,
      max: props.tokens?.RBW,
    }),
    expirationDate: yupFormSchemas.date(
      i18n('bundle.fields.expiration'),
      {},
    ),
  });

  let form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const setCheckedUnicorn = (checked, tokenId) => {
    setUnicorns(() => {
      let unicorns_temp = unicorns;

      for (let i = 0; i < unicorns_temp.length; i++) {
        if (unicorns_temp[i].tokenId === tokenId) {
          unicorns_temp[i].checked = checked;
        }
      }

      return unicorns_temp;
    });
  };

  const setCheckedLand = (checked, tokenId) => {
    setLands(() => {
      let lands_temp = lands;

      for (let i = 0; i < lands_temp.length; i++) {
        if (lands_temp[i].tokenId === tokenId) {
          lands_temp[i].checked = checked;
        }
      }

      return lands_temp;
    });
  };

  const onSubmit = (values) => {
    if (isLastStep) {
      let bundle: Bundle = {
        UNIM: values.UNIM,
        RBW: values.RBW,
        unicorns: [],
        lands: [],
        price: values.price,
      };

      for (let i = 0; i < unicorns.length; i++) {
        if (unicorns[i].checked === true) {
          bundle.unicorns.push(unicorns[i].tokenId);
        }
      }

      for (let i = 0; i < lands.length; i++) {
        if (lands[i].checked === true) {
          bundle.lands.push(lands[i].tokenId);
        }
      }

      props.onSubmit(props.record?.id, bundle);
    } else {
      let numberNFTs = 0;
      for (let i = 0; i < lands?.length; i++) {
        if (lands[i].checked === true) numberNFTs++;
      }
      for (let i = 0; i < unicorns?.length; i++) {
        if (unicorns[i].checked === true) numberNFTs++;
      }
      let price = parseFloat(
        (
          numberNFTs * 0.015 +
          values.UNIM * 0.000003 +
          values.RBW * 0.000224
        ).toFixed(2),
      );
      form.setValue('price', price);
      dispatch(formActions.doRefresh());
      setValues(values);
      setActiveStep(activeStep + 1);
    }
  };

  const { saveLoading } = props;

  const makeFormButtons = () => {
    return (
      <MDBox
        position="relative"
        display="flex"
        py={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {activeStep === 0 ? (
          <MDBox>
            <MDTypography
              sx={{
                color: colors.dark.main,
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              {i18n('bundle.create.balance')}
            </MDTypography>
            <MDBox display="flex">
              <MDBox
                display="flex"
                sx={{
                  borderRight: 1,
                  borderColor: 'grey.400',
                  pr: '12px',
                }}
              >
                <img
                  src="/images/tokens/UNIM.svg"
                  width="20px"
                  alt="UNIM"
                />
                <MDTypography
                  sx={{
                    ml: '4px',
                    color: colors.dark.main,
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {`${props.tokens?.UNIM} UNIM`}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" pl="12px">
                <img
                  src="/images/tokens/RBW.svg"
                  width="20px"
                  alt="RBW"
                />
                <MDTypography
                  sx={{
                    ml: '4px',
                    color: colors.dark.main,
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {`${props.tokens?.RBW} RBW`}
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        ) : (
          <MDButton
            variant="outlined"
            color="purple"
            disabled={saveLoading}
            onClick={handleBack}
            startIcon={<ArrowBackIosIcon />}
            size="small"
            circular
          >
            {i18n('common.previous')}
          </MDButton>
        )}

        <Stepper activeStep={activeStep} length={4} />

        {isLastStep ? (
          <MDButton
            variant="gradient"
            color="purple"
            disabled={saveLoading}
            type="submit"
            onSubmit={form.handleSubmit(onSubmit)}
            size="small"
            circular
          >
            {i18n('common.publish')}
          </MDButton>
        ) : (
          <MDButton
            variant="gradient"
            color="purple"
            disabled={saveLoading}
            type="submit"
            endIcon={<ArrowForwardIosIcon />}
            size="small"
            circular
          >
            {i18n('common.continue')}
          </MDButton>
        )}
      </MDBox>
    );
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            mt={1}
          >
            <Grid item md={10} sm={12} xs={12}>
              <Card>
                <MDBox px={3}>
                  <CreateBundle
                    visible={activeStep === 0}
                    title={props.title}
                  />
                  <SelectUnicorns
                    visible={activeStep === 1}
                    unicorns={unicorns}
                    onChange={(checked, tokenId) =>
                      setCheckedUnicorn(checked, tokenId)
                    }
                  />
                  <SelectLands
                    visible={activeStep === 2}
                    lands={lands}
                    onChange={(checked, tokenId) =>
                      setCheckedLand(checked, tokenId)
                    }
                  />
                  <ReviewBundle
                    visible={isLastStep}
                    values={values}
                    unicorns={unicorns}
                    lands={lands}
                  />
                  <MDBox px={1}>{makeFormButtons()}</MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default BundleForm;
