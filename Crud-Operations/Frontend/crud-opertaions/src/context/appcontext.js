import React, { useReducer, useContext, useState } from 'react'

import reducer from './reducer'
import axios from 'axios'

import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  ALL_USER,
  HANDLE_CHANGE,
} from './action'
const initialState = {
  user: [],
  name: '',
  cgpa: '',
  department: '',
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const createUser = async () => {
    // dispatch({ type: CREATE_USER })
    try {
      // const formData = new FormData()

      // for (const key in state) {
      //   if (Object.hasOwnProperty.call(state, key)) {
      //     formData.append(key, state[key])
      //   }
      // }
      console.log(state)
      await axios.post('crud/create', state)
      // dispatch({ type: CREATE_USER })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get('crud/all')
      dispatch({ type: ALL_USER, payload: { user: data.user } })
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getUser,
        createUser,
        handleChange,
        // filteritems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
