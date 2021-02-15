import React, { Component } from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

import { FaHome, FaSearch, FaListUl } from 'react-icons/fa';

import { Link } from 'react-router-dom';


class SideMenu extends Component {

  render() {
    return (
      
      <ProSidebar
        breakPoint="lg"
        toggled="true"
        >

        <SidebarContent>
          <Menu >
            <MenuItem icon={<FaHome />}>
                
                Home <Link to='/'></Link>
            </MenuItem>

            <MenuItem icon={<FaSearch />}> 
                Search
            </MenuItem>

            <SubMenu
            icon={<FaListUl />}
              suffix={<span className="badge yellow"></span>}
              title="Tracks"
              
            >
              <MenuItem><Link to='/level'>Your Track #1</Link></MenuItem>
              <MenuItem>Your Track #2<Link to='/domain'></Link></MenuItem>
              <MenuItem>You Track #3<Link to='/media'></Link></MenuItem>
            </SubMenu>
            

          </Menu>
        </SidebarContent>
  
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              
            
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      
    );

  }
    
  
}
  
  export default SideMenu;