import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClientf({
    // uri : "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
})
// export 
