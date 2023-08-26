import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginPageForm() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState('');

  async function login() {
    try {
      await axios.post('http://localhost:3000/users', {
        "email": email,
        "password": password,
        "isActive": true
      });
      navigate('/home')
    } catch (e) {
      setFailed('Email dan Password Salah, hubungi pemuda pancasila setempat !')
    }
  }

  return (
    <div className="card-body">
      <form >
        <div className="form-group mb-3">
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or Username" />
        </div>
        <div className="form-group mb-3">
          <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <h6 className='text-danger'>{failed}</h6>
        <button type='button' onClick={login} className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}