import React,{FC} from 'react'
import { NavbarLink } from './NavbarLink';
import styled from '@emotion/styled';


export const Navbar: FC = (props: any) => {

  const NavbarContainer = styled.div `
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #0000;
  @media(max-width: 425px) {
    padding-top: 0;
  }
  ` 
  return(
    <NavbarContainer>
      <NavbarLink text="Xpeeriance" to="#"/>
      <NavbarLink text="Tasks" to="#"/>
    </NavbarContainer>
  )
};