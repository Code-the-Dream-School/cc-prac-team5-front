import React, { useState, useEffect } from 'react';
import '../styles/ChildDashboard.css';
import background from '../../../../assets/background.jpg';
import { Container, Box } from '@mui/system';
import axios from 'axios';
import { Typography } from '@mui/material';

const ChildDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const tasksResponse = await axios.get(
          `${process.env.REACT_APP_SERVICE_ENDPOINT}/tasks`
        );
        if (tasksResponse.data.tasks) {
          setTasks(tasksResponse.data.tasks);
        }

        const userResponse = await axios.get(
          `${process.env.REACT_APP_SERVICE_ENDPOINT}/children/:id`
        );
        setUsername(userResponse.data.userName);
        setUserImage(userResponse.data.userImage);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

 

  const handleStatusChange = (taskId, status) => {
    // Update the status of the task in the backend 
    console.log(`Task ID: ${taskId}, Status: ${status}`);
  };

  return (
    <div>
      <div>
        <img src={background} alt='backgr' className='Background' />
      </div>
      <Container>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}> 
          <Typography sx={{textAlign:'center',pt: 15, fontSize:25, fontWeight:'bold'}}>Hi, {username}!</Typography>
          <img src={userImage} alt='user' className='UserImage' />
        </Box> 
        <Box sx={{ display: 'flex', justifyContent: 'center', width:'100%', pt:10 }}>
          <div>
            {isLoading ? (
              <p>Loading tasks...</p>
            ) : (
              <table className='taskTable'>
                <tbody className='taskList'>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td>
                        <select
                          value={task.status}
                          onChange={(e) =>
                            handleStatusChange(task.id, e.target.value)
                          }
                        >
                          <option value='pending'>Pending</option>
                          <option value='started'>Started</option>
                          <option value='complete'>Complete</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default ChildDashboard;