
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HomePage} from './HomePage';
import {TabsExampleIconText} from './TabsExampleControlled'

import {Feed} from './feed.js';
import {TwitterAdvetise} from './TwitterAdvetise.js'
import {WhoToFollow} from './WhoToFollow.js';
import {TrendsForYou} from './TrendsForYou.js';
import {SearchPage} from './SearchPage.js';


document.body.style = 'background:rgb(210, 220, 237)';

class App extends  React.Component{

render()
{
return(
   <MuiThemeProvider >
         <HomePage/>              
     
	             
   </MuiThemeProvider>


);
}
}




ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

/*It render only homepage of twitter 
To render searchpage  type <SearchPage/> within <MuiThemeProvider> tag*/