import React from 'react'
import Countdown from './Countdown'
import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TimeProvider from '../contexts/TimeProvider'
import PrivateRoute from '../utils/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <TimeProvider>
        <Routes>
          <Route path="/countdown" element={<Countdown />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </TimeProvider>
    </BrowserRouter>
  )
}
