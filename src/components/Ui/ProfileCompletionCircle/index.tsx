'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import { color } from 'framer-motion';

const ProfileCompletionCircle = ({ percentage = 19 }: { percentage: number }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: 133,
        height: 133,
      }}
    >
      {/* دایره پس‌زمینه */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={133}
        thickness={5}
        sx={{
          color: '#e6edf5',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />

      {/* دایره پیشرفت */}
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={133}
        thickness={5}
        sx={{
          color: '#0d3b66',
          position: 'absolute',
          left: 0,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />

      {/* متن وسط */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#0d3b66',
            fontSize: '1.2rem',
          }}
        >
          {`${percentage}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCompletionCircle;