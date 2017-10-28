// import _ from 'lodash'

var module2 = (() => {
  var function1 = () => {
    console.log('this is from function 1 module 1')
  }

  var function2 = () => {
    console.log('this is from function 2 module 2')
  }

  return {
    function1,
    function2
  }
})()

export default module2
