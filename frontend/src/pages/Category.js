import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {Row, Col, Card, Container} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'

const CATEGORIES = gql`
query GetCategory ($id:ID!) {
  category (id:$id){
    data{
      id,
      attributes{
        name,
        slug,
        portfolios{
          data{
            id,
            attributes{
              title,
              description,
              date,
              image{
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
    }
  }
}
`

const Category = () => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(CATEGORIES, {
    variables: {id: id}
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error... </div>


console.log("sdfsdfsdf",id)

return(
  <div>
    <Container>
    <h1>{data.category.data.attributes.name}</h1>
    <Row>
      {data.category.data.attributes.portfolios.data.map(item => (
        <Col key={item.id} md={4} className='mb-5'>
          <Card style={{  boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)"}} className='card-img h-100'>
            {/* <Card.Img variant='top' src={`${process.env.REACT_APP_ADMIN_BASE_URL}${item.attributes.image.data.attributes.url}`}></Card.Img> */}
            <Card.Img variant='top' src={`${process.env.REACT_APP_ADMIN_BASE_URL}${item.attributes.image.data.attributes.url}`}></Card.Img>
            <Card.Body className='p-3'>
              <Card.Title className='mb-2'>{item.attributes.title}</Card.Title>
              <Card.Subtitle>{item.attributes.description.substring(0,100)}... <Card.Link as={Link} to={`/portfolio/${item.id}`}>Read More</Card.Link></Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  </div>
)
}
export default Category;