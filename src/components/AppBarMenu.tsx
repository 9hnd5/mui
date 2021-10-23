import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import MuiToolbar, { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { LayoutContext } from './Layout';

interface AppBarStyledProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth?: number;
}
const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth',
})<AppBarStyledProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface ToolbarStyledProps extends MuiToolbarProps {}
const ToolbarStyled = styled(MuiToolbar)<ToolbarStyledProps>``;

const AppBarMenu = () => {
  const { open, onOpen, drawerWidth } = React.useContext(LayoutContext);

  return (
    <AppBarStyled position="fixed" open={open} drawerWidth={drawerWidth}>
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </ToolbarStyled>
    </AppBarStyled>
  );
};
export default AppBarMenu;
