"use client"
import './page.css';
import SendIcon from '@mui/icons-material/Send';
import { IconButton} from "@mui/material";
import { useMemo, useState } from "react";

export default function Kick() { 

  const [data,setdata]=useState("");
  const [store,setstore]=useState("");

  let changing=useMemo(()=>{
    return (e)=>setdata(e.target.value);
  },[]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://bot7.vercel.app/DB");
//         const data = await response.json();
//         setstore([...store,data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, []);


  async function send(){
   let stores= await fetch("https://bot315.vercel.app/DB",{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({data})
    })

    stores=await stores.json();
    setstore(stores.kick)
  }

  return (
    <>
        
    <div id='user' style={{display:"flex",flexWrap:"wrap",marginLeft:"8vw"}}>
       <p>{data}</p>
    </div>

    <div id="bot" style={{display:"flex",justifyContent:"center",marginLeft:"40vw",flexWrap:"wrap"}}>
      <p>{store}</p>
    </div>
       <form style={{display:"flex",flexWrap:"wrap"}}>
         <input type="text" placeholder="Enter your message" id="userInput" onChange={changing}  ></input> <IconButton id="SendIcon" onClick={send}><SendIcon style={{color:"white",fontSize:"30px"}} /></IconButton>
       </form>
 
 
 
 
    </>
   );
}
