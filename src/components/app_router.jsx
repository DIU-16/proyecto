import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import CoursePage from '../pages/course'
import { ForoPage } from '../pages/foro'
import ChatPage from '../pages/chat'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/foro' element={<ForoPage/>} />
        {/* <Route path='/chat' element={<ChatPage/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
