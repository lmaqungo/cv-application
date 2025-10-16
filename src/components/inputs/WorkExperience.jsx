import Position from "./Position";
import Company from "./Company";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Description from "./Description";


const WorkExperience = ( { activeObjId, setJobContent }) => {
  
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    




      const updateObj = () =>{
        setJobContent(c=>[...c].map(jobObj => 
          jobObj.id === activeObjId ? {...jobObj, child: { position, company, startDate, endDate, description}} : jobObj
        ));
      }

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