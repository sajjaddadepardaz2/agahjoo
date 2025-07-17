import React, { useState } from 'react';
import axios from '../api';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const requestOtp = () => {
    axios.post('/auth/request-otp/', { phone }).then(() => setStep(2));
  };

  const verifyOtp = () => {
    axios.post('/auth/verify-otp/', { phone, otp }).then(res => {
      if (res.data.message === 'تایید شد.') {
        // Store phone as user session (for demo)
        localStorage.setItem('user', phone);
        window.location.href = '/dashboard';
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen rtl">
      <div className="bg-white p-6 rounded shadow w-80">
        {step === 1 ? (
          <>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="شماره تلفن" className="mb-2 p-2 border rounded text-right w-full" />
            <button onClick={requestOtp} className="bg-green-600 text-white py-2 rounded w-full">دریافت کد تایید</button>
          </>
        ) : (
          <>
            <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="کد تایید" className="mb-2 p-2 border rounded text-right w-full" />
            <button onClick={verifyOtp} className="bg-green-600 text-white py-2 rounded w-full">ورود</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
