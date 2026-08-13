// console.log("salempur");
// console.info("mainpuri");
// console.warn("bhopal");
// console.error("kuraoli");

// let a =prompt("name")
// alert(`hey ${a}`)

// let a = 22
// typeof


// let Username= prompt("what is your name?")
// console.log(typeof Username);      // prompt se jo bhi loge bo string bn jayega

// let age = prompt("age likho")  // jb ham age likhege to number mai likhege to bo usako string hi btayega

// esko solve krne ka ek tarika hota hota h

// let age = Number(prompt("Enter your age:"));

// console.log(age);
// console.log(typeof age);


// js me array ka type Object hota h
// exam= 
// let skills=["js","html"]  eska typeof object

// let x=null  typeof= object h eska bhi okk

//NaN ka data type number




// ============ PREMITIVE data type => jo value ko hold krte h 
// exm String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol



//   ============== Reference (Non-Primitive) Data Types  => (reference) ko store karte hain.
// Object
// Array
// Function
// Date
// Map



// ========= OPERATORS IN JS  ===========

// ================= [1] ARITHMETIC OPERATOR ==============
// + - * % ** / 

// 2**3 => 2 ki power 3

// [2]========== ASSIGNMENT OPERATOR =============
//   = += -+ *+ /+ %=


// [3] =========COMPARISON OPRATOR =========
// == === >  <  >=  <= !=  !==


// [4] ========= LOGICAL OPRETOR ==========
// && || !


// true && true=> true
// false && true => false
// true && false => false 
// false && false => false 

//  true || true => true
// false || true => true
// true || false => true
// false || false => false



//  ===============  TERNORY OPERATOR =============
// conductio ? this dot : that dot


//   WHAT IS HOISTING ?
//  hoisting => variable ko banane se phle bhi use kr skte h 

 // console.log(a);
// var  a = 12   ans=> Undefiend
// hoisting mai variable toot jata h do hisso mai jaise 
// var a;  esako khte h declaration 
// a=12; esako khte h initialization 

// HOISTING let ke sath work nhi krti h *****

//  console.log(b);  esko yaha nhi define kr skte h kyu yaha TDZ h 

// let b =24;
//  yaha kr skte ho define

// var = yah globle scope variable h
// let,const = Block scope hote h

// ++++++++++++++++++++ DATA TYPE++++++++++++   

//   [1]    PRIMITIVE DATA TYEPE
// [2]    Non primitive data type / Reference data type 
 // Primitive data type = symbol string, number boolian, undefind null bigint
// non pri.= array function objects set map date 

// bigInt = 
// let bigN= 465451685461684351684n=> bigInt
// null=> null ka type of Object h 
// let unique = Symbol ("name")
// console.log(typeof unique)

// Reference data type = ye apaki original value yaad nhi rkhta sief unka refrence yaad rkhta h


// falsy value => 0, "", null, undefined, NaN, false  !! esase hm pta kr skte h ki kon si value truth h kon si falsy h

// truthy value => "0", " ", [], {}, true, 1, -1, Infinity, -Infinity


// ++++++++++++++++ SWITCH CASE ++++++++++++++++
// let conduction = "value1"
// switch(conduction){
// case"value1":
// console.log("value1")
//     // code block
//     break;
// case"value2":
// console.log("value2")
//     // code block
//     break;
// default:
//     console.log("default value")
//     // code block
// }

// let a =12
// ++a  => 13   value ko turant bda do yaaki ki priincrement kro 
// a++  => 12  esame phle value ko use kro fir bda kro yaaki ki post increment kro
// --a  => 11
// a--  => 12


//  INSTENTOF => reference ke sath use krte h  primitive ke sath nhi 
// typeof => primitive ke sath use krte h reference ke sath nhi


// Q1=>   let x=10
// let y=20
// if(x>5 && y>25){
// console.log("A")
// }else{
//     console.log("B")
// }

