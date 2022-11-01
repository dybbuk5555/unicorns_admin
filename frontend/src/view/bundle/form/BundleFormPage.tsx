import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/bundle/form/bundleFormActions';
import selectors from 'src/modules/bundle/form/bundleFormSelectors';
import BundleForm from 'src/view/bundle/form/BundleForm';
import { getHistory } from 'src/modules/store';
import Spinner from 'src/view/shared/Spinner';
import { Grid } from '@mui/material';
import SpinnerModal from 'src/view/shared/modals/SpinnerModal';

function BundleFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const [progress, setProgress] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);

  const title = isEditing
    ? i18n('bundle.edit.title')
    : i18n('bundle.create.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    console.log(isEditing);
    setProgress(true);
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      console.log(data);
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <BundleForm
            title={title}
            saveLoading={saveLoading}
            record={record}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/bundle')}
          />
        )}
      </Grid>

      {progress && <SpinnerModal />}
    </Grid>
  );
}

export default BundleFormPage;
