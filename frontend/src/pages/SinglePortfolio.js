import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SinglePortfolio = () => {
    const { id } = useParams();
    const {loading, error, data} = useFetch('http://localhost:1337/api/portfolio' + id)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Errorxdf...</div>
    
    console.log("dsd",data)
    return (
        <div>SinglePortfolio</div>
    )
}

export default SinglePortfolio
