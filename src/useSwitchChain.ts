import { useEffect } from 'react'
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { oasysChain } from './chains';

function useSwitchChain() {
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();

  useEffect(() => {
    if (typeof window.ethereum === 'undefined' || !switchNetwork || !chain) return;
    const ethereum = window.ethereum;

    // @ts-ignore
    ethereum.on('networkChanged', function (networkId) {
      alert('switch' + networkId)
      switchNetwork(oasysChain.hubt.id);
    })
    if (chain?.unsupported) {
      alert('switch')
      switchNetwork(oasysChain.hubt.id);
    }
  }, [switchNetwork, chain])

  return []
}

export default useSwitchChain
