"use strict"
function Order(mealName,mealPrice,mealImage){
this.mealName=mealName;
this.mealPrice=mealPrice;
this.mealImage=mealImage;
}

let orders=[];

const orderForm= document.getElementById("orderForm");

orderForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name= document.getElementById("mealName").value;
    const price= document.getElementById("mealPrice").value;
    const image = document.getElementById("mealImage").value;

    const newOrder=new Order(name,price,image);
    orders.push(newOrder);
    setLocalStorage();
    displayOrder(newOrder);
    orderForm.reset();
});

const orderList = document.getElementById("orderList");
 
function displayOrder (order){
const li = document.createElement("li");
li.className="order";
li.innerHTML= `
     <h3>${order.mealName}</h3>
     <p>Price: $${order.mealPrice}</p>
     <img src="${order.mealImage}" width="100">
`;
orderList.appendChild(li);
}
function setLocalStorage(){
localStorage.setItem("orders",JSON.stringify(orders));
}
function getLocalStorage(){
const saved = localStorage.getItem("orders");
if (saved){
    orders =JSON.parse(saved);
    orders.forEach(displayOrder);
}
}
getLocalStorage();
const clearBtn= document.getElementById("clearOrders");

clearBtn.addEventListener("click",()=>{

localStorage.removeItem("orders")
orders=[];
orderList.innerHTML="";
});