import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';

const DropDownArrow = ({ className } ) => (<Icon path={mdiMenuDown} size={1} className={className}/>);
const DeleteIcon = ({ className, action  }) => (<Icon path={mdiDeleteOutline} size={1} className={className} onClick={action}/>)

export { DropDownArrow, DeleteIcon }