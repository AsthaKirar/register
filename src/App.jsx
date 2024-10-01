// import { useForm } from "react-hook-form";
// import { useState } from "react";

// const App = () => {
//   const [Avatar,setAvatar] = useState("null");
//   console.log(Avatar);
//     const {
//     register,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();
// const submitHandler = (data) =>{
//   console.log(data);
//   console.log("submitted");
// };
// const handleFileChange = (e) =>{
//   setAvatar(e.target.files[0]);
// }
// console.log(errors);
//   return (
//   <>
// <form encType="{Avatar}" onSubmit={handleSubmit(submitHandler)} className="w-[80%] ml-10 m-auto" >
//   <input type="file" 
//   {...register('Avatar',{required: true})}
//   onChange={handleFileChange}

//   />
//   <input type="text"

//   className="border rounded"
//   {...register("username", {
//     required:true,
//     maxLength:20,
//     minLength:5,

//   })}
//    />
//   {errors.username?.type === "required" && (
//     <p>
//       First name is require
//     </p>
//   )}
//   <br /><br />
//   <button>submit</button>
// </form>

//   </>
//   )
// }

// export default App

import Child from "./componets/Child"
import Child2 from "./componets/Child2"
import Child3 from "./componets/Child3"

const App = () => {
  return (
    <div className="w-[80%] mt-10 auto  bg-red-500  ml-10">
      <h1>This page is Homepage</h1>
      <Child title = "information" about = "heloo"/>
      <br /><br /><hr />

      <Child2 title= "Information"/>
      <br /><br /> <hr />
      <Child3 title= "This is child3">
        <h1 className="text-xl">This the screte information </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className="bg-white text-xl py-2 px-5 rounded-md my-7 mx-2">Explore</button>
      </Child3>
      <br /><br /><hr />
    </div>
  )
}

export default App