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
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, 
    "https://www.aconsciousrethink.com/wp-content/uploads/2019/11/put-others-down-702x336.jpgaconsciousrethink.com/12254/people-who-put-others-down/")
    .then(
    function(response) {
     console.log(response)
    },
    function(err) {
      Console.log('Oops - Error')
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
        {/*<FaceRecognition/>} */}
      </div>
    );
  }
  
}

export default App;
