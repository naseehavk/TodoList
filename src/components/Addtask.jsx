import React, { useEffect, useState } from 'react'
import { GetTask } from '../services/allApi'
import { DeleteTask } from '../services/allApi'
import { toast } from 'react-toastify'


function Addtask({ adres }) {
    const [addTask, setaddTask] = useState([])
    const [dltres, setDltres] = useState("")


    useEffect(() => {
        getData()
    }, [adres, dltres])


    const getData = async () => {
        const task = await GetTask()
        setaddTask(task.data)
    }

    const delData = async (id) => {
        const res = await DeleteTask(id)
        console.log(res);
        if (res.status == 200) {
            setDltres(res)
            toast.success("deleted")
            getData()
        } else {
            toast.error('error occured')
        }

    }

    return (
        <>

            {
                addTask.map(item => (
                    <div className=' border border-3 w-50 justify-content-between align-items-between text-center'>
                       <div className='d-flex justify-content-between p-2'>
                            <p className='text-danger'>{item.task}</p>
    
                            <button className='btn' onClick={() => { delData(item.id) }}>
                                <i className="fa-solid fa-trash" style={{ color: "#e61e3c" }} />
                            </button>
                       </div>
                    </div>
                ))
            }


        </>
    )
}

export default Addtask