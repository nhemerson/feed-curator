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
                
                Home
            </MenuItem>

            <MenuItem icon={<FaSearch />}> 
                Search
            </MenuItem>

            <SubMenu
            icon={<FaListUl />}
              suffix={<span className="badge yellow"></span>}
              title="Playlists"
              
            >
              <MenuItem>Industry Playlist</MenuItem>
              <MenuItem>Analyze Playlist</MenuItem>
              <MenuItem>Visualize Playlist</MenuItem>
              <MenuItem>Modelling Playlist</MenuItem>
              <MenuItem>Deploy Playlist</MenuItem>
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