import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingPhone, setPendingPhone] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (phone) => {
    setIsLoading(true);
    try {
      // Mock API call - in real app, this would send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPendingPhone(phone);
      toast.success(t('otpSent'));
      return true;
    } catch (error) {
      toast.error('Failed to send OTP');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async (otp) => {
    setIsLoading(true);
    try {
      // Mock OTP verification - accept any 4-digit OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (otp.length === 4) {
        const newUser = {
          id: Date.now().toString(),
          phone: pendingPhone,
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        toast.success(t('loginSuccess'));
        return true;
      }
      toast.error('Invalid OTP');
      return false;
    } catch (error) {
      toast.error('OTP verification failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      verifyOTP,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};