import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://learn-with-rakib.onrender.com/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('access-token', data.accessToken);
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email]);
    return [token];
}

const getUserToken = email => {
    fetch(`https://learn-with-rakib.onrender.com/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('access-token', data.accessToken);
                // navigate('/');
            }
        })
}



export { useToken, getUserToken };