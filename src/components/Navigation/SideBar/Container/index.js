import React from 'react';
import StyledSidebar from '../Style';

const SideBar = ({ menu }) => (
  <StyledSidebar
    className='sidebar'
    breakpoint='lg'
    theme='light'
    collapsedWidth={0}
    trigger={null}
  >
    {menu}
  </StyledSidebar>
);

export default SideBar;
