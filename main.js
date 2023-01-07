
// const fs=require('fs').promises;

 // nodejs

 const express=require('express');
 const app=express();

 app.get('/todos',(req,res)=>{

    res.get([
        {
            id:1,
            title:'Throw garbage',
            completed:false
        },
        {
            id:2,
            title:'Wash the house',
            completed:false
        }
    ]);
 });

    app.get('/',(req,res)=>{
    res.send('<a href ="http://www.google.com">Google</a>');
    })

    app.get('/check',(req,res)=>{
        res.send('Hello madmoni !');
        })

    app.listen(8000,()=>{
        console.log('Lisenting ...');
    })





















    // const http = require('http');
    // const fs = require('fs');
    // const express =require('express');
    // const port=8080;

    // const app =express();

    // app.get('/path',function(req,res){                   //same same the exsample after
    //     res.send('Hello World');
    // });

    // app.listen(3000)











//     http.createServer((request,response)=>{

//         response.writeHead(200,{'Content-Type':'text/json'});
        
//         fs.readFile('todos.json',(err,Content)=>{
//             console.log(content);
//             response.write(content);
//             response.end();
//         });

//         response.end('Hello World\n');
// }).listen(port);

// console.log('Server running at http://127.0.0.1'+port);






//nodejs







//     function check(){
//         console.log('madmoni');
//     }

//   setInterval(() => {
//     check()
//   }, 2000);

























// document.querySelector('.input1').focus();
// document.write('<h1>madd<h1>');

// document.querySelector('button').onclick=
// function(){
//     alert('click');
// }





















// setTimeout(
//     Function(){
//         alert("Hello");
//     },2000
// )

// var intervalID= setInterval(function(){

// console.log(new Date())

// },2000)
//clearInterval(intervalID)





















//  var el =document.querySelector('div');
// // el.parentNode.removeChild(el);
// el.style.color='red';



















// var el=document.createElement('div');
// el.innerHTML='div 4';
// document.body.appendChild(el);



















// var arr1=[1,4,9,16];

// const map1=arr1.map(function(x){

// return x*2;

// })


// console.log(map1)







// var arr1=[5,12,8,55];

// function findFirst(e){
//     return e>13;
// }


// console.log(arr1.find(findFirst));














// function greatherSix(words){
// const result=words.findIndex(function(w){
//     console.log (w.length>6);
// })
// }

// var words =['spray','limit','elite','exuberant','destruction','present'];
// greatherSix(words);



















// function myConcat(fruit,veg){
// var two=fruit.concat(veg);
// console.log(two);
// }

// var f=['melon','banana','orange','apple'];
// var v=['cucamber','tomato','carrot'];
// myConcat(f,v);











// var arr= [1,94,3];

// function max(a){
//     var max= 0;
//     var r;
// for(var i=0;i<a.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//         r=i;
//     }
// }
// return max;

// }

// var result=max(arr);
// console.log('The max is: ',result)

















// var arr =[

// 1,3,90,'or',{
//     name:'david',
//     age:70
// }

// ]

// arr.forEach(function(element,index){
//     console.log(index,element);

// })
// arr.push(10);
// console.log(arr);





// var person ={
// name:'bob',
// age:32,
// gender:'male',
// greeting:function(){
// alert('hello my name is: '+this.name);
// }

// }


//  console.log(person.greeting());












// var a="ormadsmo"
// console.log(a.includes('mad'));
// console.log(a);









// var x= prompt('what is your name?');
// console.log('x: ',x);

// for(var i=0;i<9;i++){
//     console.log(i);
// }
// console.log('end of loop',i);