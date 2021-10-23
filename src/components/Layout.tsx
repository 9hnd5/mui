import Box from '@mui/material/Box';
import { Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';
import AppBarMenu from './AppBarMenu';
import Content from './Content';
import DrawerMenu from './DrawerMenu';

export const LayoutContext = React.createContext<LayoutContextType>({} as LayoutContextType);
export interface LayoutContextType {
  theme: Theme;
  open: boolean;
  drawerWidth: number;
  onOpen: () => void;
  onClose: () => void;
}

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const layoutProps = {
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    theme: theme,
    open: open,
    drawerWidth: 240,
  };
  return (
    <LayoutContext.Provider value={{ ...layoutProps }}>
      <Box sx={{ display: 'flex' }}>
        <AppBarMenu />
        <DrawerMenu />
        <Content>{children}</Content>
      </Box>
    </LayoutContext.Provider>
  );
}
