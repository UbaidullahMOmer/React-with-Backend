import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { gql, useQuery } from '@apollo/client'
import { LinkContainer } from "react-router-bootstrap"
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
    const { loading, error, data } = useQuery(CATEGORIES)

    if (loading) return <div><h1>Loading...</h1></div>
    if (error) return <div><h1>Error...</h1></div>
    console.log(data)
    return (
        <>
            <Container>
                <Navbar className="py-3" sticky='top' collapseOnSelect expand="lg">
                    <LinkContainer to={'/'}><Navbar.Brand >React Bootstrap</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                        <Nav>
                            {
                                data.categories.data.map(item => (
                                    <LinkContainer key={item.id} to={`/category/${item.attributes.slug}`}><Nav.Link >{item.attributes.name}</Nav.Link></LinkContainer>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}

export default SiteHeader
