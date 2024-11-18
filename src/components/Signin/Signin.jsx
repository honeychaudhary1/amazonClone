// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo2 from '../../assets/header/logo2.svg'
import './Signin.css'

const Signin = () => {
  return (
    <div className='signin'>
      <div className='logo'>
        <img src={logo2} alt="" />
      </div>
     
     
     
      <div className='signin-card '>
      <h2 className='text-2xl'>Sign in</h2>
      <div className='phonenumber'>
        <h5>Email or mobile phone number</h5>
      <form action="" className='w-full'>
      <input type="text" className='w-full' required />  
      </form>
      </div>
      <div className='buttons'>
      <button className='continue-btn'>Continue</button>
      <p>By continuing, you agree to amazon Conditions of Use and Privacy Notice.</p>
      </div>

      <div className="needhelp">
        <p>Need Help?</p>
      </div>

      <div className='buyforwork'>
        <h6>Buying for Work?</h6>
        <p>Shop on Amazon Buisness</p>
      </div>

      </div>
      

      <div className="newtoamazon">
        <div className='linecontent'>
          <div className='line'></div>
          <h6>New to Amazon?</h6>
          <div className='line'></div>
        </div>
      <button className='create'>Create your Amazon Account</button>
      </div>
   
    </div>
  )
}

export default Signin