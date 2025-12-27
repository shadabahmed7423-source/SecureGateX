import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: 'linear-gradient(90deg, #435899ff 60%, #2149ceff 100%)',
        color: '#fff',
        padding: '37px 0 18px 0',
        marginTop: '0px',
        boxShadow: '0 -2px 16px rgba(223, 224, 240, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 40px',
        }}
      >
        {/* Logo and Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
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
          <span style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1.5px' }}>
           SecureGateX
          </span>
        </div>
        {/* Links */}
        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <a href="/" style={footerLinkStyle}>Home</a>
            <a href="/about" style={footerLinkStyle}>About</a>
            <a href="/login" style={footerLinkStyle}>Login</a>
            <a href="/register" style={footerLinkStyle}>Register</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
              GitHub
            </a>
            <a href="mailto:support@SecureGateX.com" style={footerLinkStyle}>
              Contact
            </a>
            <a href="/privacy" style={footerLinkStyle}>
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: 18, marginTop: 8 }}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
            <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .386.045.763.127 1.124C7.728 8.85 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
            <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
            <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.326-3.678 1.317-.991.991-1.259 2.402-1.317 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.326 2.687 1.317 3.678.991.991 2.402 1.259 3.678 1.317 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.326 3.678-1.317.991-.991 1.259-2.402 1.317-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.326-2.687-1.317-3.678-.991-.991-2.402-1.259-3.678-1.317-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#b3b3cc', fontSize: '0.98rem', marginTop: 24 }}>
        © {new Date().getFullYear()} SecureGateX. All rights reserved.
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  color: '#ecf1faff',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: '2px',
  transition: 'color 0.2s',
  opacity: 0.85,
};

const iconLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.08)',
  borderRadius: '50%',
  width: 36,
  height: 36,
  transition: 'background 0.2s',
};

export default Footer;