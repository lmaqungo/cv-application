import Position from "./Position";
import Company from "./Company";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Description from "./Description";
import { v4 as uuid } from 'uuid' 

import { useState, useEffect } from 'react';


const WorkExperience = ( { setterFn, jobsArr }) => {
  
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const job = {
          id: uuid(),
          position: position, 
          company: company, 
          startDate: startDate, 
          endDate: endDate, 
          description: description,
    };

    useEffect(() => {
        setterFn(c=>{
          const newArr = [...c]; 
          // console.log(`length of jobs: ${newArr.length}`);
          newArr[jobsArr.length] = job;
          return newArr;
        })
    });

    useEffect(()=>{
      console.log(`position: ${position}`);
    }, [position])
            
  return (
        <div class='input-menu'>
            <div className="input-menu-layer-shared">
                <Position setter={setPosition}/>
                <Company setter={setCompany}/>
            </div>
            <div className="input-menu-layer-shared">
                <StartDate setter={setStartDate}/>
                <EndDate setter={setEndDate}/>
            </div>
            <Description setter={setDescription}/>
        </div>
  )
}

export default WorkExperience