import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Header from './template/header/Header';
import Footer from './template/footer/Footer';
import Routes from './Routes';


function App(){
    return(
        <>
        <Header/> 
        <Routes/>
        <Footer/>,
        </>
    );
        
}

export default App;

