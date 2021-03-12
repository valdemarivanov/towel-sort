
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return []};
  let rrr=[];
  for (let i=0;i<matrix.length;i++){
    if (i%2 == 0){
       let malen=[];
       malen=matrix[i];
       for (let j=0;j<malen.length;j++) rrr.push(malen[j]);
             }
    else{
      let malen=[];
      malen=matrix[i];
      for (let j=malen.length-1;j>-1;j--) rrr.push(malen[j]);  
    }
  }
return rrr;
}
