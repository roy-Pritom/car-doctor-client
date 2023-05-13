import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';

const Login = () => {
    const auth=useContext(authContext)
    const {logIn}=auth
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
    // console.log(logIn);
    const handleLOgin=(event)=>{
        setSuccess('')
        setError('')
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess('successfully login');
            form.reset();

        })
  .catch(error=>{
    setError(error.message)

  })

    }
    return (
        <div className="hero mt-11">
        <div className="hero-content flex-col lg:flex-row gap-10 items-center">
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h2 className='text-4xl font-bold text-center'>Login!</h2>
           <form onSubmit={handleLOgin}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                   <input type="submit" className='btn btn-secondary' value="Login" />
              </div>
           </form>
           <div className="">
            <p  className='text-center'><small>New to Cars doctor? Please <Link to='/login/signUp' className='text-orange-600 ml-1'>SignUp</Link></small></p>
           </div>
            </div>
              <div className="text-center mb-3 pb-2">
                
                  <p className='text-green-600'>{success}</p>
                  <p className='text-red-600'>{error}</p>
              </div>
          </div>
        </div>
      </div>
    );
};

export default Login;