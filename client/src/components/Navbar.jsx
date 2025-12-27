import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from "../hooks/useAuth";


const Navbar = () => {
  const { isAuthenticated, loading, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
  };

  return (
    <nav
      style={{
        width: '100%',
        background: '#5468acff',
        boxShadow: '0 2px 16px rgba(23, 112, 214, 0.12)',
        padding: '0 40px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
          <ellipse cx="16" cy="16" rx="7" ry="11" fill="#fff" fillOpacity="0.13" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6e8efb" />
              <stop offset="1" stopColor="#a777e3" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px' }}>
        SecureGateX
        </span>
      </div>
      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {!loading && (
          <>
            <a href="/" style={navLinkStyle}>
              Home
            </a>
            <a href="/about" style={navLinkStyle}>
              About
            </a>
            {!isAuthenticated ? (
              <>
                <a href="/login" style={navLinkStyle}>
                  Login
                </a>
                <a
                  href="/register"
                  style={{
                    ...navLinkStyle,
                    background: 'linear-gradient(90deg, #a777e3 0%, #6e8efb 100%)',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontWeight: 600,
                  }}
                >
                  Register
                </a>
              </>
            ) : (
              // User icon with dropdown
              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#905bd1ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ background: "#fff", borderRadius: "50%", padding: 3 }}
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-2.5 4-4 8-4s8 1.5 8 4" />
                  </svg>
                  <span style={{ color: "#fff", fontWeight: 500 }}>
                    {user?.name || user?.email || "User"}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="#fff" style={{ marginLeft: 2 }}>
                    <path d="M5.25 7.5L10 12.25L14.75 7.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '110%',
                      background: '#23244a',
                      borderRadius: 8,
                      boxShadow: '0 2px 12px rgba(30,32,60,0.18)',
                      minWidth: 120,
                      padding: '8px 0',
                      zIndex: 1000,
                    }}
                  >
                    <a
                      href="/profile"
                      style={{
                        display: 'block',
                        color: '#fff',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        borderRadius: 6,
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={e => e.currentTarget.style.background = '#35376a'}
                      onMouseOut={e => e.currentTarget.style.background = 'none'}
                    >
                      Profile
                    </a>
                    <button
                      onClick={handleLogout}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        padding: '10px 20px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 500,
                        borderRadius: 6,
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={e => e.currentTarget.style.background = '#35376a'}
                      onMouseOut={e => e.currentTarget.style.background = 'none'}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: '#a7d4eeff',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: 500,
  padding: '8px 0',
  transition: 'color 0.2s',
  borderBottom: '2px solid transparent',
  marginLeft: '2px',
  marginRight: '2px',
};

export default Navbar;