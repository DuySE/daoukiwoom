import { useReducer } from "react";
import Context from "./Context";
import loginReducer, { initialState } from "./reducer"

const CurrentUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default CurrentUserProvider