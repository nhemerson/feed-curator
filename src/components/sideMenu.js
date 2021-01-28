import React, { Component } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHome, FaSearch, FaListUl } from 'react-icons/fa';
import { Link, Router } from 'react-router-dom';


class SideMenu extends Component {

  render() {
    return (
      
      <ProSidebar
        breakPoint="lg"

        toggled="true"
      >
        <SidebarHeader>
          <div
            style={{
              padding: '10px',
              
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <h3>Relu.io</h3>
          </div>
        </SidebarHeader>
  
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
              title="Playlists"
              
            >
              <MenuItem><Link to='/level'>Industry Playlist </Link></MenuItem>
              <MenuItem>Analyze Playlist <Link to='/domain'></Link></MenuItem>
              <MenuItem>Visualize Playlist <Link to='/media'></Link></MenuItem>
              <MenuItem>Model Playlist <Link to='/level'></Link></MenuItem>
              <MenuItem>Deploy Playlist <Link to='/level'></Link></MenuItem>
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