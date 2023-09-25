
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../App.css';

export default function SignUp() {
  const navigate = useNavigate(); // Create a navigation function

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server).

    // Assuming the sign-up was successful, navigate to the home page
    navigate('/'); // Replace '/' with the actual path to your home page
  };

  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper'>
        <div className='sign-up'>
          <img src='/images/img-8.jpg' alt='Camels in the desert' />
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form' onSubmit={handleSignUp}>
            <label>Email</label> <br />
            <input type='text' placeholder='johndoe@gmail.com' /> <br />
            <label>Password</label> <br />
            <input type='password' placeholder='password' /> <br />
            <button type='submit' className='btn-sign'>
              Sign Up
            </button>
          </form>

          <div>
            <p className='have-account'>
              Have an account? <span>Log In here </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
