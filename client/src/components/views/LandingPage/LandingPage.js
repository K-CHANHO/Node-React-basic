import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import auth from '../../../hoc/auth';

function LandingPage() {

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get('/api/hello')
    .then(response => {console.log(response.data)});
  }, [])

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success){
        navigate('/login')
      } else{
        alert('로그아웃 실패')
      }
    })
  }

  const onLoginHandler = () => {
    axios.get('/api/users/login')
    .then(response => {
      if(!response.data.success){
        navigate('/login')
      } else{
        alert('이미 로그인 되어있음!')
      }
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
        <h2>시작페이지</h2>

        <button onClick={onLoginHandler}>
          로그인
        </button>

        <button onClick={onClickHandler}>
          로그아웃
        </button>
    </div>
  )
}

export default auth(LandingPage, null);