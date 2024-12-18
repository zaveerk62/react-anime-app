import { useState } from "react";
import Popular from "../components/Popular";
import Header from "../components/Header";
import Upcoming from "../components/Upcoming";
import Airing from "../components/Airing";


const Homepage = () => {

  
  const [rendered, setRendered] = useState('popular');

  const handleRender = () => {
    switch (rendered) {
      case 'popular':
        return <Popular rendered={rendered} setRendered={setRendered} />
      case 'upcoming':
        return <Upcoming rendered={rendered} setRendered={setRendered} />
      case 'airing':
        return <Airing rendered={rendered} setRendered={setRendered} />
        default:
          return <Popular rendered={rendered} setRendered={setRendered} />
    }
  }


  return (
    <>
      <Header rendered={rendered} setRendered={setRendered} />
      {handleRender()}
    </>
  )
}

export default Homepage;