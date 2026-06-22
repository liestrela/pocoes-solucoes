import { Routes, Route } from 'react-router-dom'
import Storefront from './pages/Storefront.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Storefront />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}
