import React from 'react';
import Header from './Header';
import ItemControl from './ItemControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row-center">
          <Header />
        </div>
        <div className="row-center">
          <ItemControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
