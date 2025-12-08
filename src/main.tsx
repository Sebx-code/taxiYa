import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import "leaflet/dist/leaflet.css";
import LoginPage from './pages/login.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <LoginPage />
  </StrictMode>
)
