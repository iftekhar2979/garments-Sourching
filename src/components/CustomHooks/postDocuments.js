import axios from "axios";
import { toast } from "react-hot-toast";

const postDocuments =(url,obj)=>{
    axios.post(url,{obj})
    .then(res=>{
        if(res.data){
            console.log(res.data)
            const notify = () => toast('added successfully');
            notify()
        }
       
       return res.data})
    .catch(error=>console.log(error.message))
}
export default postDocuments