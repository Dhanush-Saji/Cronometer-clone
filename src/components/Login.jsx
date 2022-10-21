import React, { useState } from 'react'
import styles from './Login.css'
import {Link,useNavigate} from 'react-router-dom'

const initialVal={
  username :"",
  password:""
}
function Login() {
  const navigate = useNavigate();
  const [form,setForm] = useState(initialVal)
  let arr = JSON.parse(localStorage.getItem("user")) || []

  const handle = (e) =>{
    const value =  e.target.value;
    const { name } = e.target;
    setForm((preform) => ({ ...preform, [name]: value }));
  };
  const {username,password} = form;
  const login = () =>{
    if(arr.length == 0){
      alert('Invalid credential')
    }

    arr.map((item)=>{
      if(item.username != username){
        alert('Invalid credential')
      }
      else{
        alert('Login successful ')
        navigate('/')
      }
    })
  }
  return (
    <div>
      <div className="form">
        <a href="/"><img src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"alt="error" /></a>
        <input onChange={handle} name='username' value={username} type="text" placeholder='Email Address' />
        <input onChange={handle} name='password' value={password} type="password" placeholder='Password' />
        <button onClick={login}>LOGIN</button>
        <div>
          <p>Not a member? <Link className='loginSign' to="/signup">Sign Up Now</Link></p>
          <p>Forgot password?</p>
        </div>
      </div>
      <div className="blog">
        <ul>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Forums</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Affiliates</a></li>
          <li><a href="/">Jobs</a></li>
        </ul>
      </div>
      <div className="footer">
        <div>
          <a href="/"><img src="https://cdn1.cronometer.com/logos/app-store.png" alt="error" /></a>
          <a href="/"><img src="https://cdn1.cronometer.com/logos/google-play.png" alt="error" /></a>
        </div>
        <div>
          <img src="https://cdn1.cronometer.com/logos/cronometer-logo-white.png" alt="error" />
          <p>Copyright © 2011-2022, All Rights Reserved</p>
        </div>
        <div>
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"
            alt="error"
          />
          <img
            src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png"
            alt="error"
          />
        </div>
      </div>
    </div>
  )
}

export default Login