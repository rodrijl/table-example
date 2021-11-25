import React,{useState} from "react"
import { useDispatch } from 'react-redux';

import { updateAuth } from "../../actions/actions";

import { Dropdown,Button } from 'semantic-ui-react'
import './styles.css';


const authOptions = [
  { key: 'null', text: 'null', value: 'null' },
  { key: 'apiKey', text: 'apiKey', value: 'apiKey' },
]

const httpsOptions=[
  { key: 'true', text: 'true', value: 'true' },
  { key: 'false', text: 'false', value: 'false' },
]

const corsOptions=[
  { key: 'yes', text: 'yes', value: 'yes' },
  { key: 'no', text: 'no', value: 'no' },
  { key: 'unknown', text: 'unknown', value: 'unknown' },
]

const SearchBox = () => {
  const dispatch = useDispatch();
  const [authValue, setAuthValue] = useState('')
  // const [httpsValue, setHttpsValue] = useState('')
  // const [corsValue, setCorsValue] = useState('')


  const onChangeAuthValue = (e,data) => {
    setAuthValue(data.value)
  };

  // const onChangeHttpsValue = (e,data) => {
  //   setHttpsValue(data.value)
  // };

  // const onChangeCorsValue = (e,data) => {
  //   setCorsValue(data.value)
  // };

  const updateValues = (e) => {
    updateAuth(authValue, dispatch);
  };


  return (
    <div className='searchBox'>
      <Dropdown search placeholder="Auth" options={authOptions} selection onChange={onChangeAuthValue} />
      <Dropdown search placeholder="HTTPS" options={httpsOptions} selection/>
      <Dropdown search placeholder="Cors" options={corsOptions} selection/>
      <Button color='yellow' onClick={updateValues}>Update</Button>
    </div>
  )
}

export default SearchBox
