import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled.js';
import {TwitterFollow} from './TwitterFollow.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {TrendsForYou} from './TrendsForYou.js';
import {Feed} from './feed.js';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui-image';
import {Buttons} from './Buttons.js';
import Avatar from 'material-ui/Avatar';

export class SearchPage extends React.Component{
render()
{

return(<div>
      
  <TabsExampleIconText/>  {/*it Renders the upper Navigation bar for Twitter search page*/}

  <div style={{marginTop:'-17px',backgroundColor:'#00aced',width:'100%',height:'65px'}} >

    <h3 style={{color:'orange', paddingTop:'20px',textAlign:'right',paddingRight:'1050px'}}>
      <b >
      Aadhaar</b></h3>


  </div>
  <div style={{marginTop:'-1000',backgroundColor:'white',width:'100%',height:'48px'}} >
    <Tabs style={{ height:'18%',width:'45%',paddingLeft:'141px'

    }}tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}}

    >
      <Tab  buttonStyle={{color:'black'}} label="Top" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'black'}} label="Latest" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="People" value="c">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Photos" value="d">

      </Tab><Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Videos" value="e">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="News" value="f">
      </Tab>
	  <Tab style ={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Broadcasts" value="g" >
      </Tab>
    </Tabs>
  </div>
  <Paper style={{width:300,height:60,marginLeft:141,marginTop:20,}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Search Filters </b><a style={{fontSize:'12px'}} href="#">&nbsp;. Show</a></h4>
  </Paper>
  <Paper style={{width:300,height:200,marginLeft:141,marginTop:20}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Related Searches</b></h4>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>virar</b></a></div>
    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> #loksabha</b></a>

    <div>  <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> ponzi</b></a></div>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>#vikramsarabhai</b></a></div>

    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> mumbai fire</b></a>

  </Paper>
  <div style={{marginTop:'-39px',marginLeft:'-876px'}}>
    <TwitterFollow/>   
  </div>

  <div style={{marginLeft:'-45px',marginTop:'40px'}}>
    <TrendsForYou />    
  </div>



  <Paper style={{marginTop:'-1410px',marginLeft:'450px',height:'1639px',width:'566px'}}>
    <h5 style={{paddingTop:10}}><b style={{paddingLeft:20,marginBottom:5}}>
      <Avatar src="https://pbs.twimg.com/profile_images/934047050286604288/lPXy_h8Y_bigger.jpg">

      </Avatar>&nbsp;
      Chetan Bhagat
    </b>
    </h5>
    <h5 style={{paddingBottom:-20,paddingLeft:20,paddingTop:'-5px '}}>Instead of obsessing about linking<b> Aadhar</b> card with
	PAN card, can we link Dalits to non-Dalits, Muslims to Hindus and Indians to Indians first.

    </h5>
    <Buttons />  
    <Divider style={{marginTop:10}}/>

    <div style={{marginLeft:20,marginTop:10}}>
      <Avatar src="https://pbs.twimg.com/profile_images/948963064036016128/tSQAhbG8_bigger.jpg">

      </Avatar>
      <b >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India Telecommunication Services-ITS  </b> 
    </div>



    <h5 style={{marginLeft:5,paddingLeft:17}}>
      Much-anticipated OTP based IVRS linking method is now operational,no need to visit operator's store to link mobile number with Aadhar.
      <br/>
      <br/>
      <a href="#">#DigitalIndia #mobile #Aadhaar</a>
    </h5>
    <Paper style={{height: 450,
      width: 565,
      marginLeft: 0,
      marginBottom:10,


    }}
      zDepth={3} rounded={false} >
      <Image loadingStyle={{color:'red'}} color='#00aced'  src="https://pbs.twimg.com/media/DSmQereU0AAT9sG.jpg"/>
      <Buttons />  
      <Divider />
    </Paper>
    <Paper style={{width:565,height:100,marginLeft:0,marginTop:180,textAlign:'left'}} zDepth={3} rounded={false} >
      <div style={{marginLeft:20,paddingTop:5}}><Avatar src="https://pbs.twimg.com/profile_images/571293278281007104/a9uLp3Ae_bigger.jpeg">

      </Avatar>
        <b style={{marginLeft:5,marginBottom:10}}>The Tribune &nbsp;
          
        </b></div>

      <h5 style={{marginLeft:5}}>We are not training ahead of the El Clasico because we know we can't beat madrid no matter how hard we try. <br/>
        <a href="#">#Aadhaardata#DigitalIndia</a>
      </h5></Paper>
    <Paper style={{height: 450,
      width: 565,

        backgroundImage:"url('')",
      marginBottom:109,
      textAlign: 'center',

    }}
      zDepth={3} rounded={false}  >
      <Image color='#00aced' src="https://pbs.twimg.com/media/DSpOTDTVAAEAhqA.jpg"/>
    </Paper>
    <Buttons />
  </Paper>
</div>
  );


}


}

  
