import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Image from 'material-ui-image';
export class Feed extends React.Component{
  render()

  {return(
    <div>
      <List>
        <div style={{marginTop:'-637px'}}class="text-center co l-md-4 col-md-offset-4" >
          <Paper style={{marginLeft:-8,width:565,height:90}}>
          
            <List>
              <ListItem style={{marginLeft:'-10px'}}

                leftAvatar={
                  <Avatar src="har4.jpg" />
                }
              >
              </ListItem>
            </List>

            <form >
              <div class="input-group"  style={{marginTop:'-40px'}}>
                <input  type="text" class="form-control" placeholder="What's happening?"
                  style={{marginLeft:'50px',height:'45px',width:'500px',backgroundColor:'#F8F8F8', borderRadius:'10px'}}/ >
                  <div class="input-group-btn">
                    <button class="btn btn-default" style={{height:'45px',color:'#00aced',marginLeft:'-38px',paddingTop:'-120px'}}>
                      <i class="glyphicon glyphicon-picture" ></i>
                    </button>
                    </div>
                  </div>
              </form>
            </Paper>
          </div>
          <div class="text-center co l-md-4 col-md-offset-4" >
            <Paper style={{width:565,height:100,marginLeft:-8,marginTop:20,textAlign:'left'}} zDepth={3} rounded={false} >
			
			
				 
  
		
			
              <b style={{marginLeft:5,marginBottom:10}}>
			  <Avatar src="https://pbs.twimg.com/profile_images/853850199609024512/Rjw4RCp7_bigger.jpg">

      </Avatar>ICCI
              </b><br/>
              <h5 style={{marginLeft:5}}>Find yourself someone who looks at you like Steve Smith looks at the <a href="#">#Ashes</a> urn 😍
<br/>
                <a href="#">#SAvIND</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -8,
              marginBottom:10,


            }}
              zDepth={3} rounded={false} ><Image loadingStyle={{color:'red'}} color='#00aced'  src="https://pbs.twimg.com/media/DS_x8PbUMAAxJRV.jpg"/></Paper>


            <Paper style={{width:565,height:150,marginLeft:-8,}} zDepth={3} rounded={false} />



            <Paper style={{width:565,height:70,marginTop:-45,marginLeft: -8}} zDepth={3} rounded={false} >
              <i  style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i  style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i>
              <Divider style={{marginTop:10}}/>
            </Paper>



            <Paper style={{width:565,height:100,marginLeft:-8,marginTop:-20,textAlign:'left'}} zDepth={3} rounded={false} >
              <b style={{marginLeft:5,marginBottom:10}}>
			  <Avatar src="https://pbs.twimg.com/profile_images/948963064036016128/tSQAhbG8_bigger.jpg">

      </Avatar>&nbsp;India Telecommunication Services-ITS&nbsp;
              
              </b><br/>
              <h5 style={{marginLeft:5}}>Much-anticipated OTP based IVRS linking method is now operational,no need to visit operator's store to link mobile number with Aadhar. <br/>
                <a href="#">#DigitalIndia #mobile #Aadhaar</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -8,
              backgroundImage:"url('')",
              marginBottom:151,
              textAlign: 'center',

            }}
              zDepth={3} rounded={false} LeftAvatar={<Avatar src="images/ok-128.jpg" />} >
              <Image color='#00aced' src="https://pbs.twimg.com/media/DSmQereU0AAT9sG.jpg"/>
            </Paper>
            <Paper style={{width:565,height:40,marginTop:-45,marginLeft: -8}} zDepth={3} rounded={false} >
              <i style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i></Paper>



          </div>
        </List>

      </div>





      );



      }
      }
