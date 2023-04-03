// // let a  =  1;
// // a = 4;
// // a = "a";


// // // var a = 4;
// // var b11 = 5;


// let a99 = "sanidhya"

let a43: "ankit" | "rahul" = "rahul";

const state:
  | "order placed"
  | "dispatched"
  | "in transit"
  | "delivered"
  | "cancelled" = "dispatched";

const customerOrder:
  | "order placed"
  | "dispatched"
  | "in transit"
  | "delivered"
  | "cancelled" = "dispatched";

type Order =
  | "order placed"
  | "dispatched"
  | "in transit"
  | "delivered"
  | "cancelled";

type UserName = string | null | undefined;

const newCustomerOrder: Order = "order placed";

const oldUName: string | null | undefined = "Shivam";
const uName: UserName = null;

// Output
const result: "Yes" | "No" = "No";

interface Myobj {
    name: string,
    age: number,
    TimesMarried: number|boolean,

}

const Newobj:Myobj = {
    name: "sanidhya",
    age: 21,
    TimesMarried:0,

}

interface typetaskobj{
    id : number,
    title : string,
    price: number,
    description : string,
    category: string,
    image: string,
    rating: object,
    
}

const Taskobj:typetaskobj = 
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      }
