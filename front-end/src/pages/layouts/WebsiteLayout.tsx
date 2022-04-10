import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from '../../components/home/FooterHome'
import HeaderHome from '../../components/home/HeaderHome'
import NavHome from '../../components/home/NavHome'

type Props = {}

const WebsiteLayouts = (props: Props) => {
  return (
    <div>
      <HeaderHome/>
      <Outlet />
      <FooterHome />
    </div>
  )
}

export default WebsiteLayouts