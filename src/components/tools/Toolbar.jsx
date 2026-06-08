import Print from './Print'
import SetDefaults from './SetDefaults'
import Toggle from './Toggle'
import Clear from './Clear'

const Toolbar = () => {
  return (
    <div className="toolbar">
        <Toggle />
        <Clear />
        <SetDefaults />
        <Print />
    </div>
  )
}

export default Toolbar