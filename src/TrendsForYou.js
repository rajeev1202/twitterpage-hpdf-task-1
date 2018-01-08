import React from 'react';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
import Paper from 'material-ui/Paper';
export class TrendsForYou extends React.Component{
render(){

return(
<div>
 



<List style={{backgroundColor:'white',height:'620px',width:'300px',marginLeft:'185px',marginTop:'-30px'}}>
  <h4 style={{marginLeft:'10px'}}><b> Trends For You</b> <a style={{ fontSize:'12px'}} href="#"> &nbsp;&nbsp;. Change</a></h4>
  <ListItem  style={{color:'#00aced',size:'20px'}} primaryText="#SAvIND" secondaryText="48.8k tweets"/>

  <ListItem  style={{color:'#00aced'}} primaryText="#Hardik Pandya" secondaryText="13.3k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#Bengaluru" secondaryText="9.3k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#nffc" secondaryText="16.3k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#UIDAI" secondaryText="4.7k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#BENKOL" secondaryText="9.4k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="The Tribune" secondaryText="16.1k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#Shami" secondaryText="29.9k tweets"/>


</List>
</div>


)


}



}




