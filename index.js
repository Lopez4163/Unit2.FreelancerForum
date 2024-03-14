const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
]

// const addFreelancerId = setInterval(addFreelancer, 1000)
const freelancersUl = document.querySelector("#freelancers-ul")
const freelancerElements = freelancers.map(freelancer => {
  const element = document.createElement("li")
  element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
  freelancersUl.appendChild(element)
  return element
})
