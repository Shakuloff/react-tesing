// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClicked = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">Переключён</div>}
//       {data && <div style={{ color: 'red' }}>Данные</div>}
//       <h1>Привет мир!</h1>
//       <button data-testid="toggle-btn" onClick={onClicked}>Кликни меня</button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='значение.....' />
//     </div >
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <Link data-testid="main-link" to={'/'}>main</Link>
      <Link data-testid="about-link" to={'/about'}>about</Link>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
