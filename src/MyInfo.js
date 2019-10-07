import React from 'react';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function MyInfo() {
    return (
        <div>
            <Header/>
            <Header ClassName="abc"/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default MyInfo;
