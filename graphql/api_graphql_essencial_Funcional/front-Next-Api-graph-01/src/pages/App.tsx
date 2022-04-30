import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import Routes from './routes'

import client from '../services/apolloConfig'

import GlobalStyle from '../styles/globals'

const App = () => (
    <Router>
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    </Router>

)