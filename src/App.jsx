import { useState } from 'react'
import { toast } from 'react-toastify';
import { AddTask } from './services/allApi';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Addtask from './components/Addtask';


function App() {

  const [addres, setAddres] = useState("")
  const [tasks, setTask] = useState({
    task: ""
  })
  //console.log(tasks)
  const add = async () => {
    const { task } = tasks
    if (!task) {
      toast.info('enter valid inputs')
    }

    else {
      const result = await AddTask(tasks)
      console.log(result);
      if (result.status === 201) {
        setAddres(result)
        setTask({ task: "" })
        toast.success('task added successfully')

      }
    }
  }


  return (
    <>

      <div className='w-100 d-flex justify-content-center align-items-center p-4 '  >
        <div className='w-50 border border-3 border-dark shadow rounded bg-light d-flex flex-column align-items-center p-5'>

          <h4 className='text-center '>Things Todo </h4>
          {/* <input className='form-control w-50 p-2' type="text" placeholder='add task name'  /> */}
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Task Name"
            className="m-2 "
            style={{ width: '280px' }}
          >
            <Form.Control type="text" onChange={(e) => { setTask({ tasks, task: e.target.value }) }} placeholder="Enter Task" />
          </FloatingLabel>
          <button onClick={add} className="btn btn-primary mt-3">Add</button>
          <div className='w-100 mt-3 d-flex flex-column align-items-center'>
          <Addtask adres={addres} />
          </div>
        </div>
       
      </div>
      <ToastContainer />
    </>
  )
}

export default App
