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
