import React from 'react';
import Balloon from '../src/components/atoms/Balloon';
import testImg from './mock/images/img01.jpg'
import Img from '../src/components/atoms/Img';

function App() {
  return (
    <div className="App">
      <Balloon>OK</Balloon>
      <Img src={testImg} width='128' style={{display: 'block', height: '100px', backgroundColor: 'red'}}/>
    </div>
  );
}

export default App;
