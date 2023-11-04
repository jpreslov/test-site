import {useState} from 'react'
import './App.css'
import Nav from './components/Nav.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Nav />
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
