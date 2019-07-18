import streams from '../apis/server';
import history from '../history';
import {
    CREATE_CONFIGURATION,
    DELETE_CONFIGURATION,
    EDIT_CONFIGURATION,
    FETCH_CONFIGURATION,
    FETCH_CONFIGURATIONS
} from "./types";

export const createConfiguration = formValues => async dispatch => {
    const response = await streams.post('/configurations', {...formValues});

    dispatch({type: CREATE_CONFIGURATION, payload: response.data});
    history.push('/');
};

export const fetchConfigurations = () => async dispatch => {
    const response = await streams.get('/configurations');

    dispatch({type: FETCH_CONFIGURATIONS, payload: response.data})
};

export const fetchConfiguration = id => async dispatch => {
    const response = await streams.get(`/configurations/${id}`);

    dispatch({type: FETCH_CONFIGURATION, payload: response.data})
};

export const editConfiguration = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/configurations/${id}`, formValues);

    dispatch({type: EDIT_CONFIGURATION, payload: response.data});
    history.push('/');
};

export const deleteConfiguration = (id) => async dispatch => {
    await streams.delete(`/configurations/${id}`);

    dispatch({type: DELETE_CONFIGURATION, payload: id});
    history.push('/');
};