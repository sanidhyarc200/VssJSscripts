// var a=/x/y,
// b = new RegExp(a,"g");
// console.log(a.test("xy"));
// console.log(b.test("xy"));
// console.log(a.test("XY"));
// console.log(b.test("XY"));





// let list = "mark, Anita, JOHN, Mary, BOB, Ben";
// let emp1 = list.replace("Anita", "Ben2");
// let emp2 = list.replace("john", "Bob2");
// let emp3 = list.replace("JOHN", "ANITA");
// let emp4 = list.replace("MARY", "MARK");

// console.log(emp1);
// console.log(emp2);
// console.log(emp3);
// console.log(emp4);




// var ha_Obj = {
//     ha_prop : "Hello",
//     ha_met: function(a,b)
//     {
//         console.log(a + this.ha_prop + b);    
//     }
// };
// ha_Obj.ha_met("<",">");
// var h_obj2 = {
//     ha_prop : "Hel"
// };

// ha_Obj.ha_met.call(h_obj2 , "<",">");
// ha_Obj.ha_met.apply(h_obj2 , ["<",">"]);



// quest 4

// const emps =[
//     {type : "Mark" , joined : 2003},
//     {type : "anita" , joined : 2001},
//     {type : "JOHN" , joined : 2010},
//     {type : "Mary" , joined : 2010},
//     {type : "BOB" , joined : 2009},
//     {type : "ben" , joined : 2007},
//     {type : "Mary" , joined : 2020},
// ];
// console.log(emps);
// emps.sort(function(a,b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x<y) {return -1; }
//     if (x>y) {return 1; }
//     return 0;
// });

// console.log(emps);
const arr = [1,5,5,4,6]
const newarr = arr.filter((item) => {
    return item%3 === 0 ? true : false ;
})
console.log(newarr);

const newarr1 = arr.map((item) =>{
    return item*3;
})
console.log(newarr1);


const newarr2  = {...arr}
console.log(newarr2);


