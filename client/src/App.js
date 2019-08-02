import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Pages
import home from './pages/home';
import login from './pages/login';
import register from './pages/register'
//theme
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//components
import Navbar from './components/Navbar';


import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'

    }
  }

})


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/register" component={register} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>

    

);
}


export default App;
