export function addToCart(item){
	return{
		type:"ADD_TO_CART",
		payload:item
	};
}

export function deleteFromCart(id){
	return{
		type:"DELETE_FROM_CART",
		payload:id
	};
}

export function addToQuantity(id){
	return{
		type:"ADD_TO_QUANTITY",
		payload:id
	};
}
