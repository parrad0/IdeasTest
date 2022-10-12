import { Box, Button, MenuList, Paper, Snackbar } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import CustomChip from '../component/Chip';
import { useIsOverflow } from '../hooks/hooks';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [chips, setChips] = useState(['lechuga', 'Tomate', 'Platano']);
  const [menu, setMenu] = useState([]);
  const didMountRef = useRef(false);
  const ref = useRef();
  const ref2 = useRef();
  const isOverflow = useIsOverflow(ref, ref2);
  useEffect(() => {
    if (didMountRef.current) {
      console.log(`Hey: ${isOverflow}`);
      if (isOverflow) {
        console.log(`Hey1.1: ${isOverflow}`);
        let deletedItem = chips.pop();
        setMenu((prev) => [...prev, deletedItem]);
        console.log('pusheando datos');
        setChips((previousArr) => previousArr.slice(0, previousArr.length));
      }
      // } else {
      //   console.log(`Out1.1: ${isOverflow}`);
      //   let deletedItem = menu.pop();
      //   setChips((prev) => [...prev, deletedItem]);
      //   setMenu((previousArr) => previousArr.slice(0, -1));
      // }
    }
    didMountRef.current = true;
  }, [isOverflow]);
  return (
    <Box>
      <Box
        sx={{
          height: '3rem',
          backgroundColor: (theme) => theme.palette.primary.dark,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Header
      </Box>
      <Box
        ref={ref2}
        sx={{
          height: '3rem',
          backgroundColor: (theme) => theme.palette.secondary.light,
          overflow: 'hidden',
        }}
      >
        <Box
          ref={ref}
          sx={{
            overflowY: 'hidden',
            width: 'fit-content',
            display: 'flex',
            // flexFlow: 'row wrap',
            // maxHeight: '25px',
            alignItems: 'center',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Button> Home</Button>
          {chips.map((c) => (
            <CustomChip></CustomChip>
          ))}
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
          message="Note archived"
        />
      </Box>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        {menu.map((item) => (
          <MenuList>"hey"</MenuList>
        ))}
      </Paper>
    </Box>
  );
}
