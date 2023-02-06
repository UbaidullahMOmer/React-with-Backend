import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClientf({
    uri : `${process.env.REACT-APP-ADMIN-BASE-URL}/graphql`,
    cache: new InMemoryCache()
})
export default client
