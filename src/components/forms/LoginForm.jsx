import { useState } from "react";
import { NavLink } from "react-router-dom";
import { doLogin } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const LoginForm = () =>
{  
    const [message,setMessage] = useState('Login into your account to continue...')
    const dispatch = useDispatch();
    const [mobile,setMobile] = useState(9867503256);
    const [device_id,device,device_token] = ["socialcodia","Android","socialcodia"];

    const onSubmit = async (e) =>
    {
        e.preventDefault();
        const {data} = await doLogin({device_id,device,device_token,mobile});
        if(!data.status)
        {
            setMessage(data.message);
            console.log(data.message);
            return;
        }
        const user = data.data[0];
        const token = data.token;
        const response = {user,token};
        dispatch(setAuth(response))
    }

    return(
     <div className="row">
         <div className="col s12 m6 offset-m3 l4 offset-l4 cusCardWrapper">
             <div className="card cusCard">
                 <div className="card-content">
                     <span className="card-title white-text bold">Login Form</span>
                     <p className="secondryText">{message}</p>
                     <form method="post" onSubmit={onSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix">phone</i>
                            <input onChange={(e)=>setMobile(e.target.value)} value={mobile} type="number" name="mobile" id="mobile" />
                            <label htmlFor="mobile">Enter Mobile Number</label>
                        </div>
                        <div className="input-field center">
                            <input type="submit" className='btn center' value="Login" />
                        </div>
                     </form>
                    <div className='center'>
                        <span className='secondryText'>Don't have an account? </span> <NavLink to='/register'><span className='bold'>Register</span></NavLink>
                    </div>
                 </div>
             </div>
         </div>
     </div>   
    )
}

export default LoginForm;