// && ko kahi bhi false mil jaaye to bah false de deta h
//  ans=> B kyu ki y>25 false h to pura condition false hoga

// Q-2 let isAdmin=true
// let isLogin=false
// if(isAdmin || isLogin){
// console.log("Access granted")
// }else{
//     console.log("Access denied")
// }

// || ko kahi bhi true mil jaaye to bo true de deta h
// ans- > Access granted  kyu ki || mai ek true mil gaya to pura condition true hoga


// Q-3  let temperature=30
// if(!(temperature<25)){
// console.log("hot")
// }else{
//     console.log('pleasant')
// }
// ans- hot  kyu ki temperature<25 false h to !false=>true hoga to if mai chalega

// Q-4 let a=0
// if(a){
// console.log("truthy")
// }else{
//     console.log("falsy")
// }
// ans- falsy

// Q-5 let point=100
// let status=point>90?"gold": point>50? "silver":"bronze"
// console.log(status)
// ans- gold

// Q-6 let loggedIn=true
// let hastoken=false
// let access= loggedIn && hastoken ? "allowed":"denied"
// console.log(access)
// ans- denied  kyu ki loggedIn true h lekin hastoken false h to pura condition false hoga to else mai jaayega

// let b=5
// ++b  valur ko turant bda do yaaki ki priincrement kro
// console.log(b)
// ans-6

// let x=8
// let y=x++ post increment kro to phle value ko use kro fir bda kro
// console.log(x,y)
// ans- 9, 8

// let p=8
// let q=++p value ko turant bda do
// console.log(p,q)
// ans- 9, 9  kyu ki pre increment kro to phle value ko bda do fir use kro

// let m=10
// console.log(m--) yaha 10 ayega aglibar 9 ayega
// console.log(m)

// ans- 10,9


// let n=5
// let result= n++ + ++n => 5+7
// console.log(result)
// ans-12

// let count=5
// if(count-- === 5){
//     console.log("matched")
// }else{
//     console.log("not matched")
// }
// ans- matched


// let i=1
// while(i <= 5){
//     console.log(i++)
// }
// ans- 1 2 3 4 5

// let a=3 
// let b=6
// console.log(++a + b++)
// ans- 4+6=10

// let x=10
// console.log(--x + x--)
// ans- 9+9=18

// let x= 5
// console.log(++x + x++ + x)
// ans- 6+6+7=19


// let a =10
// console.log(a--, --a , a)
// ans- 10,8,8


// let x= 5
// console.log(x++ + ++x + x-- + --x)
// ans- 5+7+7+5=24


// let a= 5
// console.log(a++, ++a, a)
// 5,7,7 is ans

// QUEST- write a function getgrade that 
// takes a students marks (0 to 100)
// return the grade based on this logic
// 90-100 => A+
// 80-89 => A
// 70-79 => B
// 60-69 => C
// 50-59 => D
// 0-49 => Fail

function getGrade(marks){
    if(marks >=90 && marks <=100){
        return "A+";
    } else if(marks >=80 && marks <=89){
        return "A";
    }else if(marks >=70 && marks <=79){
        return "B";
    }else if(marks >=60 && marks <=69){
        return "C";

    }else if(marks >=33 && marks <=59){
        return "D";
    }else{
        return "Fail";
    }
}
// getGrade(57)




// +++++++++++++++  LOOP +++++++++++++++++++++

// for,while, do-while
// break,continue
// for-of,forEach 

// while loop => kaha se jana h and kab rukna and kaise jana h 
// for loop => kaha se jana h and  kaha tk jana h kaise jana h

// for(start; end; change){

// }


// for(let i=5; i<100; i++){
// console.log(i)
// }


// start
// while(end){
//     code
// change
// }

// let i=5
// while(i<33){
//     console.log(i);
// i++;
// }

//   do while loop  +++++++++++

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5);

// for(let i=7; i<55; i++){
// if(i===35){
// break;
// }
// }

// for(let a=44; a<200; a++){
// if(a===65){
// continue;
// }
// }



