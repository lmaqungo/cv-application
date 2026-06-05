import {  useState } from "react";
import { InputValuesContext } from "./InputValuesContext";

export default function InputValuesProvider({children}){
    const [jobs, setJobs] = useState([]); 

    return (
        <InputValuesContext value={{jobs, setJobs}} >
            {children}
        </InputValuesContext>
    )
}

