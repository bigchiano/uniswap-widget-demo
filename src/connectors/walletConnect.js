import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
import { Buffer } from 'buffer'

import { JSON_RPC_URL } from '../constants'
import { toWeb3Connector } from './utils'

// WalletConnect relies on Buffer, so it must be polyfilled.
if (!('Buffer' in window)) {
  window.Buffer = Buffer
}

export function isWalletConnect(connector) {
  return connector instanceof WalletConnect
}

const connector = initializeConnector (
  (actions) =>
    new WalletConnect(
      actions,
      {
        rpc: { 1: JSON_RPC_URL },
      },
      false
    )
)
export default toWeb3Connector(connector)
