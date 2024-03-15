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

const delay = 1000

const h1Avg = document.querySelector(".forum-avg-price")

const addFreelancersWithDelay = (arr, delay) => {
  const freelancersUl = document.querySelector("#freelancers-ul")
  let total = 0

  const intervalId = setInterval(() => {
    if (arr.length === 0) {
      clearInterval(intervalId)
      return
    }

    const freelancer = arr.shift()
    const element = document.createElement("li")
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
    freelancersUl.appendChild(element)

    total += freelancer.price
    const avgPrice = total / freelancersUl.children.length
    h1Avg.textContent = `Average Price: $${avgPrice.toFixed(2)}`
  }, delay)
}

addFreelancersWithDelay(freelancers, delay)
