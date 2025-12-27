import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [formError, setFormError] = useState('');
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setFormError('All fields are required.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    const success = await register(form.name, form.email, form.password);
    if (success) navigate('/');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #1e215d 60%, #3a3b5a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'rgba(34, 36, 60, 0.97)',
          borderRadius: '22px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          width: '750px',
          minHeight: '420px',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Left Side - Illustration or Info */}
        <div
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, #a777e3 0%, #6e8efb 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '36px 18px',
          }}
        >
          <svg width="80" height="80" fill="#fff" viewBox="0 0 24 24" style={{ marginBottom: 24 }}>
            <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
          <h2 style={{ color: '#fff', marginBottom: '10px', fontWeight: 700, letterSpacing: '1px', fontSize: '2rem' }}>
            Create Account
          </h2>
          <p style={{ color: '#f3eaff', fontSize: '1.1rem', textAlign: 'center', maxWidth: 220 }}>
            Join us and explore the universe!
          </p>
        </div>
        {/* Right Side - Form */}
        <div
          style={{
            flex: 1.3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 36px',
            background: 'rgba(34, 36, 60, 0.97)',
          }}
        >
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#b3b3cc', fontSize: '0.95rem', marginBottom: '6px', display: 'block' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #44446b',
                  background: '#23243a',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s',
                }}
                placeholder="Enter your name"
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#b3b3cc', fontSize: '0.95rem', marginBottom: '6px', display: 'block' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #44446b',
                  background: '#23243a',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s',
                }}
                placeholder="Enter your email"
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#b3b3cc', fontSize: '0.95rem', marginBottom: '6px', display: 'block' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #44446b',
                  background: '#23243a',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s',
                }}
                placeholder="Create a password"
              />
            </div>
            <div style={{ marginBottom: '22px' }}>
              <label style={{ color: '#b3b3cc', fontSize: '0.95rem', marginBottom: '6px', display: 'block' }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #44446b',
                  background: '#23243a',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s',
                }}
                placeholder="Confirm your password"
              />
            </div>
            {(formError || error) && (
              <div style={{ color: '#ff5c5c', marginBottom: '12px', fontSize: '0.95rem' }}>
                {formError || error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px 0',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(90deg, #a777e3 0%, #6e8efb 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 2px 8px rgba(106, 17, 203, 0.15)',
                marginBottom: '10px',
                transition: 'background 0.2s',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div style={{ marginTop: '10px', color: '#b3b3cc', fontSize: '0.95rem' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#6e8efb', textDecoration: 'none' }}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;