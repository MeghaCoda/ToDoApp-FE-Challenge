import { useEffect, useState } from 'react';
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'
import Spinner from '../../icons/Spinner/Spinner';
import Error from '../Error/Error';
import moment from 'moment';

export interface TodoItemData {
    id: string;
    description: string;
    isComplete: boolean;
    dueDate: string | null; // if string this is an ISO date
}

export const sortData = (data: TodoItemData[], dateTime: moment.Moment): TodoItemData[] => {
    return data.sort((a, b) => {
        const now = dateTime;
    
        // Completed tasks should be placed at the bottom
        if (a.isComplete && !b.isComplete) return 1;
        if (!a.isComplete && b.isComplete) return -1;
    
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1; // a goes after b if a doesn't have a dueDate
        if (!b.dueDate) return -1; // vice versa
    
        const aDate = moment(a.dueDate);
        const bDate = moment(b.dueDate);
    
        const aIsOverdue = aDate.isBefore(now);
        const bIsOverdue = bDate.isBefore(now);
    
        // Prioritize overdue items
        if (aIsOverdue && !bIsOverdue) return -1; // a is overdue, goes first
        if (!aIsOverdue && bIsOverdue) return 1;  // b is overdue, goes first
    
        return aDate.diff(bDate); // chronological order (future to past)
    });
}

const ToDoList: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<TodoItemData[] | null>(null);

    const sortAndSetData = (data: TodoItemData[]) => {
        const sortedData = sortData(data, moment());
        setData(sortedData)
    }

    const toggleComplete = async (item: TodoItemData) => {
        setLoading(true);
        const options = { timeout: 5000 };
        try {
            const response = await fetch(`https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/patch/${item.id}`, {
                method: 'PATCH',
                headers: {
                    'X-Api-Key': process.env.REACT_APP_API_KEY || '', /* this should be defined in your .env file */
                    'Content-Type': 'application/json'
                },
                ...options
            });
            const json = await response.json();
            if (json.status === "success") {
                setLoading(false);
                let newData = [...data!]; // we're sure data exists at this point or the user could not have clicked
                let newDataItem = newData.find(i => i.id === item.id)
                if (newDataItem) { newDataItem.isComplete = !item.isComplete }
                sortAndSetData(data!);
            }
        } catch (error) {
            setLoading(false)
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const options = { timeout: 5000 };
            try {
                const response = await fetch('https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get', {
                    headers: {
                        'X-Api-Key': process.env.REACT_APP_API_KEY || '', /* this should be defined in your .env file */
                    },
                    ...options
                });
                const json = await response.json();
                setLoading(false);
                sortAndSetData(json);
            } catch (error) {
                setLoading(false)
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="todo-list-container">
            {loading && <Spinner />}
            {!data && !loading && <Error message={`We're sorry, there was an error fetching data`} />}
            {!!data && !loading && data.map(item => {
                return <ToDo
                    key={item.id}
                    isComplete={item.isComplete}
                    description={item.description}
                    dueDate={item.dueDate}
                    onChange={() => toggleComplete(item)}
                />
            }
            )
            }

        </div>
    )
}

export default ToDoList;