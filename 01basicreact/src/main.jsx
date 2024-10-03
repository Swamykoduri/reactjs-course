import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Randomimg from './Randomimg.jsx'

const root = createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <Counter />
        <Randomimg />
    </StrictMode>
)

