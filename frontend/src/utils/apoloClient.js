import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_ADMIN_BASE_URL}/graphql`,
    cache: new InMemoryCache()
})
export default client
