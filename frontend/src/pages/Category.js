import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {Row, Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import PostGrid from './components/PostGrid'
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


console.log("sdfsdfsdf",data)

return(
  <div>
    <Container>
      
      <h1><span className="bg-tertiary-color text-primary-color">Category relavent post</span></h1>
    <h3 className="text-tertiary-color">{data.category.data.attributes.name} - {data.category.data.attributes.portfolios.data.length}</h3>
    <Row>
      {data.category.data.attributes.portfolios.data.map(item => (
          <PostGrid item={item}/>
      ))}
    </Row>
    </Container>
  </div>
)
}
export default Category;