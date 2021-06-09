import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import {reduxForm} from 'redux-form';
class SurveyNew extends Component
{
    state = { ShowFormReview: false};

    renderContent(){
        if(this.state.ShowFormReview)
        {
            return <SurveyFormReview
            onCancel={()=>this.setState({ ShowFormReview: false})}
            />;
        }
        return <SurveyForm
        onSurveySubmit={()=>this.setState({ShowFormReview: true})}
        />;
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>  
        );
    }
}


export default reduxForm({form: 'surveyForm'}) (SurveyNew);