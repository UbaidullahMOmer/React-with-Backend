// import React from 'react'

// function Tag() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Tag
import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {Row, Container} from 'react-bootstrap'
import { useParams} from 'react-router-dom'
import PostGrid from './components/PostGrid'

const TAG = gql`
query GetTag ($id:ID!) {
  tag (id:$id){
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

const Tag = () => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(TAG, {
    variables: {id: id}
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error... </div>


console.log("sdfsdfsdf",id)

return(
  <div>
    <Container>
      <h1><span className="bg-tertiary-color text-primary-color">Tag relavent post</span></h1>
    <h3 className="text-tertiary-color">{data.tag.data.attributes.name} - {data.tag.data.attributes.portfolios.data.length}</h3>
    <Row>
      {data.tag.data.attributes.portfolios.data.map(item => (
        <PostGrid item={item}/>
      ))}
    </Row>
    </Container>
  </div>
)
}
export default Tag;