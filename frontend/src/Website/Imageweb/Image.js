import React, { Component } from 'react';
import Search from "./components/search/Search";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Image extends Component{
  render(){
    return(
      <MuiThemeProvider >
      <div style={{backgroundColor: 'white'}}>
      <Search />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default Image;