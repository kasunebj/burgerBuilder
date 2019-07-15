import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerTogle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
  <header className={classes.Toolbar}>
          <DrawerTogle clicked={props.drawerToggleClicked} />
          
          <div className = {classes.Logo}>
              <Logo />
          </div>
          <nav className={classes.DesktopOnly}>
              <NavigationItems/>
          </nav>
  </header>
);
export default toolBar;
