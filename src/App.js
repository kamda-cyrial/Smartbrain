import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/imagelinkform/imagelinkform.js';
import Logo from './components/Logo/logo';
import Rank from './components/Rank/rank';
import Navigation from './components/navigation/navigation';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/signin';
import Facerecognition from './components/facerecognition/facerecognition';
import Register from './components/register/register';

const paramss = {
    particles:{
      number:{
        value:100,
        density:{
          enable:true,
          value_area:800
        }
      },
      line_linked:{
        shadow:{
          enable:true,
           color:"#ffffff",
          blur:0
        }
      },
      "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
  
   
}
const app = new Clarifai.App({
  apiKey:'92438785aa8045daa7b2d288fb66bef7'
});
class App extends Component {
  constructor(){
  super();
  this.state = {
    input:'',
    imageurl:'https://lh4.googleusercontent.com/-S_MG-rh-sFc/TXLFEs_nc6I/AAAAAAAAA4A/Q4PNEr9LRFA/s1600/Fashion+Faces+%2526+Fashion+Styles+%25282%2529.jpg',
    box:[{bottomrow: 244.09213840999996,
      leftcol: 121.26039,
      rightcol: 96.71572000000003,
      toprow: 37.520041312000004}],
    route: 'signin',
    viewport: document.documentElement.clientWidth/2-250,
    user:{
      id: '',
      name: '',
      email: '',
      password: '',
      entries: '',
      joined: '',
      rank: '',
    }
  }
  }
  componentDidMount() {
    window.onresize =()=>{
      this.changeviewPort();
  }

  }

  reinit = () =>{
    this.setState({
     input:'',
     imageurl:'https://lh4.googleusercontent.com/-S_MG-rh-sFc/TXLFEs_nc6I/AAAAAAAAA4A/Q4PNEr9LRFA/s1600/Fashion+Faces+%2526+Fashion+Styles+%25282%2529.jpg',
     box:[{bottomrow: 244.09213840999996,
       leftcol: 121.26039,
       rightcol: 96.71572000000003,
       toprow: 37.520041312000004}],
     route: 'signin',
     viewport: document.documentElement.clientWidth/2-250,
     user:{
       id: '',
       name: '',
       email: '',
       password: '',
       entries: '',
       joined: '',
       rank: '',
     }
   })
  }
  calculatefacelocation = (data)=>{
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      let final1 = [];
      const height = Number(image.height);
      let i=0;
      const lgt = data.length;
      for(i;i<lgt;i++){
        const face = data[i].region_info.bounding_box;
        final1.push({
          leftcol :(face.left_col*width),
          toprow : face.top_row*height,
          rightcol:width -(face.right_col*width),
          bottomrow:( height - (face.bottom_row*height)),
      });
    }

    
      return (
      final1
      )


  }
  changeUser = (data)=>{
    console.log(data);
       this.setState({user:{
        id: data.id,
        name:data.name,
        email:data.email,
        password:data.hash,
        entries: data.entries,
        joined: data.joined,
        rank:data.rank
       }});
  }
  onrouteChange=(route)=>{
    this.setState({route:route});
  }
  changeviewPort = ()=>{
    this.setState({viewport:document.documentElement.clientWidth/2-250});
  }
  displayFaceBox = (box) => {
    this.setState({box:box});
    console.log(this.state.box);
  }
 oninputchange = (event)=>{
   this.setState({input:event.target.value});
console.log(event.target.value);
  }
  onButtonsubmit = (event) =>{
    this.setState({imageurl: this.state.input})
    console.log('Click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response =>{
      if(response){
        console.log("a", this.state.user.id)
        fetch('http://localhost:3000/image',
             {method:'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id:this.state.user.id})
      }).then(response => response.json())
      .then(count =>{
        console.log("b", this.state.user.id,"entries: ", count)
        let dataq = {
          id: this.state.user.id,
          name:this.state.user.name,
          email:this.state.user.email,
          password:this.state.user.password,
          entries: count,
          joined: this.state.user.joined
        }
        this.setState({user:dataq});
        console.log(count)

      })
    }
       this.displayFaceBox(this.calculatefacelocation(response.outputs[0].data.regions))
      })
    .catch(err=> console.log(err));
    
  }
  render() {
    if(this.state.route === 'signin'){
      return(
      <div >
        <Logo />
        <Signin onrouteChange ={this.onrouteChange} changeUser = {this.changeUser}/>
        <Particles className="particles" 
              params = {paramss}  />
        </div>)
    }else if(this.state.route === 'register'){
      return(
        <div >
          <Logo />
          <Register onrouteChange ={ this.onrouteChange} changeUser = {this.changeUser}/>
          <Particles className="particles" 
                params = {paramss}  />
          </div>)
    }
    else{
    return (
      <div className="App tc">
      <Navigation  reinit = {this.reinit}/>
      <Logo />
        <Rank rank = {this.state.user.rank} entries = {this.state.user.entries} name = {this.state.user.name} />
        <ImageLinkForm oninputchange={this.oninputchange}
        onButtonsubmit={this.onButtonsubmit}/>
        <Particles className="particles" 
              params = {paramss}  />
      <Facerecognition  box={this.state.box} imageurl = {this.state.imageurl} viewport = {this.state.viewport} />
       
      </div>
    ); 
  }
}

}

export default App;
