import InputField from "./InputField"

const InputMenu = () => {
  return (
    <div className="input-menu">
        <div className="input-menu-layer-shared">
            <InputField label="First Name"/>
            <InputField label="Last Name"/>
        </div>
        <InputField label="Job Title"/>
        <div className="input-menu-layer-shared">
            <InputField label="Phone"/>
            <InputField label="Email"/>
        </div>
        <div className="input-menu-layer-shared">
            <InputField label="Github"/>
            <InputField label="Personal Website"/>
        </div>
        <InputField label="Location"/>
    </div>
  )
}

export default InputMenu