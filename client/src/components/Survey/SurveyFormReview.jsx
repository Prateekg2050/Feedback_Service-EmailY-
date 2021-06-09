import _ from 'lodash';   
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formField';
import {withRouter} from 'react-router-dom';
import * as actions from '../../Action/index';
const SurveyFormReview = ({onCancel, formValues,submitSurvey, history})=>{
    const reviewField= _.map(FIELDS,fields =>{
        return(
            <div key={fields.name}>
                <label >{fields.label}</label>
                <div>{formValues[fields.name]}</div>
            </div>
        );
    });
    return (
        <div>
            <h5>Please Confirm the Enteries</h5>
            {reviewField}
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                Back
            </button>
            <button  
            onClick={()=>submitSurvey(formValues, history)}
            className="green btn-flat right white-text">
                Send
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};
function mapStateToProps(state) {
    return{ formValues: state.form.surveyForm.values};
}

export default connect (mapStateToProps, actions)(withRouter(SurveyFormReview));