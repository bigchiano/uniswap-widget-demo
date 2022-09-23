import { getPriorityConnector } from '@web3-react/core'
import metaMask, { isMetaMask } from './metaMask'
import walletConnect, { isWalletConnect } from './walletConnect'

export function getConnectorName(connector) {
  if (isMetaMask(connector)) {
    return 'MetaMask'
  } else if (isWalletConnect(connector)) {
    return 'WalletConnect'
  } else {
    throw new Error('Unknown Connector')
  }
}

export const connectors = [metaMask, walletConnect]

export function useActiveProvider() {
  return getPriorityConnector(...connectors).usePriorityProvider()
}
