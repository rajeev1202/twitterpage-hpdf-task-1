import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {black} from 'material-ui/styles/colors';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import {cyan500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';


export class TabsExampleIconText extends React.Component{



render()
{

    return(
  <div style={{ height:70,backgroundColor:'white'}}>
    <Tabs style={{ height:'20%',width:'20%',

    }}  tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}} style={{marginLeft:'130px',marginTop:'', height:'20%',width:'35%',

      }} >

      <Tab iconStyle={{color:'grey'}} buttonStyle={{color:'grey'}}
        icon={<FontIcon style={{color:'#00aced'}} className="material-icons">home</FontIcon>}
        label="Home"  style={{textTransform: "none"}} iconStyle={{color:'black'}}
      />
      <Tab buttonStyle={{color:'grey'}}
        icon={<FontIcon  style={{color:'#00aced'}} className ="material-icons">flash_on</FontIcon>}
        label="Moments"  style={{textTransform: "none"}}
      />
      <Tab buttonStyle={{color:'grey'}} style={{width:'50px'}}
        icon={<FontIcon style={{color:'#00aced'}} iconStyle={{color:'black'}} className ="material-icons">notifications_none</FontIcon>}
        label="Notifications"  style={{textTransform: "none"}}
      />
      <Tab buttonStyle={{color:'grey'}} style={{width:'50px'}}
        icon={<FontIcon style={{color:'#00aced'}} className="material-icons">mail_outline</FontIcon>}
        label="Messages"  style={{textTransform: "none"}}
      />

    </Tabs>

    <div style={{marginTop:'18px'}} class="text-center col-md-4 col-md-offset-4" >
      <i  style={{color:'#00aced'}} class="fa fa-twitter fa-2x"></i >




        <div class="form-group has-feedback" style={{marginTop:'-40px',color:'#00aced', marginLeft:'400px', borderRadius:'40px',width:'250px'}}>

          <input  type="text" placeholder="Search Twitter" class="form-control"  style={{marginTop:'3%',width:'95%',backgroundColor:'#F8F8F8', borderRadius:'40px'}} />
          <i style={{marginRight:'10px',marginTop:'12px'}} class=" fa fa-search form-control-feedback"></i>
        </div>



        <div style={{marginLeft:'148%',marginTop:'-18%'}}>
          <List >
            <ListItem style={{marginTop:'5px'}}
              disabled={true}
              leftAvatar={
                <IconButton onClick={this.dropdown}style={{marginTop:-6,marginLeft:-5}}><Avatar src="har4.jpg" /></IconButton>
              }
            >
              
              <RaisedButton label="Tweet" style={{marginTop:'-39px',marginRight:'150%'}} primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{marginLeft:'1px',borderRadius:'30px'}}/>
            </ListItem>

          </List>
        </div>


      </div>



  </div>
      );
    }}
