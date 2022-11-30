import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.div`
  background-color: #5a5757;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
`

export const SidebarMenu = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #696564;
  position: fixed;
  top: 0;
  transition: 0.6s;
  padding-top: 60px;
`

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 65px;
  padding: 0.5rem 0 1.25rem;
`

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
  }
`
