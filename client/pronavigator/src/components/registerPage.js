import React,{useState} from 'react';
import '../styles/register.css';
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'



function Register() {
    const navigate = useNavigate()
    const [cookie,setCookie] = useCookies(['token'])
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        fetch('http://127.0.0.1:3001/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                username,
                email,
                password
            })
        }).then(async (response) => {
            const data = await response.json();
            if (response.status === 201) {
                setCookie('token', data.token, { path: "/" });
                navigate('/select-categories');
            } else {
                setError(data.error);
            }
        });
    }
    
        const showError = () =>{
          if(error !== ''){
            return(
              <div className='error-message'>
                {error}
              </div>
            )
          }
        }
    
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card card-pad card-margin">
        <h2 className="text-center mt-3 mb-3">Sign Up</h2>
        <form className='form-control-sm'>
          <div className="container d-flex gap-3 justify-content-center">
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">Github username</label>
            <input type="text" className="form-control" id="username" onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="confPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confPassword" />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary mb-3" onClick={handleSignUp}>Register</button>
          </div>
        </form>
        <div className="text-center">
          <p className='--bs-primary-bg-subtle'>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
