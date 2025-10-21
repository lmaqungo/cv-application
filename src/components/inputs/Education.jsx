import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Description from "./Description";
import School from "./School";
import Course from "./Course";

const Education = ( { activeObjId, setEducationContent ,educationArray }) => {
  
      const currentEdu = educationArray.find(edu=> edu.id===activeObjId); 
      const currentChild = currentEdu?.child || {};

      const handleChange = (field, value) => {
          setEducationContent(prevArray => 
            prevArray.map(job => 
              job.id === activeObjId 
                ? { 
                    ...job, 
                    child: { 
                      ...job.child, 
                      [field]: value 
                    } 
                  } 
                : job
            )
          );
        };

  return (
        <div class='input-menu'>
            <div className="input-menu-layer-shared">
                <School 
                value={currentChild.school || ""}
                setter={(value) => handleChange('school', value)}
                />
                <Course
                value={currentChild.course || ""}
                setter={(value) => handleChange('course', value)}
                />
            </div>
            <div className="input-menu-layer-shared">
                <StartDate 
                value={currentChild.startDate || ""}
                setter={(value) => handleChange('startDate', value)}
                />
                <EndDate 
                value={currentChild.endDate || ""}
                setter={(value) => handleChange('endDate', value)}
                />
            </div>
            <Description 
                value={currentChild.description || ""}
                setter={(value) => handleChange('description', value)}
            />
        </div>
  )
}

export default Education