import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'

export default function Layout() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
