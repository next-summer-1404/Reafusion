'use client';
import React from 'react';
import { ToastContainer as ReactToastifyContainer } from 'react-toastify'; 

const CustomToastContainer = () => {
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
    />
  );
};

export default CustomToastContainer;