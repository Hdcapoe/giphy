import { useEffect, useState } from 'react'

import Giphybtn from './Components/Giphybtn'

import Display from "./Components/Display";



function App() {

 const [gif, setGif] =useState(null)

async function dataFetch () {
  let apiKey = import.meta.env.VITE_APP_API

  let url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=r`

  
  try {
    let response = await fetch(url)   
    
    let data = await response.json()
    // console.log(data.data.images.original.url)
    let path = data.data.images.original.url
    setGif(path)
    } catch (error) {
      console.log(error)
    }
}
  useEffect(() => {dataFetch()},[])
  
  return (
    <>
      <Giphybtn onClick={ dataFetch} />
      <Display gif={gif} />

    </>
  )
}

export default App
