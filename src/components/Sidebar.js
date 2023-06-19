import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor='white'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div>
              <h1>hello</h1>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </div>
            <div>
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </div>
            <div>
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </div>
            <div>
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </div>

            <div>
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;