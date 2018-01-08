import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export class TwitterAdvetise extends React.Component


{
render(){
return(
  <Paper style={{width:300,height:160 }}>
    <List style={{marginTop:'-15px',backgroundColor:'white',height:'100px',width:'300px'}}>
      <h5 style={{color:'light grey',paddingLeft:'-80px',marginBottom:'5px'}}></h5>
      <a style={{color:'light grey',marginTop:'-10px',marginBottom:'15px'}}
      href="#"> &nbsp;&nbsp;© 2017 Twitter  About Help Center Terms Privacy policy
        &nbsp;&nbsp;Cookies Ads info Brand Blog Status Apps &nbsp;&nbsp;Jobs &nbsp;&nbsp;Marketing Businesses Developers
      </a>

      <br /><br />

      <Divider />


      <a href="#">   <h5  style={{marginLeft:'20px',marginTop:'20px'}}>
        <i class="fa fa-external-link"></i> &nbsp;
      Advertise with twitter.</h5></a>


    </List>
  </Paper>









);



}



}
