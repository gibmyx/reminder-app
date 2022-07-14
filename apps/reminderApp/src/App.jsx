import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios";

function App() {
    const [count, setCount] = useState(0)

    const setLogin = async () => {
        // const resp = await fetch("http://localhost/api/login", {
        //     body: {
        //         email: 'test@example.com',
        //         password: 'password'
        //     },
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Accept": "application/json"
        //     },
        //     method: 'post'
        // })

        const response = await axios.post("http://localhost/api/login", {
            email: 'test@example.com',
            password: 'password'
        });

        // const {data} = resp.json()
        // console.log(data, resp)
        console.log(response);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                    <button type="button" onClick={setLogin}>
                        Login
                    </button>
                </p>
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App