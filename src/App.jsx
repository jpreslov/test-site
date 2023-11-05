import {useState} from 'react'
import Logo from './components/Logo.jsx'
import Nav from "./components/Nav.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Nav/>
            <div className="center-col">
                <Logo/>
                <button>Test</button>
            </div>
        </>
    )
}

export default App
