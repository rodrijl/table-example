import { GET_DATA, UPDATE_AUTH,UPDATE_HTTPS, UPDATE_CORS } from "../actiontypes";

import axios from "axios";

const API= 'https://api.publicapis.org/entries'

const getData = async (dispatch,filters) => {
  const params = {
    auth: '',
    https: '',
    cors: '',
  };


  if (filters.auth !== '') {
    params.auth = filters.auth;
  }
  if (filters.https !== '') {
    params.https = filters.https;
  }
  if (filters.cors !== '') {
    params.cors = filters.cors;
  }

  await axios.get(`${API}?auth=${params.auth}&https=${params.https}`).then((response) => {
    dispatch(
      {
        type: GET_DATA,
        data: response.data.entries,
      },
    );
  }).catch((err) => {
    throw err;
  });
};


const updateAuth = (payload,dispatch) =>{
  dispatch({
    type: UPDATE_AUTH,
    payload
  })
}

const updateCors = (dispatch, payload) =>{
  dispatch({
    type: UPDATE_CORS,
    payload
  })
}

const updateHttps = (dispatch, payload) =>{
  dispatch({
    type: UPDATE_HTTPS,
    payload
  })
}

export {
  getData,
  updateAuth,
  updateCors,
  updateHttps
}

