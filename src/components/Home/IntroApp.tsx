import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "url('/Images/Home/banana-tree.png')",
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '200px 20px',
    },
    financeTitle: {
      color: '#FFC711',
    },
    farmingTitle: {
      color: theme.palette.type === 'dark' ? 'white' : '#31C77E',
    },
    launchAppBtn: {
      backgroundColor: '#31C77E',
      textTransform: 'none',
    },
    buyBtn: {
      backgroundColor: '#FFC711',
      textTransform: 'none',
    },
    docBtn: {
      backgroundColor: '#FF7511',
      textTransform: 'none',
    },
  }),
)

const StyledAvatar = styled(Avatar)({
  width: '240px',
  height: '240px',
})

const StyledIntroButton = styled(Button)({
  margin: '12px',
  borderRadius: '25px',
  color: 'white',
})

const IntroApp: React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: 'column-reverse', lg: 'row' }}
      >
        <Box mr={{ xs: 0, lg: 15 }}>
          <Typography className={classes.financeTitle} variant="h3">
            Banana Finance
          </Typography>
          <Typography className={classes.farmingTitle} variant="h3">
            Leveraged Yield Farming
          </Typography>
          <Box display="inline">
            <Link style={{ textDecoration: 'none' }} to="/admin/stake">
              <StyledIntroButton className={classes.launchAppBtn} variant="contained" size="large">
                Launch App
              </StyledIntroButton>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <StyledIntroButton className={classes.buyBtn} variant="contained" size="large">
                Buy Banana
              </StyledIntroButton>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <StyledIntroButton className={classes.docBtn} variant="contained" size="large">
                Documentation
              </StyledIntroButton>
            </Link>
          </Box>
        </Box>
        <Box ml={{ xs: 0, lg: 15 }}>
          <StyledAvatar alt="banana image" src="/Images/Home/banana_card.png" />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroApp
