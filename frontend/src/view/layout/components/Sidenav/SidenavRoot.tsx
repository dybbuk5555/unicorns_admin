/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Drawer from '@mui/material/Drawer';
import { styled, Theme } from '@mui/material/styles';

export default styled(Drawer)(
  ({
    theme,
    ownerState,
  }: {
    theme?: Theme | any;
    ownerState: any;
  }) => {
    const {
      palette,
      boxShadows,
      transitions,
      breakpoints,
      functions,
    } = theme;
    const { miniSidenav } = ownerState;

    const sidebarWidth = 250;
    const { transparent, gradients, white, background } =
      palette;
    const { xxl } = boxShadows;
    const { pxToRem, linearGradient } = functions;

    let backgroundValue = linearGradient(
      gradients.dark.main,
      gradients.dark.state,
    );

    backgroundValue = white.main;

    // styles for the sidenav when miniSidenav={false}
    const drawerOpenStyles = () => ({
      background: backgroundValue,
      transform: 'translateX(0)',
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xl')]: {
        boxShadow: xxl,
        marginBottom: 'inherit',
        left: '0',
        width: sidebarWidth,
        transform: 'translateX(0)',
        transition: transitions.create(
          ['width', 'background-color'],
          {
            easing: transitions.easing.sharp,
            duration: transitions.duration.enteringScreen,
          },
        ),
      },
    });

    // styles for the sidenav when miniSidenav={true}
    const drawerCloseStyles = () => ({
      background: backgroundValue,
      transform: `translateX(${pxToRem(-320)})`,
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xl')]: {
        boxShadow: xxl,
        marginBottom: 'inherit',
        left: '0',
        width: pxToRem(96),
        overflowX: 'hidden',
        transform: 'translateX(0)',
        transition: transitions.create(
          ['width', 'background-color'],
          {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
          },
        ),
      },
    });

    return {
      '& .MuiDrawer-paper': {
        boxShadow: xxl,
        border: 'none',

        ...(miniSidenav
          ? drawerCloseStyles()
          : drawerOpenStyles()),
      },
    };
  },
);
