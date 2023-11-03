'use client';
import { VIDEO_URL } from '@/src/constants';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { Box, Button, CardMedia, Modal, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  '& span': {
    margin: '0',
  },
  '& svg': {
    fontSize: 'xx-large !important',
  },
}));

export default function VideoButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledButton
        variant="contained"
        color="info"
        onClick={handleOpen}
        endIcon={<PlayCircleOutlineRoundedIcon color="white" />}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="TheBadge"
        aria-describedby="TheBadge video"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '385px',
            padding: '16px',
          }}
        >
          <CardMedia component="video" controls src={VIDEO_URL} autoPlay />
        </Box>
      </Modal>
    </>
  );
}
