import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import UserProfile from './Components/UserProfile/UserProfile';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/pages/Form';
import JobSearch from './Components/JobSearch/JobSearch';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/UserProfile' component={UserProfile}/>
          <Route path='/Form' component={Form} />

          <Route path='/JobSearch' component={JobSearch}/>
        </Switch>
      </Router>
    </ApolloProvider>

  );
}

export default App;
