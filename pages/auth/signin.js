import { getProviders, signIn as signIntoProvider} from "next-auth/react"
import Header from "../../components/Header";
import Image from "next/image"



function signin({providers}) {
    return (
        <div>
            {/* <h1>Sign In</h1> */}
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-2 py-2 mt-48">


            <Image src="/images/logo.svg" width={140} height={140}
            className="cursor-pointer"/>

            
            <div className="mt-20">
            {
                Object.values(providers).map ((provider) => (
                    <div key={provider.name}>

                        <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIntoProvider
                        (provider.id,{callbackUrl:"/"})
                        }>
                            Sign in with {provider.name}
                        </button>

                    </div>
                )
                )
            }
            </div>
            </div>
        </div>
    )
}




export default signin
export async function getServerSideProps () {
    const providers = await getProviders();
  
    return {
        props:{
            providers
        }
  
    }
  }
  