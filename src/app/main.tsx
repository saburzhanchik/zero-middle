import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { MainPage } from '../pages/MainPage'

createRoot(document.getElementById('root')!).render(<MainPage />)
