import {createStore} from 'redux';
import Immutable from 'seamless-immutable';
import { GET_DATA,UPDATE_AUTH, UPDATE_CORS,UPDATE_HTTPS } from '../actiontypes';

const initialState = Immutable({
    data: [],
    filters: {
      auth:'',
      cors:'yes',
      https: true
    }
});

const dataStore = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return state.merge({
                data: action.data,
            });
        case UPDATE_AUTH:
            const filtersWithAuth = {...state.filters, auth:action.payload};
            return state.merge({
                filters: filtersWithAuth
            });
        case UPDATE_CORS:
            const filtersWithCors = {...state.filters, cors:action.payload};
            return state.merge({
                filters: filtersWithCors
            });
        case UPDATE_HTTPS:
            const filtersWithHttps = {...state.filters, https:action.payload};
            return state.merge({
                filters: filtersWithHttps
            });
        default:
            return state;
    }
}

const store = createStore(dataStore);

export default store;