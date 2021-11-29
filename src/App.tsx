import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppProviders } from './AppProviders'
import { Intro } from './pages/Intro'

export const App = () => (
  <AppProviders>
    <Routes>
      <Route element={<Intro />} path="/" />
    </Routes>
  </AppProviders>
)
