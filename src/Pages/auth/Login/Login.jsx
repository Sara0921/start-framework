
import axios from "axios";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import AppButton from "../../../Components/Shared/AppButton";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../../Components/Shared/ErrorMessage";

const schema =z.object(
  {
    email : z.email(),
    password : z.string().min(8).regex(/^[A-Z][\w]/),
  }
)

export default function Login() {
  
  const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(schema)});
  const router = useNavigate();
  const [isLoading, setIsloading] = useState(false)

 async function createUser(values){
  setIsloading(true)

    try{
      const {data}=await axios('https://linked-posts.routemisr.com/users/signin',{
        method: "POST",
        data:values
      });
      localStorage.setItem('token',data?.token)
      router('/')
    }
    catch(error)
    {
      console.log(error);
      
    }
    finally{
      setIsloading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(createUser)} className="flex max-w-md flex-col gap-4 mx-auto mt-50">
  
      {/* email=============================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor=" email1">Your email</Label>
        </div>
        <TextInput id=" email1" type="email" placeholder="name@flowbite.com" {...register('email')}   />
      <ErrorMessage error={errors?.email?.message}/>
      </div>
           {/* password=============================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor=" password">Your password</Label>
        </div>
        <TextInput id=" password" type="password" placeholder="*******" {...register('password')}   />
      <ErrorMessage error={errors?.password?.message}/>
      </div>
       <p> you don't have acount  <Link className="underline text-blue-500" to={'/register'}>Register</Link></p>

   
      <AppButton isLoading={isLoading} type="submit">Submit</AppButton>
    </form>
  );
}

