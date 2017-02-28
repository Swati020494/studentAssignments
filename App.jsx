import React from 'react';
import Format from './component/format.jsx'
import OptionTab from './component/tabs.jsx'
import Footer from './component/footer.jsx'
class App extends React.Component {
  constructor(props){
      super(props);
          this.props=props;
          this.state = {
           foodInCart:[{item: [],quantity:0}],
             count:0
  }
  this.setCart=this.setCart.bind(this);
  this.delCart=this.delCart.bind(this);

       }

delCart(id){
  var obj=this;
  var cartArray= this.state.foodInCart;
  console.log("cartArray",cartArray);
        console.log("cartArray",cartArray);
  var flag=0;
  var index=0;
  var i;
  for( i in cartArray)
  {
      index=i;
      if(cartArray[i].item.food_item_id==id)
      {
        flag=1;
        break;
          }
    }
   var qty= cartArray[index].quantity;
    if(flag==1 && qty>1)
          {
            cartArray[index].quantity=qty-1;

          }  
    if(flag==1 && qty==1)
          {
            cartArray.splice(index,1);

          }    
      else{
       console.log("Oops! Something went wrong!!")
        }
  this.setState({
    foodInCart:cartArray,
    count:this.state.count-1
  })
}
setCart(item){
  var obj=this;
  var cartArray= this.state.foodInCart;
if(this.state.count==1)
          cartArray.splice(0,1);
  console.log("cartArray",cartArray);
  var flag=0;
  var index=0;
  var i;
  for( i in cartArray)
  {
      index=i;
      if(cartArray[i].item.food_item_id==item.food_item_id)
      {
        flag=1;
        break;
          }
    }
   var qty= cartArray[index].quantity;
    if(flag==1){
            cartArray[index].quantity=qty+1;
              console.log("qty",qty);
        }    
      else{
        index++;
        var temp={
          item:item,
          quantity:1

        }
        console.log("qty",temp.quantity);
        cartArray.push(temp);
        }
  this.setState({
    foodInCart:cartArray,
    count:this.state.count+1
  })
}
   render() {
      return (
         <div>
         <Format count={this.state.count} cart={this.state.foodInCart} delcart={this.delCart}/>
         <OptionTab setCart={this.setCart}/> 
         <Footer/>
         </div>
      );
   }

}
export default App;