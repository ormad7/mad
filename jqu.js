$('button').click(function(){

alert('Clicked!');

})

















var veg=["banana","melon","apple"];
var arr=[1,2,3];


const delay = ms=>
new Promise(resolve=>setTimeout(resolve,ms));             //same promise its good

(async ()=>{
    await delay(3000);
    alert('runs after 3 seconds');
})()

   










// function delay(ms){                                //promise
// return new Promise((resolve,reject)=>{                                      
//     setTimeout(()=>resolve(),ms)
// })
// }

// delay(3000).then(()=>alert('runs after 3 second'));
















// const getUser = cb =>{
//     setTimeout( ()=>{
//         cb({name:'Max'})                                         //callback
//     },2000);
// }

// getUser(user=>{console.log(user.name)});              //Max              
















//   function multiply(a,b=2){                        // b is value defult(value defult need to put at the end)
//     return a*b;
//   }

// console.log(multiply(3))






// [a,b]=[3,4];            //destructuring


// const restParameters=function(...rest){                  //rest parameter its opposite from spread operator.

//     return rest.reduce((previous,current)=>{           
//         return previous+current;

//     });
// }

// console.log(restParameters(3,4,5));






// let obj1={name:'avi',address:'tel aviv'};
// let obj2={phone:'058834043'};
// let mergedObj={obj1,obj2};               // merged if the key is diffrent.

// let arr1=[0,1,2];
// let arr2=[3,4,5]; 
// let add=arr1.concat(arr2);
// let adds=[...arr1,...arr2];         //same same concat       spread operator

// console.log(add);
// console.log(adds);











// JSON.parse(JSON.stringify(person))      object to string and back to object  shicpul of object



// let person1 ={
//     name:'or',
//     age:27
// }

//  let person2={...person1};                       

// function sum(x,y,z){
//     return x+y+z;
// }

// numbers=[1,2,31];

// console.log(sum(...numbers));           //sperad operator send item with psik between




// const mul =(a,b)=>console.log(a*b);

// const add = (a,b) =>{
// console.log (a+b);
// };

// add(2,3);
// mul(3,6)








// document.querySelector('button').onclick=function(){
//     alert('madmoni comeback');
// }





// const person ={

//     name:'mor'
// };

// person.name='dor';



// var check=5

// console.log(`check is now:${check+3}`);











// $(document).ready(function(){


// })

// $(function(){       //same same document.ready

// })