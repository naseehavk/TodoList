import { base_url } from "./base_url";
import commonApi from "./commonApis";


export const AddTask=async(data)=>{
   return await commonApi('POST',`${base_url}/addtask`,data)
}

export const GetTask=async()=>{
    return await commonApi('GET',`${base_url}/addtask`,'')
 }
export const DeleteTask=async(id)=>{
    return await commonApi('DELETE',`${base_url}/addtask/${id}`,{})
 }