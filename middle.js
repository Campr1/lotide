const middle = function(array){
  if(array.length <= 2)
  return [];

  const middleIn = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(middleIn)]]; 
  }else {
    return [
    array[middleIn - 1], array[middleIn]  
    ];
  }
}
module.exports = middle;