import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const stateContext = createContext()

export const FoodList = ({ children }) => {

    const [state, setState] = useState([])

    // getting data from json file located on public folder
    useEffect( () => {
      axios.get('Data.json').then((response) => {
        setState(response.data)
      })
    }, [ ])
  

    return (
        <stateContext.Provider value={state}>
            {children}
        </stateContext.Provider>
    )
}
