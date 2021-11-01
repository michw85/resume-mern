import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'
export const useAuth = () => {
    // flags
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)

    const login = useCallback( (jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify( {
            userId:id, token:jwtToken
        }))
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    // check the availability of tokens for loading routes
    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
        // authorization module worked
        setReady(true)
    }, [login])

    return { login, logout, token, userId, ready }
}