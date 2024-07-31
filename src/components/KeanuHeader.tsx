import { Typography } from '@mui/material';

export const KeanuHeader = () => {
    return (
        <>
            <Typography sx={{ textAlign: 'center' }} variant="h2" fontWeight={700} gutterBottom>
                Welcome to your Keanu Image App
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
                If you don't specify a height, you'll get a square Keanu...
            </Typography>
        </>
    );
}
