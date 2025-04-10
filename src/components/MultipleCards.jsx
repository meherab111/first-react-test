// Named Export
export const Header = () => {

    return (
        <p>- Welcome to Series Details Site -</p>
    )
}

const MultipleCards = () => { // component
  
    const name = "Squid Game - 2" // using js 
    const description = "A group of desperate people who are invited to participate in a deadly survival game for a large sum of money."
    const genreFunc = () => {
      return "Thriller, horrific"
    }
  
    // let age = 19
  
    // let btnValue1 = "Watch Now"
  
    // if(age < 18){ 
    //   btnValue1 = "not available"
    // }
  
    const btnValue = (age) => {
      return age >= 18 ? "watch now" : "not available"
    }
  
    return (
      <div>
      <img src="squid-game.webp" alt="squid-game" width="50%" height="50%"/>
      <h1>Name: {name}</h1>
      <h2>Imdb Rating: {4 + 4.5}</h2>
      <p>Description: {description}</p>
      <p>Genre: {genreFunc()}</p>
      <button>{btnValue(17)}</button>
      {/* <button>{btnValue1}</button> */}
      {/* <button>{age >= 18 ? "watch now" : "not available"}</button> */}
    </div>
    )
  
    // using js inside html, dynamic value insertion. arithmetic operation. function call. Conditional Operator.
  }

export default MultipleCards // Default Export

// Named Export
export const Footer = () => {

    return (
        <p>Copy-Right @ReactTestDrive 2025</p>
    )
}

// Named and Default Export Together is Mixed Export