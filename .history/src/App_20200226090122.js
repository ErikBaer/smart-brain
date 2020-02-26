import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Particles from 'react-particles-js';
import particlesOptions from './particlesjs-config';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'f7738781c1e0443593a11eec5113e608'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'http://de.web.img2.acsta.net/r_1280_720/pictures/15/07/29/10/15/520696.jpg',
      box:{},
      route: 'signin',
      isSignedIn: 'false'
    }
  }

  calculateFaceLocation = (data) => {
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height) 
    }
  }

displayBox = (box) => {
  console.log(box)
  this.setState({box:box});
}


onInputChange = (event) => {
  this.setState({input: event.target.value})
  }

onRouteChange = (route) => {
  this.setState({route: route})
  console.log('click route')
  if (route==='home') {
    this.setState({isSignedIn:'true'})
  }
}

onButtonSubmit = () => {
  
  this.setState({imageUrl:this.state.input});

  app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
  this.state.input)
  .then(response => {
    console.log(response)
   return this.displayBox(this.calculateFaceLocation(response))
  })
  .catch(err => console.log(err, 'OOps'))
} ;

  render(){
    const {box,imageUrl} = this.state;
    return (
      <div className="App">
        <Particles className="particles"
        params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ? <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm onInputChange={this.onInputChange} 
                        onButtonSubmit={this.onButtonSubmit} 
                        />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (
            this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>        
            : <Register onRouteChange= {this.onRouteChange}/>
          )
        }
      </div>
    );
  }
  
}

export default App;
