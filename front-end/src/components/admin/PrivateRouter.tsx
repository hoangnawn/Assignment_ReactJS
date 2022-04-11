import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../../utils/auth';
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const auth = isAuthenticate();
    if(auth.user.role !== 1){
        return <Navigate to="/" />
    }
  return props.children
}

// admin@admin.com // pass: namdz11
export default PrivateRouter