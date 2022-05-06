function random(max) {
  return Math.floor(Math.random() * max)
}

function createSource(num = 50, max = 2000) {
  const source = Array(num).fill(0).map(() => random(max));
  
  return source
}

module.exports = {
  createSource
}