import React, { useState} from 'react';
import '../styles/ChildDashboard.css';
import background from '../../../../assets/background.jpg';
import { Container, Box } from '@mui/system';
// import axios from 'axios';

const tasks = [
  {
      title: 'vacuum roof',
      status: 'pending'
  },
  {
      title: 'feed dog',
      status: 'complete'
  },
  {
      title: 'walk dog',
      status: 'started'
  },
  {
    title: 'clean room',
    status: 'complete'
}
]

const ChildDashboard = () => {
  const [taskList, setTaskList] = useState(tasks);

  const handleStatusChange = (index, status) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].status = status;
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <div>
        <img src={background} alt='backgr' className='Background' />
      </div>
      <Container>
        <div>
          <div>
            <Box sx={{display:'flex', justifyContent:'center', pt: 5, pb:'30%', fontSize:25, fontWeight: 700}}>Hi, User1</Box>
          </div>
          <Box sx={{display: 'flex', justifyContent:'center', flexDirection:'column', pt: 5}}>
            <table className='taskTable'>
            <Box sx={{fontSize:22,textAlign:'center', alignSelf:'center'}}>User1's Chores</Box>
              <tbody className='taskList'>
                {taskList.map((task, index) => (
                  <tr key={index}>
                    <td className='taskTitle'>{task.title}</td>
                    <td>
                      <select
                        value={task.status}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
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
          </Box>
        </div>
      </Container>
    </div>
  );
};


// const ChildDashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getTasks = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVICE_ENDPOINT}/tasks`
//         );
//         if (response.data.tasks) {
//           setTasks(response.data.tasks);
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getTasks();
//   }, []);

//   const handleStatusChange = (taskId, status) => {
//     // Update the status of the task in the backend 
//     console.log(`Task ID: ${taskId}, Status: ${status}`);
//   };

//   return (
//     <div>
//       <div>
//         <img src={background} alt='backgr' className='Background' />
//       </div>
//       <Container>
        //   <div>
        //     <Box sx={{display:'flex', justifyContent:'center', pt: 5, fontSize:25, fontWeight: 700}}>Hi, User1</Box>
        //   </div> 
        //   <Box sx={{display: 'flex', justifyContent:'center', flexDirection:'column', pt: 5}}>
        //  <div>
        //    {isLoading ? (
//             <p>Loading tasks...</p>
//           ) : (
//             <table className='taskTable'>
//               <tbody className='taskList'>
//                 {tasks.map((task) => (
//                   <tr key={task.id}>
//                     <td>{task.title}</td>
//                     <td>
//                       <select
//                         value={task.status}
//                         onChange={(e) =>
//                           handleStatusChange(task.id, e.target.value)
//                         }
//                       >
//                         <option value='pending'>Pending</option>
//                         <option value='started'>Started</option>
//                         <option value='complete'>Complete</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
            // </Box>
//         </div>
//       </Container>
//     </div>
//   );
// };

export default ChildDashboard;