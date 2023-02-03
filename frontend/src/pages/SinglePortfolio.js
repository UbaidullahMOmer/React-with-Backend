import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SinglePortfolio = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:3000/portfolio/' + id)
    console.log("dsd",data)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <div>
            SinglePortfolio
        </div>
    )
}

export default SinglePortfolio
