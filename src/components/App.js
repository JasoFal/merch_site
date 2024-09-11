import React from 'react';
import Header from './Header';
import ItemControl from './ItemControl';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row-center">
          <Header />
        </div>
        <div class="row-center">
          <ItemControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
