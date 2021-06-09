import React, { Component } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
class Header extends Component{
    
    renderContent()
    {
        switch(this.props.auth)
        {
            case null:
                return;
            case false:
                return [<li className='hide-on-med-and-down'><a className=' btn waves-effect waves-light blue white-text' href="/auth/google"> Sign in with Google</a></li>,
            
                     <li className='hide-on-med-and-up'>
                         <a href="/auth/google" className='btn waves-effect waves-light blue white-text'>LogIn</a>
                     </li>]
            default:
                return [
                    <li key='1' className='hide-on-med-and-down'> <Payments/></li>,
                    <li key = '3' className='hide-on-med-and-down' style={{margin: '0 10px',padding:"1px"}}> Credits: {this.props.auth.credits}</li>,
                    <li key='4' className="active hide-on-med-and-down"><Link to='/survey'>Dashboard</Link></li>,
                    <li key='2' className='hide-on-med-and-down'><a href="/api/logout"> Logout </a></li>,
                     <li><a className='dropdown-trigger btn hide-on-med-and-up' href='#' data-target='dropdown1'>
                     <i className='material-icons'>dehaze</i>
                  </a>
                  <ul id='dropdown1' class='dropdown-content'>
                      <li><a href="#!">one</a></li>
                      <li><a href="#!">two</a></li>
                      <li class="divider" tabindex="-1"></li>
                      <li><a href="#!">three</a></li>
                      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                  </ul></li>];
        };
    };
    
    render(){
    return(
        <div className='navbar-fixed mynav'>
        <nav className='nav-wrapper'>   
                <Link
                 to={ this.props.auth ? '/survey' : '/'}
                 className="brand-logo br-logo">
                     EmailY
                </Link>
                <ul id='nav-mobile ' className="right">
                    {this.renderContent()}
                </ul>
        </nav>
        </div>
        
        
    );
};
};

function mapStatetoprops(state){
    return {
        auth : state.auth
    };
}
export default connect(mapStatetoprops)(Header);