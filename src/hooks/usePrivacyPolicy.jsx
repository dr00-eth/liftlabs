import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePrivacyPolicy = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the URL includes /privacy-policy
    if (location.pathname === '/privacy-policy') {
      setIsPrivacyPolicyOpen(true);
    }
  }, [location]);

  const handleClosePrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(false);
    // Remove /privacy-policy from the URL if it's present
    if (location.pathname === '/privacy-policy') {
      navigate('/', { replace: true });
    }
  };

  const handleOpenPrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(true);
    navigate('/privacy-policy', { replace: true });
  };

  return {
    isPrivacyPolicyOpen,
    handleOpenPrivacyPolicy,
    handleClosePrivacyPolicy,
  };
};