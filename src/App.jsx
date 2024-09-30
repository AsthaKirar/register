import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const [Avatar,setAvatar] = useState("null");
  console.log(Avatar);
    const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
const submitHandler = (data) =>{
  console.log(data);
  console.log("submitted");
};
const handleFileChange = (e) =>{
  setAvatar(e.target.files[0]);
}
console.log(errors);
  return (
  <>
<form encType="{Avatar}" onSubmit={handleSubmit(submitHandler)} className="w-[80%] ml-10 m-auto" >
  <input type="file" 
  {...register('Avatar',{required: true})}
  onChange={handleFileChange}

  />
  <input type="text"

  className="border rounded"
  {...register("username", {
    required:true,
    maxLength:20,
    minLength:5,

  })}
   />
  {errors.username?.type === "required" && (
    <p>
      First name is require
    </p>
  )}
  <br /><br />
  <button>submit</button>
</form>

  </>
  )
}

export default App