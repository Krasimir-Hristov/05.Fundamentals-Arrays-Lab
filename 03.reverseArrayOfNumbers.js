function solve(num, inputArr){

    // let newArr = [];
    // for (let i = 0; i < num; i++) {
    //     newArr.push(inputArr[i]);
        
    // }
    // let output = " ";
    // // let revArr = [];
    // for (let i = newArr.length - 1; i >= 0 ; i--) {
    //     // revArr.push(newArr[i]);
    //     output += `${newArr[i]} `
    // }
    // // console.log(revArr.join(" "))
    // console.log(output)

    inputArr.splice(num, inputArr.length -1)
    inputArr.reverse()

    console.log(inputArr.join(` `))
    

}
solve(3, [10, 20, 30, 40])