// Ques-1 print numbers from 100 to 50 using a while loop

// for(let i =100;i>49;i--){
// console.log(i)
// }

// let i=100
// while (i>44){
// console.log(i)
// i--
// }

// QUEST-3 print all even numbers from 1 to 100 using a for loop
// for(let i =1; i<=100; i++){
// if(i%2===0){
// console.log(i)
// }
// }

// QUEST-4 print all odd numbers from 1 to 100 using a while loop

// for(let i =1; i<=100; i++){
// if(i%2!==0){
// console.log(i)
// }
// }

// let i=1
// while(i<=100){
// if(i%2!==0){
// console.log(i)
// }
// i++
// }


// QUEST- 5  print the multiplication table of 5
// for(let i =1; i<10; i++){
// console.log(`5 * ${i} =${5*i}`)
// }

// QUEST- find the sum of numbers from 1 to 100
// let sum=0
// for(let i =1; i<101; i++){
// sum=sum+i
// }
// console.log(sum)

// QUEST-7 print all numbers between 1 to 50 that are divisible by 3.

// for( let a=1; a<51; a++){
// if(a%3===0){
// console.log(a)
// }
// }

// ++++++++++++++++++++ FUNCTIONS ++++++++++++++++++++++++

// function aime(){}
// let abc =()=>{}
// let xyz=function(){}

// rest  ... => jb ye function ke parameter mai use hota h to ye baki ke sare parameter space mai lge to bo rest h
// spread  ... => agr bo array ya object h to bo spread hoga

// Xxa=> 
//     function abcd (...value1){
// console.log(value1)
// }    yaha use hua h rest operator
// abcd(1,2,3,4,5,6,7,8,9,10)

// highter order function [HOF]=> bo function hota h jo ki return kre function ya fir accept kre ek function apne parameter mai

// function abcd(value){}

// function xyz(){
//     return function(){console.log('hello')}
// }
// xyz()()

// pure and impure function 
// pure=> jo bahr ki value ko change nhi krte h 
// impure=> jo bhr ki value ko change kr de

//  ++++++++++++++++++  CLOSURES  +++++++++++++++++
// ek fnc jo return kre ek aur fnc aur return hone wala function hamesha use krega parent fnc ka koi variable
// function(){
//     let a =23;
//     return function(){
// console.log(a)
//     }
// }

// +++++++++++++++++++++++++ IIFE +++++++++++
// (immediately invoked function expression)

// (function (){

// }) () ye iife h

// +++++++++++++++ ARRAY ++++++++++++++++

// array methods=> PushManager,pop,shift,unshift,splice,slice,reverse,sort,map,filter,reduce,find,every
// let arr=[1,2,3,4,5,6]
// arr.push(15) //last mai value ko dalne ke liye

// arr.pop() last se value ko hatane ke liye

// arr.shift() suruaat se value ko hatane ke liye

// arr.unshift(9) suruaat me value ko add krta h

// arr.splice(2,1) beech se value ko hatane ke liye index btao phle or fir kitni value hatani h bo btao

// let abc=[2,4,6,8,10,12,14];
// let newabc = abc.slice(0,4);  //kaha se hatana h kaha tak hatana h
// esame main array change nhi hoga bo baisa hi rhega apako new array de dega 

// reverse=> array ko reverse kr deta h
// ye main array ko change kr deta h

// +++++++++++ sort ++++++++++++
// sort ek function accept krtea h 

// let xyz=[12,51,6,45,65,11,2,7]
// let srt= xyz.sort(
//     function(a,b){
// return a-b
//     }
// ) // ye assending order me kr dega agr b-a kiya hota to disending order kr deta 


// ++++++++++++++++ MAP ++++++++++++++++
// map , filter ,reduce bhi fucnction accept krt

// map tb use krna h jb apako ek new array banana h pichle array ke data ke basic pr
 
