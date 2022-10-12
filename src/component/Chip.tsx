import { Box, Chip } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useIsOverflow } from '../hooks/hooks';

const CustomChip = () => {
  return (
    <Box sx={{ width: '200px', backgroundColor: 'red', height: '1rem', mr: '5px', overflow: 'hidden' }}>
      <Chip label="Curry" />;
    </Box>
  );
};
export default CustomChip;
