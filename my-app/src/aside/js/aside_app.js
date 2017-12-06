import {Component} from "react";
import '../css/aside_app.css';
import * as React from "react";
require('bootstrap/dist/css/bootstrap.css');
export default class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: require('../Images/banner-1.jpg')
        }
    }

    componentDidMount() {
        let i = 0;
        setInterval(() => {
            i++;
            this.setState({imgSrc: require('../Images/banner-' + (i < 5 ? i : i = 1) + '.jpg'),});
        }, 2000);
    }

    render() {
        return (
            <aside>
                <div className='aside-banner'>
                    <img src={this.state.imgSrc} width='100%' height='100%'/>
                    <div className='aside-banner-span'>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className='row aside-ba-1' style={{margin: '0px', height: '80px'}}>
                    <div className="col-xs-3 aside-ban">
                        <span>
                            <img src={require('../Images/猪.png')} className='img-responsive'/>
                        </span>
                        <label>畜肉</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/鸡.png')} className='img-responsive'/>
                        </span>
                        <label>禽蛋</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/虾子.png')} className='img-responsive'/>
                        </span>
                        <label>鱼虾蟹贝</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/蔬菜.png')} className='img-responsive'/>
                        </span>
                        <label>蔬菜</label>
                    </div>
                </div>
                <div className='row aside-ba-2' style={{margin: '0px', height: '80px'}}>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/调料.png')} className='img-responsive'/>
                        </span>
                        <label>五谷调料</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/主食.png')} className='img-responsive'/>
                        </span>
                        <label>主食</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/水果.png')} className='img-responsive'/>
                        </span>
                        <label>水果零食</label>
                    </div>
                    <div className="col-xs-3 aside-ban">
                        <span>
                             <img src={require('../Images/奶牛.png')} className='img-responsive'/>
                        </span>
                        <label>奶品</label>
                    </div>
                </div>
                {/*美食日历*/}
                <div className='row' style={{margin: '0px', background: '#06995b'}}>
                    <div className="col-xs-12">
                        <div className='foot-row-1'>
                            <span>周一</span>
                            <span>周二</span>
                            <span>周三</span>
                            <span>周四</span>
                            <span>周五</span>
                            <span>周六</span>
                            <span>周天</span>
                        </div>
                        <div className='foot-row-2'>
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        今日活动:
                                    </h3>
                                </div>
                                <div className="panel-body panel-success">
                                  <span className="text-success">
                                    周一是菜驴法定抢奶日。奶价格超级优惠。不信到实体店去对比一下就知道了周一是菜驴法定抢奶日。奶价格超级优惠。不信到实体店去对比一下就知道了周一是菜驴法定抢奶日。奶价格超级优惠。不信到实体店去对比一下就知道了周一是菜驴法定抢奶日。奶价格超级优惠。不信到实体店去对比一下就知道了周一是菜驴法定抢奶日。奶价格超级优惠。不信到实体店去对比一下就知道了
                                </span>
                                </div>
                            </div>
                            {/*商品列表*/}
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                  <div className="text-success">
                                      <b className='btn btn-xs btn-warning'>食材</b>
                                      <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                      </p>
                                      <p>
                                          <label className='pull-right' style={{color: 'red'}}>
                                              ￥<i>56.00</i>
                                              /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                          </label>
                                           <label className='pull-left' style={{color: '#c2cbc8'}}>
                                          可选：
                                          <i>24盒</i>
                                      </label>
                                      </p>
                                      <br/>
                                      <br/>
                                      <p>
                                          <button className='btn btn-xs btn-success pull-right'>
                                              加入购物车
                                          </button>
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="text-success">
                                        <b className='btn btn-xs btn-warning'>食材</b>
                                        <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                        </p>
                                        <p>
                                            <label className='pull-right' style={{color: 'red'}}>
                                                ￥<i>56.00</i>
                                                /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                            </label>
                                            <label className='pull-left' style={{color: '#c2cbc8'}}>
                                                可选：
                                                <i>24盒</i>
                                            </label>
                                        </p>
                                        <br/>
                                        <br/>
                                        <p>
                                            <button className='btn btn-xs btn-success pull-right'>
                                                加入购物车
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="text-success">
                                        <b className='btn btn-xs btn-warning'>食材</b>
                                        <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                        </p>
                                        <p>
                                            <label className='pull-right' style={{color: 'red'}}>
                                                ￥<i>56.00</i>
                                                /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                            </label>
                                            <label className='pull-left' style={{color: '#c2cbc8'}}>
                                                可选：
                                                <i>24盒</i>
                                            </label>
                                        </p>
                                        <br/>
                                        <br/>
                                        <p>
                                            <button className='btn btn-xs btn-success pull-right'>
                                                加入购物车
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="text-success">
                                        <b className='btn btn-xs btn-warning'>食材</b>
                                        <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                        </p>
                                        <p>
                                            <label className='pull-right' style={{color: 'red'}}>
                                                ￥<i>56.00</i>
                                                /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                            </label>
                                            <label className='pull-left' style={{color: '#c2cbc8'}}>
                                                可选：
                                                <i>24盒</i>
                                            </label>
                                        </p>
                                        <br/>
                                        <br/>
                                        <p>
                                            <button className='btn btn-xs btn-success pull-right'>
                                                加入购物车
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="text-success">
                                        <b className='btn btn-xs btn-warning'>食材</b>
                                        <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                        </p>
                                        <p>
                                            <label className='pull-right' style={{color: 'red'}}>
                                                ￥<i>56.00</i>
                                                /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                            </label>
                                            <label className='pull-left' style={{color: '#c2cbc8'}}>
                                                可选：
                                                <i>24盒</i>
                                            </label>
                                        </p>
                                        <br/>
                                        <br/>
                                        <p>
                                            <button className='btn btn-xs btn-success pull-right'>
                                                加入购物车
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-info">
                                <div className="panel-heading" style={{padding:'0px'}}>
                                    <h3 className="panel-title">
                                        <img src={require('../Images/纯牛奶.jpg')} className='img-responsive'/>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="text-success">
                                        <b className='btn btn-xs btn-warning'>食材</b>
                                        <p>
                                          <span>
                                              德国原装进口Arla爱氏晨曦全脂牛奶200ml*24盒
                                          </span>
                                        </p>
                                        <p>
                                            <label className='pull-right' style={{color: 'red'}}>
                                                ￥<i>56.00</i>
                                                /<i style={{color: '#c2cbc8', fontSize: '12px'}}>200ml</i>
                                            </label>
                                            <label className='pull-left' style={{color: '#c2cbc8'}}>
                                                可选：
                                                <i>24盒</i>
                                            </label>
                                        </p>
                                        <br/>
                                        <br/>
                                        <p>
                                            <button className='btn btn-xs btn-success pull-right'>
                                                加入购物车
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}