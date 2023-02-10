import React from 'react'
// import useFetch from '../hooks/useFetch'
// import { Link } from "react-router-dom"
import { useQuery, gql } from '@apollo/client'
import { Row, Container } from "react-bootstrap"
import HeroScetion from './components/HeroSection'
import PostGrid from './components/PostGrid'

const PORTFOLIOS = gql`
    query GetPortfolios{
     portfolios{
      data{
        id
        attributes{
         title,
         description,
         image{
          data{
            attributes {
              url
            }
          }
         },
         tags{
          data{
            id,
            attributes{
              name,
              slug
            }
          }
         }
        }
      }
    }
  }
  `

const HomePage = () => {
  const { loading, error, data } = useQuery(PORTFOLIOS)

  console.log("dftgdg", data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Errhhhor...</div>

  return (
    <div>
      <>
        <Container>
          <HeroScetion />
          <Row>
            {data.portfolios.data.map(item => (
              <PostGrid item={item} />
            ))}
          </Row>
        </Container>
      </>
    </div>
  )
}
export default HomePage
