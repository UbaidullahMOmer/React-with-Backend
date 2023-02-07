import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import { gql, useQuery } from '@apollo/client'
import {LinkContainer} from "react-router-bootstrap"
const CATEGORIES = gql`
    query GetCategories{
        categories{
            data{
                id,
                attributes {
                    name,
                    slug
                }
            }
        }
    }
`
 
function SiteHeader() {
    const {loading, error, data} = useQuery(CATEGORIES)

    if(loading) return <div><h1>Loading...</h1></div>
    if(error) return <div><h1>Error...</h1></div>
    console.log(data)
  return (
    <>
    <Navbar className="py-3"  sticky='top' collapseOnSelect expand="lg">
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
            <Nav>
                {
                    data.categories.data.map(item => (
                        <LinkContainer><Nav.Link key={item.id} to={`/category/${item.id}`}>{item.attributes.name}</Nav.Link></LinkContainer>
                    ))
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default SiteHeader
