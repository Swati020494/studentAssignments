import axios from 'axios';
export function getDataFoodGroup(url){
	return{
		type : "GET_DATA_FOOD_GROUP",
		payload:axios.get(url).then((response) => {
				return response.data;
			})
  	};
}

export function getDataFoodItem(url){
	return{
		type:"GET_DATA_FOOD_ITEM",
		payload:(axios.get(url)).then((response)=>{return response.data;}),
	};
}
export function setDataFoodGroupId(id){
	return{
		type:"SET_DATA_FOOD_GROUP_ID",
		payload:id
	};
}