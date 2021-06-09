import {FETCH_SURVEYS} from '../Action/types';

export default function(state = ['You have no surveys created yet !'],action){
    switch(action.type){
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}