// let bcd=[1,2,6,5,3,4,0]
// let newans=bcd.map(function(value){
//     return 45;
// })

// +++++++++++++ FILTER ++++++++++++++++
// kuch value new array ke andr jayegi return krna jaruri h

// let efg=[44,55,22,33,10,77,45]
// let fil=efg.filter(function(value){
//     if(value>45) return true
// })

// +++++++++++ reduce ++++++++++++
// eska use single value bnana h 

// let redu=[1,2,1,5,5,4,8]
// let accu=redu.reduce(function(accumulator,value){
// return accumulator+2
// },0)

// ++++++++ find ++++++++++

let are=[77,5,4,4,6,9,8,2]
// let fid=are.find(function(value){
//     return value===4
// })  // yaha bo banda return hoga jiski value 4 hogi bo phla bala 


// +++++++++++ some +++++++++
// let som=are.some(function(value){
//     return value>9
// }) // ans - true ya false me ata h 

// some dekhta h ki koi ek value condition ko pass krta h ya nhi

// +++++++++++++++ EVERY +++++++++
// yah saari value ko dekhta h ki condition paas h ya nhi 

//  let eve=are.every(function(value){
// return value>1
// })
// agr ek bhi banda fail hua to ans- false milega

// ++++++++++++++++++ SPREAD OPERATOR +++++++++++
// let spr=[44,55,2,6,99,555,44]
// let spr2=[...spr]  // yaha spread oper. use hua h 
// yaha copy bn jayegi esase ye hoga agr ap spr2 mai koi change krege to bo spr mai change nhi hoga

// +++++++++++++++ QUESTIONS  +++++++++++++++
// let fruit =["mango","banana","orange"]
// console.log(fruit[1])

// ques=> insert "red" and "blue" at index 1 in this array
// let yt=["green","yellow"]
// yt.splice(1,0,"red","blue")

// Q- extract only the middle 3 element from this array
// let sli=[5,5,9,6,5,3]
// let newsli=sli.slice(1,4)
// console.log(newsli)

// sort this array alphabeticlly and then reverse it

// let names=["kanchan","aryan","sachin","kaushal","anjali","sulekha"]
// let friends=names.sort().reverse()
// console.log(friends)

// Q- use map() to square each number
// let mp=[5,6,2,3,8]
// let mps=mp.map(function(value){
// return value*2
// })

// Q- use filter () to keep number greater than 10
let fit=[8,9,10,22,35,41,2,14,77]
// let newfit=fit.filter(function(val){
//     if(val>10) return val
// })

// ek or tarika
// let newfit=fit.filter(function(val){ return val>10})

// Q- use reduce() to find the sum of this array
// let mtc=[20,65,54,33,88]
// let sum=mtc.reduce(function(acc,val){
// return acc+val
// },0)

// Q- use find to get the first number less than 10
let less=[55,10,20,30,4,1,2,7]
// let kamvalue=less.find(function(val){
// if(val<10) return val
// })

// dusra tarika
// let newfind=less.find(function(val){
//     return val<10
// })

//Q- use some() to check if any student has scored has below 35

let wx=[11,33,56,55,20,32]
// let scor=wx.some(function(val){
// return val<35
// })

// +++++++++++++++++++ OBJECT ++++++++++++++
// let obj={
//     name:"kanchan",
//     age:21,
//     email:"kanchan@kan.com",
// };
// for(let key in obj){
// console.log(key,obj[key]);  yaha object ki key or value ko access kiya gya h
// }

// let obj={
//     name:"kanchan",
//     age:"21",
//     address:{
//         city:"mainpuri"
//     }
// }
// let obj2=JSON.parse(JSON.stringify(obj))


// destructure the key "first-name" as a called firstName.

// const user={
//     "first-name":"kanchan",
// }
// let{"first-name":firstName}=user;  // first-name bhr a gya

// yaha variable banaya h firstName ka


// +++++++++++++++++ classes  questions ++++++++++++++++

