// frontend/src/App.jsx
import { useEffect, useState } from 'react'

export default function App() {
    const [msg, setMsg] = useState('...')
    useEffect(() => {
        fetch('/api/ping').then(r => r.text()).then(setMsg).catch(() => setMsg('error'))
    }, [])
    return <div style={{padding:20}}>Backend says: {msg}</div>
}
