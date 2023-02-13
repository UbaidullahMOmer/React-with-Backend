import React from 'react'
import {Col,Badge, Card,} from "react-bootstrap"
import { Link, } from "react-router-dom"

const PostGrid = ({item}) => {
  return (
    <Col key={item.id} md={4} className="mb-5">
    <Card style={{  boxShadow: "0 8px 12px 0 rgba(0,0,0,0.2)"}} className='card-img h-100'>
      <Card.Img variant='top' src={`${process.env.REACT_APP_ADMIN_BASE_URL}${item.attributes.image.data.attributes.url}`}></Card.Img>
      <Card.Body className='p-3'>
        <span>
            {
                item.attributes.tags.data.map(tag => (
                    <Link to={`/tag/${tag.attributes.slug}` }key={tag.id}>
                        <Badge className="bg-primery-color m-2">#{tag.attributes.name}</Badge>
                    </Link>
                ))
            }
        </span>
        <Card.Title className='mb-2'>{item.attributes.title}</Card.Title>
        <Card.Subtitle>{item.attributes.description.substring(0, 120)}...<Card.Link as={Link} to={`/portfolio/${item.attributes.slug}`}>Read More</Card.Link></Card.Subtitle>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default PostGrid
