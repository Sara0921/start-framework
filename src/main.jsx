import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { routing } from './Routing/AppRouting.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routing}/>
)