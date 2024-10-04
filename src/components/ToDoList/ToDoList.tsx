import { useEffect, useState } from 'react';
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'
const ToDoList: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get', {
            headers: {
              'X-Api-Key': process.env.REACT_APP_API_KEY || '' /* this should be defined in your .env file */
            }
          });
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
    return <div className="todo-list-container">
    <ToDo />
    {data && JSON.stringify(data)}
    </div>
}

export default ToDoList;