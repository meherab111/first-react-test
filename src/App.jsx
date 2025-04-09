export const App = () => { //component
// <> </> is the shorthand of Fragment
//
  return (
    <> 
    <MultipleCards />
    <MultipleCards />
    <MultipleCards />
    </>
  )
}

const MultipleCards = () => { // component
  return (
    <div>
    <img src="squid-game.webp" alt="squid-game" width="50%" height="50%"/>
    <h1>Name: Squid Game - 2</h1>
    <h2>Imdb Rating: 8/10</h2>
    <p>Description: A group of desperate people who are invited to participate in a deadly survival game for a large sum of money.</p>
  </div>
  )
}