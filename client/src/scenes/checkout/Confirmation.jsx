import {Box, Alert, AlertTitle} from '@mui/material';


const Confirmation = () => {
   return <Box margin="90px auto" width="80%" height="50vh">
    <Alert security='success'>
      <AlertTitle>Success</AlertTitle>
      You have Successfully made an Order -{" "}
      <strong>😊Congrats on making your purchase😊</strong>
    </Alert>
   </Box>
  
}

export default Confirmation
