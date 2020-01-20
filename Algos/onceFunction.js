// Once accepts a callback function and returns a function
function once(cb) {
  let hasBeenCalled = false; // Indicates wheter cb has been invoked
  let cachedResult; // Stores result of cb invocation

  // Create a function, oncifitedCb
  function oncifiedCb(...args) {
    if (!hasBeenCalled) { // If cb hasn't been invoked:
      cachedResult = cb(...args) // Call cb and store result
      hasBeenCalled = true; // Set hasBeenCalled to true
    }
    return cachedResult
  } 
  return oncifiedCb
}

const addByTwoOnce = once(num => num + 2)

