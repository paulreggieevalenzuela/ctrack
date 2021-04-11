import React from 'react';

// Context
import Provider from './context/AppProvider';

// Components
import List from './components/List';
import Navigation from './components/Navigation';

// Styles
import './styles/app.css';
const App = () => {
  return (
    <Provider>
      <main>
        <Navigation />
        <List />
      </main>
    </Provider>
    
  )
}

export default App;
