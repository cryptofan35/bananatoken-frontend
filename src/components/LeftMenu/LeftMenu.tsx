import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//material-ui components
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import { Drawer, Box, List, ListItem, Typography, IconButton } from '@material-ui/core'
//material-ui icons
import EmailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import SettingsIcon from '@material-ui/icons/Settings'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import DescriptionIcon from '@material-ui/icons/Description'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

//external components
import logoImage from '../../assets/images/logo.png'

const drawerWidth = 250
const drawerCollapsedWidth = 80

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerCollapsedWidth,
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerCollapsedWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
    background: theme.palette.type === 'dark' ? 'black' : 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    minHeight: '100px !important',
  },
  leftMenuLogoText: {
    color: '#31C77E',
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  styleIcon: {
    minWidth: '39px',
  },
  styleListItemText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    fontSize: '1rem',
  },
  styleListHeading: {
    paddingLeft: '15px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  styleListHeadingText: {
    color: '#9D9D9D',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    fontSize: '1.25rem',
  },
  iconColor: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
  activeList: {
    backgroundColor: '#31C77E',
    color: '#ffffff !important',
  },
}))

const StyleListItem = styled(ListItem)({
  padding: '16px 16px 16px 18px',
  color: '#9D9D9D',
  '&:hover': {
    backgroundColor: '#91e1ba',
    color: '#9D9D9D',
  },
  '&:focus': {
    backgroundColor: '#31C77E',
    color: '#ffffff',
  },
})

const StyleLink = styled(Link)({
  padding: '0px',
})

interface LeftMenuProps {
  setIsOpen: (state: boolean) => void
  isOpen: boolean
}

const LeftMenu: React.FC<LeftMenuProps> = ({ setIsOpen, isOpen }) => {
  const classes = useStyles()

  const handleToggleButton = () => {
    const state = !isOpen
    setIsOpen(state)
  }
  const [menuName, setMenuName] = useState()
  const handleListItem = (menuName) => {
    setMenuName(menuName)
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.drawerHeader} display="flex" flexWrap="wrap" justifyContent="center">
        <IconButton onClick={handleToggleButton}>
          <MenuIcon className={classes.iconColor} />
        </IconButton>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Box display="flex" alignItems="center">
            <img src={logoImage} alt="logo" />
            <div className={classes.leftMenuLogoText}>
              <div>Banana</div>
              <div>Finance</div>
            </div>
          </Box>
        </Link>
      </Box>
      <Box my={2}>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('stake')}>
          <StyleListItem className={`${menuName === 'stake' ? classes.activeList : ''}`} button>
            <DashboardIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Stake</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/lend" onClick={() => handleListItem('lend')}>
          <StyleListItem className={`${menuName === 'lend' ? classes.activeList : ''}`} button>
            <AccountBalanceIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Lend</Typography>
          </StyleListItem>
        </StyleLink>
        <List className={classes.styleListHeading}>
          <Typography className={classes.styleListHeadingText}>HELP</Typography>
        </List>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('faqs')}>
          <StyleListItem className={`${menuName === 'faqs' ? classes.activeList : ''}`} button>
            <QuestionAnswerIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>FAQs</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('setting')}>
          <StyleListItem className={`${menuName === 'setting' ? classes.activeList : ''}`} button>
            <SettingsIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Setting</Typography>
          </StyleListItem>
        </StyleLink>
        <List className={classes.styleListHeading}>
          <Typography className={classes.styleListHeadingText}>Contact</Typography>
        </List>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('contact')}>
          <StyleListItem className={`${menuName === 'contact' ? classes.activeList : ''}`} button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Telegram</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('telegram')}>
          <StyleListItem className={`${menuName === 'telegram' ? classes.activeList : ''}`} button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Telegram (announcement)</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('announcement')}>
          <StyleListItem className={`${menuName === 'announcement' ? classes.activeList : ''}`} button>
            <TwitterIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Twitter</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('medium')}>
          <StyleListItem className={`${menuName === 'medium' ? classes.activeList : ''}`} button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Medium</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('docs')}>
          <StyleListItem className={`${menuName === 'docs' ? classes.activeList : ''}`} button>
            <DescriptionIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Docs</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('coingecko')}>
          <StyleListItem className={`${menuName === 'coingecko' ? classes.activeList : ''}`} button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Coingecko</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('coinmarketcap')}>
          <StyleListItem className={`${menuName === 'coinmarketcap' ? classes.activeList : ''}`} button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Coinmarketcap</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" to="/admin/stake" onClick={() => handleListItem('email')}>
          <StyleListItem className={`${menuName === 'email' ? classes.activeList : ''}`} button>
            <EmailIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Email</Typography>
          </StyleListItem>
        </StyleLink>
      </Box>
    </Drawer>
  )
}

export default LeftMenu
