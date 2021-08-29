

function foo(arr){

  /*
   * let은 block scope를 가지며 순회 되어질때 마다 for문{}의 스코프를 기준으로 새 바인딩이 이루어진다.
   * 클로저의 원리로 생성된 시점에 val변수의 값을 기억해두었다가 실행시점에 각각의 실행문 스코프기준의 var값을 출력한다.
   * output: 1 2 3 4
   */
  for(let data of arr){
    setTimeout(() => {
      console.log(data)
    }, 0)
  }

  /*
   * var는 function scope를 가지며, foo 이라는 함수 스코프안에서 공유되는 하나의 val 값을
   * 바인딩하고 있다.
   * val값은 마지막 배열의 끝값인 4로 할당되어진 상태에서 setTimeout의 callback함수가 실행되는
   * 시잠에서 이 공유되어진 val값(=4)를 호출하게 된다.
   * output: 4 4 4 4
   */
  for(var data of arr){
    setTimeout(() => {
      console.log(data)
    }, 0)
  }
}

// foo([1, 2, 3, 4])

let x = 'global scope'

function foo(){
  // 2. x console.log
  console.log(x)
  let x = 'local scope'
}

foo()
