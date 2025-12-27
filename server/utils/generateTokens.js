import jwt from 'jsonwebtoken';

const generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { id: userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { 
    accessToken, 
    refreshToken,
    accessTokenExpiry: 15 * 60, // seconds
    refreshTokenExpiry: 7 * 24 * 60 * 60 // seconds 
  };
};

export default generateTokens;