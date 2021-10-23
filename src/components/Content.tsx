import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
interface ContentProps {
  children?: React.ReactNode;
}
const Content = (props: ContentProps) => {
  const { children } = props;
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {children}
    </Box>
  );
};
export default Content;
