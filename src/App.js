import React from 'react';
import './css/bootstrap.css';
import Header from './components/header'
import Main from './Main';

class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <React.Fragment>
        <div className="text-center">
          <Main />
          <Header></Header>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
