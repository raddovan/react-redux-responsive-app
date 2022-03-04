import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

  function Footer() {
    return (
      <footer  styles={{ 
        marginTop: '8 px',
        padding: `6px 0`,
       
      }}>
        <Paper className='footer'>
          <Typography variant="h7" component="h3" color={'white'}>
            All rights reserved
          </Typography>
        </Paper>
      </footer>
    );
  }

  export default Footer;