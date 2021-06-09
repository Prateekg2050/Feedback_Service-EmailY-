import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField.jsx';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formField';


class SurveyForm extends Component
{
    renderField(){
        return _.map(FIELDS,(val)=>{
            return(
                <Field
                component={SurveyField}
                type = "text"
                label = {val.label}
                name = {val.name}
                />
            );
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderField()}
                <Link to="/survey" className="red btn-flat  white-text ">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>  
        );
    }
}
function validate(values){
    
    const errors = {}
    errors.recipients = validateEmails(values.recipients || '');
    if(!values.title)
    {
        errors.title = "you must provide a title";
    }
    if(!values.body)
    {
        errors.body = "you must provide a body";
    }
    if(!values.subject)
    {
        errors.subject = "you must provide a subject";
    }
    if(!values.recipients)
    {
        errors.recipients = "you must provide a emails";
    }
    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);