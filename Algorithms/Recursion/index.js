
// recursion
function countDown(count){
  if(count === 0) return;
  count--
  countDown(count)
}
// iteration
function countDown2(count){
  for(let i = count ; i > 0 ; i--){
    console.log(count)
  }
}
countDown2(5)
countDown(5)

