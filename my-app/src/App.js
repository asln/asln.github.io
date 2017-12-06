import React, {Component} from 'react';
import './App.css';
import Header from './aside/js/header_app';
import Aside from './aside/js/aside_app';
import Footer from './aside/js/footer_app';
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Aside/>
                <Footer/>
            </div>
        );
    }
}


