import React from 'react';
import './App.css';
import InfiniteScrollDiv from './InfiniteScrollDiv'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>INFINITE SCROLL WITH REACT</h4>
      </header>
      <div className="container">
        <div className="row">
          {/* 
          the scroll comes here
          */}
          <InfiniteScrollDiv/>
        </div>
      </div>
    </div>
  );
}

export default App;
