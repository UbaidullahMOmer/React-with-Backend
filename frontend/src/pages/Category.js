import React from 'react'
import {gql, useQuery} from '@apollo/client'
// import {Row, Col, Card} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const CATEGORIES = gql`
query GetCategory ($id: ID!) {
  category (id: $id){
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
                    formats
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
  const {id} = useParams
  const {loading, error, data} = useQuery(CATEGORIES, {
    variables: {id: id}
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error... </div>


console.log(data)

return(
  <div>
    <h1>{data.category.data.attributes.name}</h1>
    {/* <Row>
      {data.categories.data.attributes.portfolios.data.map(item => (
        <Col key={item.id} md={4} className='mb-5'>
        </Col>
      ))}
    </Row> */}
  </div>
)
}
export default Category;