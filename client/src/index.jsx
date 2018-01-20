import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserForm from './components/UserForm.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import Header from './components/Header.jsx';

//import styles from '../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='Main'>
        <Header/>
        <VideoPlayer/>
        <UserForm/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));