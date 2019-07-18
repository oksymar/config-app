import _ from 'lodash';
import {
    CREATE_CONFIGURATION,
    DELETE_CONFIGURATION,
    EDIT_CONFIGURATION,
    FETCH_CONFIGURATION,
    FETCH_CONFIGURATIONS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CONFIGURATIONS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_CONFIGURATION:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_CONFIGURATION:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_CONFIGURATION:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_CONFIGURATION:
            return _.omit(state, action.payload);
        default:
            return state;

    }
};