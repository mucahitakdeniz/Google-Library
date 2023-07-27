import { createContext, useContext } from "react";
import { ThemeContext } from "styled-components";


const ThemeContext=createContext()
 
const ThemeContextProvider=({children})=>{
    const [myTheme, setMyTheme] = useState("light")


    return (
        <ThemeContext.Provider value={}>
            {children}
        </ThemeContext.Provider>
    )

}
export const useThemeContext=() =>{
    return useContext(ThemeContext)
}
export default ThemeContextProvider