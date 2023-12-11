import { createContext, useContext, useReducer } from "react"
import { initialState } from './AppReducer'
import AppReducer from './AppReducer'
const GlobalContext = createContext()

const GlobalProvider = ({ clildren }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <GlobalContext.Provider
        value={{ basket: state.basket, user: state.user, dispatch: dispatch }}>
        {clildren}</GlobalContext.Provider>
}

export default GlobalProvider;

export const useAuth = () => {
    return useContext(GlobalContext);
};