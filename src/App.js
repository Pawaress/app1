import React from 'react'
import './style.css'
import { Header,Content,Footer } from './func-components';
import Calendar from './class-component';
import Banner from './banner';
function App() {

    /*return ([<Header/>,<Content/>,<Footer/>] );*/
   /* return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
     <Content/> 
     <Footer/>
     </> 
    
    
    
    );*/

    return <Banner/>

    }


    export default App;