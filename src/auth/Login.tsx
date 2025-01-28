import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useStore } from '../store/store';
import { useFormStatus } from 'react-dom';
import Loading from '../components/loading';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const {pending} = useFormStatus();
  return <button disabled={pending} type="submit" className="flex w-full justify-center bg-black p-[.8rem] tracking-[.4rem] uppercase text-[.8rem] font-bold text-white">{pending ? <Loading /> : 'SIGN IN'}</button>
}

const Login = () => {

  let navigate = useNavigate();

  const {setUserInfo, userInfo} = useStore();

    useEffect(() => {
        if(userInfo){
            navigate('/');
        }
    }, [userInfo, navigate])



    const formAction = async (formData: FormData) => {
      const email = formData.get('email');
      const password = formData.get('password');

      if(!email || !password){
          if(!email){
              toast.error('Email is required');
          }
          if(!password){
            toast.error('Password is required');
        }
        return;
      }
        try {
            const userData = {
                email: formData.get('email'),
                password: formData.get('password'),
            }
    
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(userData),
            });

            const data = await res.json();
    
            if(res.ok){
                setUserInfo(data);
            }else{
              toast.error('Something wrong, try again.')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    
<div className="min-h-screen flex">
  <div className="flex flex-col justify-center w-full  px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-[1rem] font-extrabold text-black manrope tracking-[.2rem]">
        SIGN IN TO YOUR ACCOUNT
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={formAction}>
        <div>
          <Label htmlFor="email" className="uppercase tracking-[.1rem] font-semibold">Email address</Label>
          <div className="mt-2">
            <Input  
               type="email"
              name="email"
              id="email"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="uppercase tracking-[.1rem] font-semibold">Password</Label>
            <div className="text-[.8rem]">
              <a
                href="#"
                className="uppercase tracking-[.1rem] font-semibold text-muted-foreground"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <Input  
              type="password"
              name="password"
              id="password" 
            />
          </div>
        </div>

        <div>
          <SubmitBtn />
        </div>
      </form>

      <p className="mt-10  uppercase text-center text-sm text-gray-500">
        Dont have an account?{' '}
        <a
          href="/register"
          className="font-semibold text-black underline"
        >
          Sign up
        </a>
      </p>
    </div>
  </div>
</div>

  )
}

export default Login;