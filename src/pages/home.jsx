import React from 'react'

import NavBar from '../components/nav_bar'
import Header from '../components/header'

export const HomePage = () => {
  return (
    <div className='page'>
        <Header />
        <h1 className='page__title'>Frontend Sample App</h1>
        <h2>Página de Inicio</h2>
    </div>
  )
}

export default HomePage
