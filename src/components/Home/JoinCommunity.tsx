import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Joincard from '../../common/components/Joincard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 20px 100px 20px',
    },
    appBar: {
      height: '100px',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #FAFFFE 0%, #F5F5F5 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    financeTitle: {
      color: '#FFC711',
    },
    farmingTitle: {
      color: '#31C77E',
    },
    launchAppBtn: {
      backgroundColor: '#31C77E',
    },
    buyBtn: {
      backgroundColor: '#FFC711',
    },
    docBtn: {
      backgroundColor: '#FF7511',
    },
    header: {
      fontSize: '36px',
      textAlign: 'center',
      marginBottom: '36px',
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
  }),
)

const IntroApp: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Join our community</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', lg: 'row' }}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Joincard isActive={true} iconSrc="fab fa-twitter" title="Twitter" subtitle="Banana Finance #BNF" />
          <Joincard
            isActive={false}
            iconSrc="fab fa-telegram-plane"
            title="Telegram"
            subtitle="Banana Finance Community"
          />
        </Box>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Joincard isActive={false} iconSrc="fab fa-medium-m" title="Medium" subtitle="Read our latest blog posts" />
          <Joincard isActive={false} iconSrc="fab fa-github" title="Github" subtitle="Review our code" />
        </Box>
      </Box>
    </div>
  )
}

export default IntroApp
