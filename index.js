// // script.js
// const possibleNames = [
//   "Dr. Slice",
//   "Dr. Pressure",
//   "Prof. Possibility",
//   "Prof. Prism",
//   "Dr. Impulse",
//   "Prof. Spark",
//   "Dr. Wire",
//   "Prof. Goose",
// ]
// const possibleOccupations = ["gardener", "programmer", "teacher", "driver"]
// const minPrice = 25
// const maxPrice = 100

// const getRandomElement = array => {
//   return array[Math.floor(Math.random() * array.length)]
// }

// const generateRandomFreelancer = () => {
//   const name = getRandomElement(possibleNames)
//   const occupation = getRandomElement(possibleOccupations)
//   const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice
//   return { name, occupation, price }
// }

// const freelancers = [generateRandomFreelancer(), generateRandomFreelancer()]

// const h1Avg = document.querySelector(".forum-avg-price")

// const renderFreelancers = () => {
//   const freelancersUl = document.querySelector("#freelancers-ul")
//   freelancersUl.innerHTML = ""

//   let total = 0
//   freelancers.forEach(freelancer => {
//     const element = document.createElement("li")
//     element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
//     freelancersUl.appendChild(element)
//     total += freelancer.price
//   })

//   const avgPrice = total / freelancers.length
//   h1Avg.textContent = `Average Price: $${avgPrice.toFixed(2)}`
// }

// const addRandomFreelancer = () => {
//   const newFreelancer = generateRandomFreelancer()
//   freelancers.push(newFreelancer)
//   renderFreelancers()
// }

// const intervalId = setInterval(addRandomFreelancer, 3000)
