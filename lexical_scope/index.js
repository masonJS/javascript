const text = 'hello global world'

// function a(){
//   console.log(text)
// }

function b(){
  console.log(text)
  const text = 'hello local world'
  // a()
}

b()


