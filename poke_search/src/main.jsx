import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokeRoutes from './routes/PokeRoutes.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokeRoutes />
  </StrictMode>,
)
