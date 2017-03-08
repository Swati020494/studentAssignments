const obj={
count: parseInt(localStorage.getItem('count')),
total: parseInt(localStorage.getItem('total')),
foodInCart: JSON.parse(localStorage.getItem('foodInCart'))
}
function getLocal(){
    if(obj.count==undefined)
        obj.count=0
    if(obj.total==undefined)
        obj.total=0
    if(obj.foodInCart==undefined)
        obj.foodInCart=[]
    console.log("inside getlocal",obj)
    return obj;
}
const userReducer=(state=getLocal(), action)=>{
switch(action.type){
    case "ADD_TO_CART":
   var foodInCart=state.foodInCart;
   console.log("foodInCart",foodInCart)
    var index=-1;
    var price=0;
    if(state.count>=1){
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload.food_item_id){
            index=i;
            break;
        }
    }}
    if(index!=-1){        
        foodInCart[index].quantity=foodInCart[index].quantity+1;
        price=foodInCart[index].item.food_item_price;
    }    
    else{
        var newItem={
            item:action.payload,
            quantity:1
        }
    price=newItem.item.food_item_price;
    foodInCart.push(newItem);
    }
     state={ 
        ...state,
        foodInCart:foodInCart,
        count:state.count+1,
        total:state.total+price
    }; 
   
    break;
    case "ADD_TO_QUANTITY":
   var foodInCart=state.foodInCart;
    var index=-1;
    var price=0;
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload ){
            index=i;
            break;
            }
    }
    if(index!=-1){        
        foodInCart[index].quantity=foodInCart[index].quantity+1;
        price=foodInCart[index].item.food_item_price;
    }  
      state={ 
        ...state,
        foodInCart:foodInCart,
        count:state.count+1,
        total:state.total+price
    };

    break;
    case "DELETE_FROM_CART":
    var foodInCart=state.foodInCart;
    var index=-1; var price=0;
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload)
            {
                index=i;
                break;
            }
    }
    if(index!=-1)
    {
        price=foodInCart[index].item.food_item_price;
        if (foodInCart[index].quantity>1)
            foodInCart[index].quantity--;
        else if (foodInCart[index].quantity==1)
           foodInCart.splice(index,1);
           state={ 
            ...state,
            foodInCart:foodInCart,
            count:state.count-1,
            total:state.total-price
        }
    }
   
   break;
}

return state;
};
 export  default userReducer;