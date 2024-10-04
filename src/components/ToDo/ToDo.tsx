import './ToDo.css'
import { ReactComponent as CheckedIcon } from '../../icons/checked-checkbox-icon.svg';
import { ReactComponent as UncheckedIcon } from '../../icons/unchecked-checkbox-icon.svg';
import moment from 'moment';
import { MouseEventHandler } from 'react';

interface ToDoProps {
    onChange: MouseEventHandler;
    description: string;
    isComplete: boolean;
    dueDate: string | null; // if string this is an ISO date
}

const ToDo: React.FC<ToDoProps> = ({
    description, isComplete, dueDate, onChange
}: ToDoProps) => {
    const isInPast = dueDate ? moment(dueDate).isBefore(moment()) : false;
    return <div className={`todo-item ${isComplete ? ' completed' : ''}${isInPast && !isComplete ? ' overdue' : ''}`}>
        <div className="left-content">
            <div className="checkbox" onClick={onChange}>
                {isComplete ? <CheckedIcon /> : <UncheckedIcon />}
            </div>
            <div className="left-content-title">
                {description}

            </div>
        </div>
        {dueDate && <div className="right-content">
            <div className="date-container">
                {moment(dueDate).format('M/D/YYYY')}
            </div>
        </div>
        }
    </div>

}

export default ToDo;