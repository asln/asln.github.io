import {Component} from "react";
import '../css/header_app.css';
import * as React from "react";
require('bootstrap/dist/css/bootstrap.css');
export default class Herder extends Component {
    render() {
        return (
                <header className='header'>
                    <div className='header-img'>
                        <img src={require('../Images/Cailv.png')}/>
                        <span>菜驴鲜优</span>
                    </div>
                    <div className='header-input'>
                        <b className='glyphicon glyphicon-search'></b>
                        <input type='text' placeholder='输入您喜欢的商品'/>
                        <button>搜索</button>
                    </div>
                </header>
        );
    }
}