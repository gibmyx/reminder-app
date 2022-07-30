import {useState} from 'react'
import axios from "axios";

function ReminderApp() {
    const [count, setCount] = useState(0)

    const setLogin = async () => {

        const response = await axios.post("http://localhost/api/login", {
            email: 'test@example.com',
            password: 'password'
        });

        const user = await axios.get("http://localhost/api/user", {
            headers: {
                'Authorization': `Bearer ${response.data.access_token}`,
                'test': 'thes'
            },
        });

        console.log(response, user);
    }

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default ReminderApp
