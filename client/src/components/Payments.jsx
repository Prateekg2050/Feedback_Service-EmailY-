import React, {Component} from 'react';
import Stripecheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../Action'

class Payments extends Component{
    render(){
        return(
            <Stripecheckout
            name="Feedo"
            description="$5 ~ 5 Credit"
            amount={500}
            token={token=> this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn"> Add credits</button>
            </Stripecheckout>

        );
    }
}


export default connect(null,actions)(Payments);