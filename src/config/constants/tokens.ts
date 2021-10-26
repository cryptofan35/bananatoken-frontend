import { ChainId, Token } from '@bananafinance/sdk'

export const GRIMEX: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x89671544190ee39e469c8393009875df6565457a',
    18,
    'BANANA',
    'SpacegrimeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x5b4053a5691c57e3fe969face3123a43aa83b21c',
    18,
    'BANANA',
    'SpacegrimeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x78e7c71347df3bc1a87d767128d303a7c897eff4',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  grimex: {
    symbol: 'BANANA',
    address: {
      1: '0x89671544190ee39e469c8393009875df6565457a',
      3: '0x5b4053a5691c57e3fe969face3123a43aa83b21c',
    },
    decimals: 18,
    projectLink: 'https://spacegrime.finance/',
  },
  wbnb: {
    symbol: 'WBNB',
    address: {
      1: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      3: '0xaa2cd7d170781d4e769445189bc8a3e3ac19373c',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      1: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      3: '0x78e7c71347df3bc1a87d767128d303a7c897eff4',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
}

export default tokens
