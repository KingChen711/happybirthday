import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constant'

export default function PrivateRoute() {
  let token = sessionStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
  return (
    !token ? <Navigate to="/countdown" /> : <Outlet />
  )
}