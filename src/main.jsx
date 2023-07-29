import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import './index.css'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/'
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
)
