import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from "react-router-dom"
import {useQuery, gql } from '@apollo/client'

const PORTFOLIOS = gql`
    query GetPortfolios{
     portfolios{
      data{
        attributes{
         title,
         description
        }
      }
    }
  }
  `

const HomePage = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/api/portfolios')

  console.log("dftgdg", data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Errhhhor...</div>

  return (
    <div>
      <>
        <h1>Home Page</h1>
        {data.data.map(item => (
          <div key={item.id}>
            <h2>{item.attributes.title}</h2>
            <p>{item.attributes.description.substring(0, 150)}</p>
            <Link to={`/portfolio/${item.id}`}>View</Link>
          </div>
        ))}
      </>
    </div>
  )
}
export default HomePage
