import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { getSession, signIn as signIntoProvider, useSession} from "next-auth/react"
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Brands from '../components/Brands'

export default function Home() {
  const {data:session} = useSession();
  console.log(session)
  return (
    <div className="">
      <Head>
        <title>Disney +</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {
      session ?
      (
        <main>
          <Slider/>
          <Brands/>
      
      </main>
        
      ):
      <Hero/>
     
       }

    
    </div>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context);

  return {
      props:{
          session
      }

  }
}