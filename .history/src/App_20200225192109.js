import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
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
      input:'https://samples.clarifai.com/face-det.jpg',
      imageUrl:''
    }
  }

onInputChange = (event) => console.log(event.target.value)

onButtonSubmit = () => {
  
  this.setState({imageUrl:this.state.input})

  app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
  "https://samples.clarifai.com/face-det.jpg")
  .then(
    function(response) {
     console.log(response)
    },
    function(err) {
      console.log('Ooops',err)
    }
  );
  console.log('click')
} ;

  render(){
    return (
      <div className="App">
        <Particles className="particles"
        params={particlesOptions}
        />
        <Navigation/>  
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition/>
      </div>
    );
  }
  
}

export default App;
