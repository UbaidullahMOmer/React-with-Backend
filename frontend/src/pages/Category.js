import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {Row, Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import PostGrid from './components/PostGrid'
const CATEGORIES = gql`
query GetCategories ($slug: String!) {
  categories(filters: {slug: {eq: $slug}}){
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
              slug,
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
  const {slug} = useParams();
  const {loading, error, data} = useQuery(CATEGORIES, {
    variables: {slug: slug}
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error... </div>


console.log("sdfsdfsdf",data)

return(
  <div>
    <Container>
      
      <h1><span className="bg-tertiary-color text-primary-color">Category relavent post</span></h1>
    <h3 className="text-tertiary-color">{data.categories.data[0].attributes.name} - {data.categories.data[0].attributes.portfolios.data.length}</h3>
    <Row>
      {data.categories.data[0].attributes.portfolios.data.map(item => (
          <PostGrid item={item}/>
      ))}
    </Row>
    </Container>
  </div>
)
}
export default Category;