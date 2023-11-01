//input: array of numbers
const doctors = [
  {
    "name" : "x",
    "consul_time" : 3
  },
  {
    "name" : "y",
    "consul_time" : 4
  }
]
//input: int
const queue_ahead = 14

function estimating(queue_ahead,doctors){
  const max_consul_time = Math.max(...doctors.map(o => o.consul_time))
  const max_patients_each_doctors = Math.round(queue_ahead/doctors.length)

  const max_etimate_time = max_consul_time * max_patients_each_doctors
  return max_etimate_time
}

console.log("number queue:", (queue_ahead + 1))
console.log("time estimate : ", estimating(queue_ahead,doctors) , "minutes")