// let age= prompt("user ki age btao")
// if(age===null){
// console.log("you cancelled it.");

// }else{
//     if(age.trim() === ""){
// console.error("please write something...")
//     }else{
//         age=Number(age)
//         if(isNaN(age)){
// console.log("please enter a number...");

//         }else{
//             console.log(`your age is ${age}`);
            
//         }
//     } 
    
// }

// Q- allow  only 3 attempt to enter correct password if user gets it right early stop. if not "Account locked"

// let pass="kanchan@121"
// let attemt=0
// let accountOpen=false

// let password=prompt("pass. do ")
// attemt++
// if(password===pass){
// accountOpen=true
// }

// while(password!== pass){
// if(attemt===3){
// console.error("account locked");
// break
// }
// let pass=prompt("pass. btao")
// if(password===pass) accountOpen= true;
// attemt++
// }
// if(accountOpen===true) console.log("account opened");

// let attemt =0
// let pass="kanchan1234"
// let userPassword=prompt("password de do ")
// attemt++
// while (attemt<3 && pass!== userPassword) {
//  let userPassword=prompt("password de do ")
//     attemt++
// }
// if (attemt===3 && pass !== userPassword) {
//     console.error("account locked");
    
// }else{
//     console.log("done");
    
// }


// ++++++++++++++ COntinue+++++++++++

// for(let i= 1; i<10; i++){
// if(i===5) continue;
// console.log(i);

// }     // yaha 5 print nhi hoga 


//++++++++++++ functions Que. ++++++++++++++++++

// function name(parameter aate h ) {
    
// }
// name(arguments yaha aate h)

// function fnt (age,name){
//     console.log(arguments[1]);
    
// }
// fnt(12,"kanchan")


// anonymous function bo function h jiska koi name nhi hota h 
// Higher order function ek aisa function jo return kre ek or function ko ya bo function accept kre ek or parameter me
// function abc(){ 
//     return function(){

//     }
// } // yaha jo bhr bala function h bo HOF  h

//  ek tarika or h HOF ka +++++++++
// function xyz(a){

// }
// xyz(function () {
    
// })  ye bhi HOF bn gya h xyz hof h or jo argument me function bheja h bo callback function h

//     +++++++++++++++++ FIRST CLASS FUNCTION  ++++++++++++++++

// jaha hm argument likh skte h baha hm function likh skte h
// jaise

// function wx (name,age) {
    
// }
// wx(function () {
    
// },23)

// ++++++++++++++++PURE AND IMPURE FUNCTION +++++++++++++++

// pure function ek aisa function jo same input and same output de
// let y=23;
// function sdf(val) {
//     console.log(val+2);
    
// }
// sdf(12);
// sdf(12);
// sdf(12);
// sdf(12);  // pure function h ye


// let b=22
// function zx(val) {
//   b=Math.random()+val;
//  console.log(b);
 
// }
// zx(11)  // impure function


// +++++++++++++++++++CLOSURE +++++++++++++++++++++

// ek aisa function jo return kre ek or function but returing function jo h bo parent function ka koi variable use kre
// function abcd() {
//     let d=23;
//     return function(){
//         console.log(d);
        
//     }
// }  // closure hof bhi hote h

//  +++++++++++++++ARRAY DESTRUCTURING++++++++++++++++++

// let arr=[1,2,3,4,5,6,8,7]
// let [a,b]=arr;

// ++++++++++++ FILTER ++++++++++++
// let b=[2,0,3,5,6,4,1,2,0,5,4]
// let b2=b.filter(function(val){
//     return val<4
// })

// filter ek nya array bnata h mgr purane array mai koi change nhi krta h

// +++++++++ spred operator++++++++
// let haha=[44,55,62,2,3,1,5,5]
// let hahaha=[...haha] // ye h spread ope.

// ++++++ forEach ++++++++++++
// foreach array pr hi chlta h

// let each=[5,6,5,6,5,3,5]
// each.forEach(function(val){
// console.log(val);

// })

