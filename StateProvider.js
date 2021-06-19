import React,{createContext,useReducer,useContext} from 'react';


// preparing the data layer

export const StateContext=createContext();

export const StateProvider=({reducer, initialState, children}) =>(


	<StateContext.Provider value={useReducer(reducer,initialState)}>
		{children}
	</StateContext.Provider>
)

// hooks is allow to pull the information from data layer





export  const useStateValue=()=> useContext(StateContext);