import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export class TwitterFollow extends React.Component{
render()
{
return (<div style={{marginLeft:'1017px',marginTop:'60px'}} >





  <List style={{height:'470px',backgroundColor:'white',width:'300px'}}>
    <h5 style={{marginLeft:'25px'}}>    <b style={{fontSize :'20px'}}> Who to follow  </b>
      <a style={{ fontSize:'12px'}} href="#"> . Refresh</a>
      <a style={{ fontSize:'12px'}} href="#"> . View all </a>
    </h5>


    <ListItem
      primaryText=" sachin tendulkar " secondaryText="@sachin_rt"
      leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/2504398687/344204969_400x400.jpg" />}
    />

    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={false}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'100px'}}
     secondary={true}
	/>
    <ListItem
      primaryText="Muhammad Ali" secondaryText="@MohammadAli"
      leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/424184673938329600/FArA372x_bigger.jpeg" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={false}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
	  secondary={true}
    />
    <ListItem
      primaryText="Bill Gates" secondaryText="@BillGates"
      leftAvatar={<Avatar style={{height:50}}src="https://pbs.twimg.com/profile_images/929933611754708992/ioSgz49P_400x400.jpg" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={false}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
	  secondary={true}
    />
    <br/><br/>
    <Divider />
    <br/>
    <a href="#"><i  style={{color:'#00aced',marginLeft:'20px'}} class="fa fa-user"></i  ><b> Find people you know</b></a>
      <br/>
      <br/>
      <Divider />
      <div style={{backgroundColor:'rgb(210, 220, 237)',height:'30px'}}></div>
    </List>
  </div>)
}
}





