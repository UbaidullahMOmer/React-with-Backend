import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useQuery, gql } from '@apollo/client'
import { Row,Container, Badge, Col, Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
     date,
     tags{
      data{
        id,
        attributes{
          name,
          slug
        }
      }
     },
     gallery{
      data{
        attributes{
          url
        }
      }
     }
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
    <div id="page-id-single-post">
      <div className='my-5 text-quaternary-color' style={{width: "1200px", marginLeft:"250px"}}>
        <Row>
          <h1>{data.portfolio.data.attributes.title}</h1>
        </Row>
        <p>
          <span>{data.portfolio.data.attributes.date}</span>
          <span className='mx-2'>|</span>
          <span>Ubaidullah Tech</span>
        </p>
        <span>
          {data.portfolio.data.attributes.tags.data.map(tag => (
            <Link to={`/tag/${tag.id}`}>
              <Badge bg='none' className="bg-quaternary-color text-primary-color" key={tag.id}>#{tag.attributes.name}</Badge>
            </Link>
          ))}
        </span>
      </div>
      <Row className='post-detail rounded-top shadow pt-3 bg-quaternary-color' style={{width: "1200px", marginLeft:"250px"}}>
        <Col>
        <Carousel >
        <Carousel.Item><Card.Img  src={`${process.env.REACT_APP_ADMIN_BASE_URL}${data.portfolio.data.attributes.image.data.attributes.url}`}></Card.Img></Carousel.Item>
          {data.portfolio.data.attributes.gallery.data.map(image =>(
            <Carousel.Item><Card.Img src={`${process.env.REACT_APP_ADMIN_BASE_URL}${image.attributes.url}`}></Card.Img></Carousel.Item>
          ))}
        </Carousel>
        {/* {
          <Link to={`/portfolio/${data.portfolio.data.id}`}><Card.Img id="featued-img" src={`${process.env.REACT_APP_ADMIN_BASE_URL}${data.portfolio.data.attributes.image.data.attributes.url}`}></Card.Img></Link>
        } */}
        <Container>
        <h3 style={{padding: "10px", paddingTop: "20px"}}>{`${data.portfolio.data.attributes.title}`}</h3>
        <p style={{padding: "5px"}}>{data.portfolio.data.attributes.description}</p>
        </Container>
        </Col>
      </Row>
    </div>
  )
}

export default SinglePortfolio