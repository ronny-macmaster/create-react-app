import React from 'react';
import { Box } from '@material-ui/core';

import AppBar from 'components/AppBar';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <AppBar />
      <Box p={1}>{children}</Box>
    </React.Fragment>
  );
}
