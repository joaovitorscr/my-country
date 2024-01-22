import { Toaster } from '@/components/ui/toaster'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App
