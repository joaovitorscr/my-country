import Home from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Countries from './pages/Countries'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/countries/:id" element={<Countries />} />
  </Routes>
)

export default MyRoutes
