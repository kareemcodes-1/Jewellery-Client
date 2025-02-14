import { useEffect, useState } from 'react'
import Layout from '@/layout'
import { useStore } from '@/store/store';
import toast from 'react-hot-toast';

import { useFormStatus } from 'react-dom';
import Loading from '@/components/loading';

const SubmitBtn = () => {

    const {pending} = useFormStatus();

    return (
      <button type="submit" disabled={pending} className='bg-black mt-[.5rem] lg:w-[15rem] p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center flex items-center justify-center hover:opacity-80 transition-opacity uppercase'>{pending ? <Loading /> : 'Save'}</button>
    )
  }

const ProfilePage = () => {

    const {userInfo, setUserInfo} = useStore();

    const [name, setName] =  useState<string>('');
    const [email, setEmail] =  useState<string>('');
    const [password, setPassword] =  useState<string>('');
    const [oldPassword, setOldPassword] =  useState<string>('');

    useEffect(() => {
        if(userInfo){
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
    }, [userInfo]);


    

    
    const updateUser = async () => {
            const data = {
                name,
                email,
                password,
                old_password: oldPassword
            }
    
            if(userInfo){
                try {
                    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/profile/${userInfo._id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    });
        
                    if(res.ok){
                        const updatedUser = await res.json();
                        setUserInfo(updatedUser);
                        setName('');
                        setEmail('');
                        setPassword('');
                        setOldPassword('');
                        toast.success('Profile Updated');
                    }else{
                        const error = await res.json();
                        toast.error(error.message);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
    }
  return (
    <Layout>
         <div className='lg:mx-[2rem] p-[1rem] mt-[3rem] rounded-[.5rem] flex flex-col'>
                <h1 className='lg:text-[4rem] text-[3rem] lg:my-[1rem] my-[.5rem] uppercase'>Your Profile</h1>
             
              <form action={updateUser} className='flex flex-col gap-[1rem] mt-[1rem]'>
                  <div className='flex flex-col'>
                       <label className='text-[1rem] pb-[.2rem] uppercase tracking-[.1rem] font-semibold' htmlFor='name'>Name</label>
                       <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} className='border border-black p-[.5rem] lg:w-[50%] w-full uppercase tracking-[.1rem]'/>
                  </div>

                  <div className='flex flex-col'>
                       <label className='text-[1rem] pb-[.2rem] uppercase tracking-[.1rem] font-semibold' htmlFor='email'>Email</label>
                       <input type="text" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} className='border border-black p-[.5rem] lg:w-[50%] w-full uppercase tracking-[.1rem]'/>
                  </div>

                  <div className='flex flex-col'>
                       <label className='text-[1rem] pb-[.2rem] uppercase tracking-[.1rem] font-semibold' htmlFor='old_password'>Old Password</label>
                       <input value={oldPassword} type="password" name="old_password" id="old_password" className='border border-black p-[.5rem] lg:w-[50%] w-full' onChange={(e) => setOldPassword(e.target.value)} />
                  </div>

                  <div className='flex flex-col'>
                       <label className='text-[1rem] pb-[.2rem] uppercase tracking-[.1rem] font-semibold' htmlFor='password'>New Password</label>
                       <input type="password" value={password} name="password" id="password" className='border border-black p-[.5rem] lg:w-[50%] w-full ' onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <SubmitBtn />
            </form>
         </div>
    </Layout>
  )
}

export default ProfilePage