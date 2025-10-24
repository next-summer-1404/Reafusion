'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import { ToastContainer as ReactToastifyContainer } from 'react-toastify'; 

const CustomToastContainer = () => {
  const { theme } = useTheme();
  return (
    <ReactToastifyContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
};

export default CustomToastContainer;