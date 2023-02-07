import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useQuery, gql } from '@apollo/client' 

const PORTFOLIO = gql`
query GetPortfolios($id: ID!) {
 portfolio(id: $id) {
  data{
    id,
    attributes{
     title,
     description,
     image{
      data{
        attributes{
          url
        }
      }
     },
     date
    }
  }
}
}
`
const SinglePortfolio = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PORTFOLIO, {
    variables: { id: id }
  })


  if (loading) return <div>Loading...</div>
  if (error) return <div>Errorxdf...</div>
  console.log(data)

  return (
    <>
      <h1>SinglePortfolio</h1>
      <h2>{data.portfolio.data.attributes.title}</h2>
      <img alt="description of image" src={`${process.env.REACT_APP_ADMIN_BASE_URL}${data.portfolio.data.attributes.image.data.attributes.url}`}/>
      <span>{data.portfolio.data.attributes.date}</span>
      <p>{data.portfolio.data.attributes.description}</p>
    </>
  )
}

export default SinglePortfolio
