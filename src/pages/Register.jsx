import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirm) {
    setError('Passwords do not match');
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await signOut(auth);
    alert('Account created! Please log in.');
    navigate('/login');
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      setError('This email is already registered. Please log in instead.');
    } else {
      setError(err.message);
    }
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          className="w-full border px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full border px-3 py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full border px-3 py-2"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Register
        </button>

        <p className="text-sm text-center mt-2">
          Already have an account?{' '}
          <a href="/login" className="text-orange-500 hover:underline">
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
