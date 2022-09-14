import { useEffect, useState } from "react";

export function useToken() {
    const [token, setToken] = useState('');
    useEffect(() => {
        const url = window.location.hash;

        if(url.indexOf('access_token') !== -1) {
            const access_token = url.split('=')[1].split('&')[0];
            setToken(access_token)
        }
    }, [])
    return [token]
}

