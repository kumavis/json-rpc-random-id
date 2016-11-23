module.exports = IdIterator

function IdIterator(opts){
  opts = opts || {}
  let max = opts.max || Number.MAX_SAFE_INTEGER
  let idCounter = typeof opts.start !== 'undefined' ? opts.start : Math.floor(Math.random() * max)

  return function createRandomId () {
    idCounter = idCounter % max
    return idCounter++
  }

}