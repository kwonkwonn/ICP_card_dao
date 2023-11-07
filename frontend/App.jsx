import React from "react"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import { Link } from "react-router-dom"
import DataSet from "../frontend/cardsData"


function App() {

  return(<div className="App">
    <div className="text-center bg-black">
     <div className="w-full m-auto bg-black h-screen relative z-0 left-0 ">
        <img src="frontend/assets/mainImage.jpeg" alt="soldier" className=" w-9/12 m-auto h-full object-hidden z-0"></img>

      </div>

    <div className="absolute  top-0  w-full h-screen bg-black opacity-60  z-1">    </div>
      <div className="absolute  top-80 ">
      <p className=" text-white  w-screen  text-7xl mb-6 font-extrabold">the JEMIS</p>
      <Link href="" className="  text-3xl border  border-white rounded-lg px-4 py-2 text-white">Play Game</Link>
    </div>

    <div className="  w-9/12 m-auto  bg-black  py-32 z-1">
      <p className="text-3xl font-extrabold mb-20">카드소개</p>

      <div className="flex flex-col gap-12">
        <div className="flex gap-4">
      <div>
        <img src={`${DataSet[0].img}`} alt="img"></img>
        <p className=" text-2xl font-bold">"{DataSet[0].ment}"</p>
        </div>
        <div className="text-start text-2xl font-bold">
          <p>카드이름: {DataSet[0].name}</p>
          <p>종족: {DataSet[0].category}</p>
          <p>고용비 {DataSet[0].cost}</p>
          <p>스탯:{DataSet[0].attack}/{DataSet[0].health}</p>
          <p className="text-base">스탯:{DataSet[0].description}</p>
          
        </div>
        </div>
        
        <div className="flex gap-4">
      <div>
        <img src={`${DataSet[1].img}`} alt="img"></img>
        <p className=" text-2xl font-bold">"{DataSet[1].ment}"</p>
        </div>
        <div className="text-start text-2xl font-bold">
          <p>카드이름: {DataSet[1].name}</p>
          <p>종족: {DataSet[1].category}</p>
          <p>고용비 {DataSet[1].cost}</p>
          <p>스탯:{DataSet[1].attack}/{DataSet[1].health}</p>
          <p className="text-base">스탯:{DataSet[1].description}</p>
          
        </div>
        </div>
    
      </div>
    
    
    </div>
    </div>
  
  </div>)
  // return (
  //   <div className="App">
  //     <Header/>
  //     <div className="auth-section">
  //       <ConnectButton />
        
  //     </div>
  //     <ConnectDialog />

  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p className="slogan">
  //         React Template
  //       </p>
  //       <p className="twitter">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
  //     </header>

  //     <p className="examples-title">
  //       Examples
  //     </p>
  //     <div className="examples">
  //       <Counter />
        
  //       <Profile />
  //       <Transfer />
  //     </div>

  //   </div>
  // )
}

const client = createClient({
  canisters: {
  },
  providers: defaultProviders,
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
