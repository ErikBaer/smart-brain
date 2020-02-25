import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
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
      input:'',
    }
  }

onInputChange = (event) => console.log(event.target.value)

onButtonSubmit = () => {
  console.log('click');
  app.models.predict("f7738781c1e0443593a11eec5113e608", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
}

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
        {/*<FaceRecognition/>} */}
      </div>
    );
  }
  
}

export default App;
