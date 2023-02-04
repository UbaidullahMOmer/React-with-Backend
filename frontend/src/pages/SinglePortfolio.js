import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const SinglePortfolio = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:3000/portfolio/' + id)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Errorxdf...</div>
    
    console.log("dsd",data)
    return (
        <div>
            SinglePortfolio
        </div>
    )
}

export default SinglePortfolio
