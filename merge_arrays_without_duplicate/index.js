const firstArr = new Array(250).fill(undefined).map((_, index) => `item${index}`);
const secondArr = new Array(300).fill(undefined).map((_,index) => `item${index}`);
const calculatePerformance = (fs, label = 'test') => {
  console.time(label);
  fs();
  console.timeEnd(label);
}

// 1. traditional
const traditionalSolution = () => {
  const result = [];
  for(let i = 0; i < firstArr.length; i++){
    if(result.indexOf(firstArr[i]) === -1)
      result.push(firstArr[i])
  }

  for(let i = 0; i < secondArr.length; i++){
    if(result.indexOf(secondArr[i]) === -1)
      result.push(secondArr[i])
  }
}
calculatePerformance(traditionalSolution, 'traditional Solution')

// 2. reduce
const reduceSolution = () => secondArr.reduce((a, c) => a.includes(c) ? a : [ ...a, c], [...firstArr]);
calculatePerformance(reduceSolution, 'reduce Solution');

// 3. filter
const filterSolution = () => {
  let result = [ ...firstArr, ...secondArr ];
  result = result.filter((item, index) => result.indexOf(item) === index);
}
calculatePerformance(filterSolution, 'filter solution');

// 4. new Set
const setSolution = () => [...new Set([ ...firstArr, ...secondArr ])]
calculatePerformance(setSolution, 'set solution');



// performance ranking
// 1. new Set
// 2. traditional
// 3. filter
// 4. reduce
