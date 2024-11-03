import React from 'react';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />} />,

//   )
// )

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
      </Router>
    </ChakraProvider>
  );
}

export default App;
