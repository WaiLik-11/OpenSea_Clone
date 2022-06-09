import { useAddress, useMetamask } from "@thirdweb-dev/react"
import Main from '../components/Home';
import Head from 'next/head';

const style = {
  wrapper : `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white`,
}

export default function Home() {
  const connectWithMetakmask = useMetamask();
  const address = useAddress();

  console.log(address)

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <Head>
          <title>OpenSea Clone/Connect to Wallet</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <button
        onClick={connectWithMetakmask}
        className={style.connectWalletButton}
      >
        Connect Metamask
      </button>
      </div>
    )
  }

  return <>{address ? <Main /> : Auth()}</>
}
