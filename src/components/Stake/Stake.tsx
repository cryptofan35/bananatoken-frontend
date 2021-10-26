import React, { useState, useCallback, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

// components
import PageTitle from '../../common/components/PageTitle'
import StakeCard, { FarmWithStakedValue } from './StakeCard'
import StakeCardItem from './StakeCardItem'
import TokenEarning from './TokenEarning'
import WalletBalance from './WalletBalance'
import Loading from './Loading'

import { getAddress } from 'utils/addressHelpers'
import { useFarms, usePollFarmsData, usePriceGrimexBusd } from 'state/farms/hooks'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import { Farm } from 'state/types'
import { getFarmApr } from 'utils/apr'

const useStyles = makeStyles((theme) => ({
  styledPaper: {
    backgroundColor: theme.palette.type === 'dark' ? '#292A2D' : 'white',
  },
  available: {
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? 'white' : 'black',
    fontFamily: 'Roboto',
  },
}))

const Stake: React.FC = () => {
  const classes = useStyles()

  const { data: farmsLP, userDataLoaded } = useFarms()
  const grimexPrice = usePriceGrimexBusd()
  const [query, setQuery] = useState('')
  const { account } = useWeb3React()
  // const [newArray, setnewArray] = useState([])

  usePollFarmsData(false)

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))

  // const userDataReady = !account || (!!account && userDataLoaded)
  // const earnGrimexFarms = farmsLP.filter(
  //   (farm) => farm.pid !== 0 && farm.multiplier !== '0X' && isEarnGrimexPid(farm.pid),
  // )
  // const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
  // const archivedFarms = farmsLP.filter((farm) => isArchivedPid(farm.pid))

  const [isActive, setActive] = useState(true)

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteToken.busdPrice) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
        const lpAddress = getAddress(farm.lpAddresses)
        const { cakeRewardsApr, lpRewardsApr } = isActive
          ? getFarmApr(new BigNumber(farm.poolWeight), grimexPrice, totalLiquidity, lpAddress)
          : { cakeRewardsApr: 0, lpRewardsApr: 0 }

        return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPR
    },
    [grimexPrice, query, isActive],
  )

  const chosenFarmsMemoized = useMemo(() => {
    let chosenFarms = []
    chosenFarms = farmsList(activeFarms)

    return chosenFarms
  }, [activeFarms, farmsList])

  // useEffect(() => {
  //   const initFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  //   setnewArray(initFarms)
  // }, [farmsLP])

  return (
    <Box px={{ xs: 2, sm: 4, lg: 5 }}>
      <PageTitle title="Stake" />
      <Box className={classes.styledPaper} p={{ xs: 2, sm: 4, lg: 5 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{
            xs: 'column',
            lg: 'row',
          }}
        >
          <TokenEarning />
          <WalletBalance />
        </Box>
        <Typography className={classes.available} variant="h5" gutterBottom>
          Available Staking Pools
        </Typography>

        {chosenFarmsMemoized.map((farm) => (
          <StakeCardItem key={farm.pid} farm={farm} earnToken="BANANA" account={account} />
        ))}

        {/* {stakingPoolCard.map((card) => (
          <StakeCard key={card.id} cardinfo={card} />
        ))} */}

        {account && !userDataLoaded && <Loading />}
      </Box>
    </Box>
  )
}

export default Stake
