const userReducer=(state={
    foodInCart:[],
     count:0
  }, action)=>{
switch(action.type){
    case "ADD_TO_CART":
   var foodInCart=state.foodInCart;
   console.log("foodInCart",foodInCart)
    var index=-1;
    
    if(state.count>=1){
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload.food_item_id){
                index=i;
                break;
            }
    }}
    if(index!=-1)
        foodInCart[index].quantity=foodInCart[index].quantity+1;
    else{
        var newItem={
            item:action.payload,
            quantity:1
        }
       foodInCart.push(newItem);
    }
     state={ 
        ...state,
        foodInCart:foodInCart,
        count:state.count+1
    }; 
   
    break;
    case "ADD_TO_QUANTITY":
   var foodInCart=state.foodInCart;
    var index=-1;
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload ){
            index=i;
            break;
            }
    }
    if(index!=-1)
        foodInCart[index].quantity=foodInCart[index].quantity+1;
     state={ 
        ...state,
        foodInCart:foodInCart,
        count:state.count+1
    }; 
    
    break;
    case "DELETE_FROM_CART":
    var foodInCart=state.foodInCart;
    var index=-1;
    for (var i = 0; i < foodInCart.length; i++) {
        if(foodInCart[i].item.food_item_id==action.payload)
            {
                index=i;
                break;
            }
    }
    if(index!=-1)
    {
        if (foodInCart[index].quantity>1)
            foodInCart[index].quantity--;
        else if (foodInCart[index].quantity==1)
           foodInCart.splice(index,1);
           state={ 
            ...state,
            foodInCart:foodInCart,
            count:state.count-1
        }
    }
    break;
}
return state;
};
 export  default userReducer;