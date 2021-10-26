import React from 'react'
import { styled } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  styledHarvestButton: {
    color: '#ffca28',
    backgroundColor: theme.palette.type === 'dark' ? 'black' : 'white',
    borderRadius: '10px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px',
    textTransform: 'none',
  },
}))

const StyledTokenEarningBox = styled(Box)({
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundImage: "url('/Images/Stake/banana_earning.png')",
})

const StyledButtonBox = styled(Box)({
  textAlign: 'right',
  alignSelf: 'flex-end',
})

const StyledAvatar = styled(Avatar)({
  border: '3px solid rgba(255, 255, 255, 0.3)',
  marginRight: '16px',
  width: '56px',
  height: '56px',
})

const StyledEarningAmount = styled(Typography)({
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  lineHeight: 1,
  margin: '0 8px',
})

export default function TokenEarning() {
  const classes = useStyles()
  return (
    <StyledTokenEarningBox
      color="white"
      width={{ xs: '100%', lg: '50%' }}
      m={{ xs: '0 0 36px 0', lg: '0 12px 36px 0' }}
    >
      <Box
        py={{ xs: 4, sm: 6, md: 8 }}
        px={{ xs: 4, sm: 6, md: 8 }}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h5" gutterBottom>
            Your Banana Earnings
          </Typography>
          <Typography variant="h6" gutterBottom>
            pending harvest
          </Typography>
          <Box display="flex" flexWrap="wrap" alignItems="center">
            <StyledAvatar alt="Remy Sharp" src="/Images/Stake/banana.png" />
            <StyledEarningAmount variant="h4">5.01223</StyledEarningAmount>
            <Typography variant="subtitle1">($15.66)</Typography>
          </Box>
        </Box>
        <StyledButtonBox>
          <Button className={classes.styledHarvestButton} variant="contained">
            Harvest
          </Button>
        </StyledButtonBox>
      </Box>
    </StyledTokenEarningBox>
  )
}
