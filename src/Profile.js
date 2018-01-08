import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '350px',
  width: '300px',
  marginTop: '-470px',
  //marginBottom: '100px',
    position: 'relative',
  marginLeft: '185px'
};

const styleCardMedia = {
  height: '170px',
 backgroundColor:'blue'
  };

const styleCardHeaderText = {
  backgroundColor: 'white',
  marginTop: '20px',
  paddingRight: '0px',
};

const styleCardHeaderTitle ={
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '25px',
};

const styleAvatar = {
  border : '1px solid white',
  marginTop:'-50px'
 
  };

const styleLabel = {
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '.02em',
    lineHeight: '16px',
    textTransform: 'capitalize',
  color: '#657786',
    
};

const styleCardActions = {
  padding: '0px'
};

export const Profile = () => (
  
  <Card style ={paperStyle}>
    <CardMedia style ={styleCardMedia}>
     
    </CardMedia>
    <CardHeader textStyle={styleCardHeaderText} titleStyle={styleCardHeaderTitle}
      title="Rajeev Ranjan"
      subtitle="@Rajeev_techno"
      avatar = {<Avatar src="har4.jpg" size={80} style={styleAvatar}/>}
    />
    <CardActions style={styleCardActions}>
     <FlatButton label="Tweets" labelStyle={styleLabel} />
	 <FlatButton label="Following" labelStyle={styleLabel} />
	  </CardActions>
	  <CardText style={{paddingLeft:'25px',paddingTop:'9px',color:'blue'}}><b>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30</b></CardText>
	  
  </Card>
 
);