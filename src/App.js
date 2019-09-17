import React from 'react';
import logo from './logo.svg';
import './App.css';

// Componente Hello
// import Hello from './Hello';

// Componente Nav
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav 
        mensaje="Hello world!" 
        links={[
          {txt: 'Home', url: '/home'},
          {txt: 'Services', url: '/services'},
          {txt: 'Products', url: '/products'},
          {txt: 'Instagram', url: 'http://instagram.com'},
        ]} 
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav
          mensaje="¡Aprendiendo REACT!"
          links={[
            { txt: 'Doc. Oficial', url: 'https://reactjs.org' },
            { txt: 'Google', url: 'http://google.com' },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
