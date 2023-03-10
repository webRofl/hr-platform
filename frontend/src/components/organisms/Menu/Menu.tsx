import React, { useEffect, useState } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import { MenuItem, MenuProfile } from '@/components/molecules';
import { IconComponent } from '@/components/common';
import { useLocalStorageState } from '@/store';
import * as SC from './Menu.style';

const Menu = () => {
  const theme = useTheme();
  const { isMenuOpen, setIsMenuOpen } = useLocalStorageState(({ isMenuOpen, setIsMenuOpen }) => ({
    isMenuOpen,
    setIsMenuOpen,
  }));
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState<boolean>(!matches && isMenuOpen);
  const [drawerWidth, setDrawerWidth] = useState<number>(window.innerWidth / 6);

  const toggleDrawerOpen = () => {
    setIsOpen((prev) => {
      setIsMenuOpen(!prev);
      return !prev;
    });
  };

  useEffect(() => {
    if (matches) {
      setDrawerWidth(window.innerWidth);
    }
    const newDrawerWidth = window.innerWidth / 6 >= 240 ? window.innerWidth / 6 : 240;
    setDrawerWidth(newDrawerWidth);
  }, [window.innerWidth, matches]);

  return (
    <SC.Drawer variant="permanent" isOpen={isOpen} drawerWidth={drawerWidth}>
      <SC.DrawerHeader>
        <IconButton color="success" aria-label="open drawer" onClick={toggleDrawerOpen}>
          <IconComponent
            name={isOpen ? 'menu_control_unwrap' : 'menu_control_wrap'}
            style={{ width: 30 }}
          />
        </IconButton>
      </SC.DrawerHeader>
      <SC.CustomDivider />
      <SC.MenuContainer
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        <MenuItem label="Projects" iconName="menu_projects" isShowLabel={isOpen} />
        <MenuItem label="Candidates" iconName="menu_candidates" isShowLabel={isOpen} />
        <MenuProfile isOpen={isOpen} />
      </SC.MenuContainer>
    </SC.Drawer>
  );
};

export default Menu;
