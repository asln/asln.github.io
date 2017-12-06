import {Component} from "react";
import '../css/footer_app.css';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class Footer extends Component {
    constructor(){
        super();
        // noinspection JSCheckFunctionSignatures
        this.state={
            fooTer:parseInt(window.innerHeight)-50,
            Color:{color:'red'}
        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <div  style={{background:'#50C864',width:'100%',height:'50px',position:'fixed',zIndex:'1000',top:''+ this.state.fooTer+'px'}}>
                <div className=" container footer-span row" style={{margin:'0px'}}>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-home'></span>
                        <label><a href='/index'style={this.state.Color}> 首页</a></label>
                    </div>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-tower'></span>
                        <label><a href='/classification'> 分类</a></label>
                    </div>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-shopping-cart'></span>
                        <label><a href='/cart'>购物车</a></label>
                    </div>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-user'></span>
                        <label><a href='/my'>我的</a></label>
                    </div>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-gift'></span>
                        <label><a href='/active'>活动</a></label>
                    </div>
                    <div className="col-xs-2" style={{padding:'0px'}}>
                        <span className='glyphicon glyphicon-sunglasses'></span>
                        <label><a href="about">关于</a></label>
                    </div>
                </div>
            </div>
        );
    }
}