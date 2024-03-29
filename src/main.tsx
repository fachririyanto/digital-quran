import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './hooks/provider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
)
