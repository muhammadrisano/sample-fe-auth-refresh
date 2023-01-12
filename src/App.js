import React from 'react'
import { BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Main/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/main/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App