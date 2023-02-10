import React from 'react'
// import useFetch from '../hooks/useFetch'
import { Link } from "react-router-dom"
import { useQuery, gql } from '@apollo/client'
import { Row, Col, Card, Container } from "react-bootstrap"
import HeroScetion from './components/HeroSection'

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
          <HeroScetion/>
          <Row>
            {data.portfolios.data.map(item => (
              <Col key={item.id} md={4} className="mb-5">
                <Card style={{  boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)"}} className='card-img h-100'>
                  <Card.Img variant='top' src={`${process.env.REACT_APP_ADMIN_BASE_URL}${item.attributes.image.data.attributes.url}`}></Card.Img>
                  <Card.Body className='p-3'>
                    <Card.Title className='mb-2'>{item.attributes.title}</Card.Title>
                    <Card.Subtitle>{item.attributes.description.substring(0, 120)}...<Card.Link as={Link} to={`/portfolio/${item.id}`}>Read More</Card.Link></Card.Subtitle>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </div>
  )
}
export default HomePage
