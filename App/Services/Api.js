// a library to wrap and simplify api calls
import apisauce from 'apisauce'

let myFeed = 'http://api.massrelevance.com/'

// our "constructor"
const create = (baseURL = myFeed) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    },
    // 10 second timeout...
    timeout: 10000
  })

  return {
    api
  }
}

// let's return back our create method as the default.
export default create
