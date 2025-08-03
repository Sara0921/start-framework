
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import * as z from "zod";
import ErrorMessage from "../../../Components/Shared/ErrorMessage";



export default function Register() {
  const schema =z.object({
  name:z.string().min(3,"name must br more than 3 charc"),
  email:z.email(),
  password:z.string().min(8).regex(/^[A-Z][\w]/),
  rePassword:z.string().min(8).regex(/^[A-Z][\w]/).refine((value)=>   value===getValues("password"),{error:"cofirm password must be same as password"}),
  gender:z.literal(['male','female']),
  dateOfBirth:z.string().regex(/^\d{4}-\d{2}-\d{2}/),

})
  
  const {register,handleSubmit,getValues,watch,formState:{errors}}=useForm({resolver:zodResolver(schema)});
  //  console.log("Register - getValues:",getValues("password"));
  //  console.log("Register - errors:",errors);
  const router = useNavigate();
   
 async function createUser(data){

    try{
      await axios('https://linked-posts.routemisr.com/users/signup',{
        method: "POST",
        data
      });
      router('/login')
      console.log('Success');
      
    }
    catch(error)
    {
      console.log("error",error);
      console.log("Register - errors:",errors);
      
      
    }
  }
  return (
    <form onSubmit={handleSubmit(createUser)} className="flex max-w-md flex-col gap-4 mx-auto mt-50">
           {/* name=============================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput id=" name" type="text" placeholder="Mohamed ahmed" {...register('name')}   />
        <ErrorMessage error={errors?.name?.message}/>
       
      </div>
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
             {/* repassword=============================== */}
     {watch('password') && 
        <div>
          <div className="mb-2 block">
            <Label htmlFor="rePassword">Confirm password</Label>
          </div>
          <TextInput id="rePassword" type="password" placeholder="*******" {...register('rePassword')}  />
        <ErrorMessage error={errors?.rePassword?.message}/>
        </div>
      }
        {/* gender============================ */}
        <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="gender">Select your gender</Label>
      </div>
      <Select id="gender" {...register('gender')} >
        <option value={'male'}>male</option>
        <option value={'female'}>female</option>
      </Select>
      <ErrorMessage error={errors?.gender?.message}/>
    </div>
         {/* dateOfBirth=============================== */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor=" dateOfBirth">your birth date</Label>
        </div>
        <TextInput id=" dateOfBirth" type="date"  {...register('dateOfBirth')}   />
        <ErrorMessage error={errors?.dateOfBirth?.message}/>
      </div>
      <p>Do you have acount already ? <Link className="underline text-blue-500" to={'/login'}>Login</Link></p>
   
      <Button type="submit">Submit</Button>
    </form>
  );
}

