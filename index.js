//possible names
const possibleNames = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
]
//posbile occupations
const possibleOccupations = ["gardener", "programmer", "teacher", "driver"]
//min and max price for worker
const minPrice = 25
const maxPrice = 100

const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)]
}
//will generate a random freelancer
const generateRandomFreelancer = () => {
  //creates name var - uses random element to generate a random freelancer name
  const name = getRandomElement(possibleNames)
  //creates occupation- uses random element to generate a random occupation
  const occupation = getRandomElement(possibleOccupations)
  //const price - uses the max and min price to create a random number
  const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice
  //return the name, occupation and price in an obj
  return { name, occupation, price }
}
//the freelancer array generating a random free lancer
const freelancers = [generateRandomFreelancer()]
//selects the h1 containing the average price
const h1Avg = document.querySelector(".forum-avg-price")
//fucntion to display the freelancers

const renderFreelancers = () => {
  //grab the freelancers ul
  const freelancersUl = document.querySelector("#freelancers-ul")
  //allows me to add one user at a time by clearing the list
  freelancersUl.innerHTML = ""
  //set the total avg as 0
  let total = 0
  //loop through the freelancers
  freelancers.forEach(freelancer => {
    //creates the li
    const element = document.createElement("li")
    //attatches the freelancer props to the element
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
    //adds the li element to the ul
    freelancersUl.appendChild(element)
    //ass we increment, the price of the freelancer is added to the total
    total += freelancer.price
  })

  //here we create the avg price element, we divide the price by the length of thr arrray
  const avgPrice = total / freelancers.length
  // the the text content is updated to display the average price
  h1Avg.textContent = `Average Price: $${avgPrice.toFixed(2)}`
}

const addRandomFreelancer = () => {
  //we create a new freelancer using the generator function
  const newFreelancer = generateRandomFreelancer()
  //push the new freelancer to the existing array
  freelancers.push(newFreelancer)
  //rednder the freelancers function
  renderFreelancers()
}

const intervalId = setInterval(addRandomFreelancer, 3000)
