import './ToDo.css'
import { ReactComponent as CheckedIcon } from '../../icons/checked-checkbox-icon.svg';
import { ReactComponent as UncheckedIcon } from '../../icons/unchecked-checkbox-icon.svg';



const ToDo: React.FC = () => {
    return <div className="todo-item completed">
        <div className="left-content">
            <div className="checkbox">
                <CheckedIcon />
            </div>
            <div className="left-content-title">
                This is a single todo item

            </div>
        </div>
        <div className="right-content">
        <div className="date-container">
            1/23/45
        </div>
        </div>
        </div>

}

        export default ToDo;