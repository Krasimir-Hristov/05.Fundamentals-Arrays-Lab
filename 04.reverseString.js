function solve(arr){

    // let revArr = [];
    // for (let i = arr.length -1; i >=0; i--) {
    //     revArr.push(arr[i]);
        
    // }
    // console.log(revArr.join(" "))
 ////////////////////////////////////////////
    for(let i = 0; i < arr.length / 2; i++){
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = buffer;
    }
    console.log(arr.join(" "))



}
solve(['a', 'b', 'c', 'd', 'e'])