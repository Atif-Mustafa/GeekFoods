import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import RestaurantsList from './containers/RestaurantsList/RestaurantsList'
import Header from './components/Header/Header'
function App() {


  return (

    <>
      <Header />
      <RestaurantsList />
    </>
  )
}

export default App
