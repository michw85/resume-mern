import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {LinkCard} from "../components/LinkCard";

export const DetailPage = () => {
    // data of authorization
    const {token} = useContext(AuthContext)
    // for request use hook useHttp
    const  {request, loading} = useHttp()
    // get link id from backend with useState
    const [link, setLink] = useState(null)
    // For loading data and work with linkId
    // Keys for Id from routs
    const linkId = useParams().id

    const getLink = useCallback( async () => {
        try {
            const featched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(featched)
        } catch (e) {}
    }, [token, linkId, request])

    useEffect( () => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }
    return (
        <>
            { !loading && link && <LinkCard link={link}/>}
        </>
    )
}