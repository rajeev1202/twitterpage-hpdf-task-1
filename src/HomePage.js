import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled'
import {Feed} from './feed.js';
import {TwitterAdvetise} from './TwitterAdvetise.js'
import {TwitterFollow} from './TwitterFollow.js';
import {TrendsForYou} from './TrendsForYou.js';
import {Profile} from './Profile';
 


 export class HomePage extends React.Component{

  render()
  { return(
    <div>
	
      <TabsExampleIconText />
      <div style={{marginTop:-50}} >
     
        <TwitterFollow/>
      </div>
          <div  style={{marginBottom:50,marginTop:0,marginLeft:-52}}>
		   
		  <Profile/>
		  
	
          </div>
		  <div style={{marginLeft:-52,margintop:0 }}>
       <TrendsForYou />
	  
      </div>
      <div  style={{marginLeft:1017,marginTop:-520  }}>
     
       <TwitterAdvetise/>
      </div>
      <Feed />
    </div>
);
}}
