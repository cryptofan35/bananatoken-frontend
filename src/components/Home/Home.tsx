import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Avatar, Paper, IconButton, Box, Typography, AppBar, Toolbar } from '@material-ui/core'
import {
  Brightness2Outlined as Brightness2OutlinedIcon,
  WbSunnyOutlined as WbSunnyOutlinedIcon,
} from '@material-ui/icons'

import IntroApp from './IntroApp'
import IntroDetail from './IntroDetail'
import JoinCommunity from './JoinCommunity'

import logoImage from '../../assets/images/logo.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      height: '70px',
      justifyContent: 'center',
      background:
        theme.palette.type === 'dark'
          ? 'linear-gradient(90deg, #1D4437 0%, #141414 100%)'
          : 'linear-gradient(90deg, #FAFFFE 0%, #F5F5F5 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    container: {
      backgroundImage:
        theme.palette.type === 'dark'
          ? "url('/Images/Home/home_dark_back.png')"
          : "url('/Images/Home/home_light_back.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    themeSwitch: {
      width: '38px',
      height: '38px',
      background: theme.palette.type === 'dark' ? '#36656D' : 'white',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      marginRight: '4px',
    },
    themeButton: {
      color: '#31C77E',
      padding: '7px',
    },
    launchAppBtn: {
      background: 'linear-gradient(90deg, #5BE3B6 0%, #F9C817 100%)',
      textTransform: 'none',
    },
    topbar: {
      justifyContent: 'center',
    },
    styledLogoTitle: {
      color: theme.palette.type === 'dark' ? 'white' : '#31c77e',
      fontSize: '16px',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      marginLeft: '10px',
      lineHeight: 1.2,
    },
  }),
)

const StyledAvatar = styled(Avatar)({
  width: '50px',
  height: '50px',
})

const StyledIntroButton = styled(Button)({
  margin: '12px',
  borderRadius: '25px',
  color: 'white',
})

interface HomeProps {
  setIsDark: (state: boolean) => void
  isDark: boolean
}

const Home: React.FC<HomeProps> = ({ setIsDark, isDark }) => {
  const classes = useStyles()

  // switch theme
  const handleThemeChange = () => {
    const state = !isDark
    setIsDark(state)
  }
  return (
    <Box>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.topbar}>
          <Box width={{ xs: '95%', sm: '60%' }} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <StyledAvatar alt="banana logo" src={logoImage} />
              <Box>
                <Typography className={classes.styledLogoTitle} variant="subtitle1">
                  Banana
                </Typography>
                <Typography className={classes.styledLogoTitle} variant="subtitle1">
                  Finance
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Paper className={classes.themeSwitch}>
                <IconButton onClick={() => handleThemeChange()} className={classes.themeButton}>
                  {isDark ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />}
                </IconButton>
              </Paper>
              <Link style={{ textDecoration: 'none' }} to="/admin/stake">
                <StyledIntroButton className={classes.launchAppBtn} variant="contained" size="large">
                  Launch App
                </StyledIntroButton>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.container} py={4}>
        <IntroApp />
        <IntroDetail />
        <JoinCommunity />
      </Box>
      <Box width="100%" height="50px" bgcolor="#31C77E">
        <Box
          width={{ xs: '100%', sm: '40%' }}
          textAlign={{ xs: 'center', sm: 'end' }}
          style={{ paddingTop: '12px', color: 'white' }}
        >
          <p>Powered by Banana Finance</p>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
