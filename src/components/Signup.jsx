import React, { useState } from 'react'
import styles from './signup.css'
import Select from './Select.jsx'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider'
import { useNavigate } from 'react-router-dom'

const initialVal={
  username :"",
  password:""
}
var user=[]
function Signup() {
  const navigate = useNavigate();
const [form,setForm] = useState(initialVal)

const handle = (e) =>{
  const value =  e.target.value;
  const { name } = e.target;
  setForm((preform) => ({ ...preform, [name]: value }));
  console.log(form);
};
const {username,password} = form;
const handleSubmit = () =>{
  
  user.push(form)
  localStorage.setItem("user",JSON.stringify(user));
  navigate('/login')
}
  return (
    <div className='signup'>
      <div className="nav">
        <img src="https://cdn1.cronometer.com/2020/landing/cronometer-logo.png" alt="error" />
      </div>
      <h3>Create Your Free Account</h3>
      <div className="user">
        <input name='username' value={username} onChange={handle} type="text" placeholder='Email Address' />
        <input name='password' value={password} onChange={handle} type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
      </div>
      <div className="body">
        <h3>Your Body Type</h3>
        <table>
          <tbody>
          <tr>
            <td><strong>Sex :</strong></td>
            <td><input name='sex' type="radio" />Male</td>
            <td><input name='sex' type="radio" />Female</td>
          </tr>
          <tr>
            <td><strong>Born :</strong></td>
            <td>
              <select>
                <Select date={31} />
              </select>
            </td>
            <td>
              <select>
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">December</option>
              </select>
            </td>
            <td>
              <input type="number" placeholder='year' />
            </td>
          </tr>
            <tr>
              <td><strong>Height</strong></td>
              <td>
                <select name="" id="">
                <Select date={8} />
                </select>
                </td>
              <td>
                <select name="" id="">
                <Select date={8} />
                </select>
                </td>
            </tr>
          <tr>
            <td><strong>Weight</strong></td>
            <td><input type="number" placeholder='kg' /></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="terms">
        <h3>Terms of Service & Privacy Settings</h3>
        <div><input type="checkbox" /><p>Check all</p></div>
        <div><input type="checkbox" /><p>By checking the box below you are indicating you have read and agree to our Terms of Service and Privacy Policy.</p></div>
        <div><input type="checkbox" /><p>I agree to the cronometer.com Terms of Service</p></div>
        <div><input type="checkbox" /><p>I agree to the cronometer.com Terms of Service</p></div>
        <div><input type="checkbox" /><p>I agree to the cronometer.com Terms of Service</p></div>
        <div><input type="checkbox" /><p>I agree to the cronometer.com Terms of Service</p></div>
      </div>
      <button onClick={handleSubmit} className="create">
        Create Account
      </button>
      
    </div>
  )
}

export default Signup