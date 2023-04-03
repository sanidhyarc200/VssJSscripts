let a1 = 10;
a1 = 20;
// a1 = "nana"
console.log(a1);



function addNumsV1(a: number, b: number): number {
    return a + b;
  }
  
  const results = addNumsV1(10, 12);

  let a3: number | string = "10";
let a4: string = "Ankit";
let a5: boolean = true;
let colour = "red";
var a6: null = null;
let a7: string | number = 10;
let a8: string | boolean = "ankit";
const a9: number[] = [10, 1, 11, 10];
const a10: string[] = ["ankit", "mukesh", "10", "oviya"];
const a11:null | number = 0;


type State = "created" | "started" | "pending" | "completed";
const currentState: State = "pending";

type Gender = "male" | "female" | "open";
const gender: Gender = "male";

type game = "won"|"lost"|"draw";
const game : game = "won";
//console.log(color);

type Profile = {
    name: string;
    city: string;
    pincode: number;
  };
  
  interface IProfile {
    name: string;
    city: string;
    pincode: number;
  }
  
  // name, city, pincode
  const profile: IProfile = {
    name: "ankit",
    city: "morena",
    pincode: 476001,
  };
  

  