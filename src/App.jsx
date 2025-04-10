// import MultipleCards from "./components/MultipleCards" // Default Import

// import {MultipleCards, Footer} from "./components/MultipleCards" // Named Import

import MultipleCards, {Header, Footer} from "./components/MultipleCards" // Mixed Import

export const App = () => { //component
// <> </> is the shorthand of Fragment
//
  return (
    <> 
    <Header />
    <MultipleCards />
    <MultipleCards />
    <MultipleCards />
    <Footer />
    </>
  )
}
