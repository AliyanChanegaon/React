import { useState } from "react";
import { createContext } from "react";




export const Theme_context=createContext();


const Theme_contextProvider = ({children}) =>{

    const [state,setState]=useState("");


    return(
        <Theme_context.Provider>
            {children}
            </Theme_context.Provider>

    );

}
export default Theme_contextProvider;



