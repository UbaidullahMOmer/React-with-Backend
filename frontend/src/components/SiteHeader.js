import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import { gql, useQuery } from '@apollo/client'

const CATEGORY = gql`
    query GetCategories{
        categories{
            deta{
                id,
                attributes{
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
    if(loading) return <div><h1>Error...</h1></div>
  return (
    <>
    <Navbar className="py-3"  sticky='top' collapseOnSelect expand="lg">
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
            <Nav>
                {
                    data.categories.data.map(item => (
                        
                    ))
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default SiteHeader
