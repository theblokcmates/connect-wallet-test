'use client'
import Image from 'next/image'

export default function Home() {


  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect()
      console.log(response.publicKey.toString())
    }
  } 


  return (
    <>
      <button onClick={connectWallet}>
      COnnect wallet
      </button>
    </>
  )
}
