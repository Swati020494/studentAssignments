const getDataReducer=(state={
	jsondataAllfoodGroup:[],
	jsondataAllfoodItem:[],
    selectedTab:0
},action)=>{
    console.log("action.type", action.type);
	switch(action.type){
    case "GET_DATA_FOOD_ITEM_FULFILLED":

            state={
        ...state,
        jsondataAllfoodItem:action.payload
    };
    break;

    case "GET_DATA_FOOD_GROUP_FULFILLED":
            console.log("Action -->", action.payload);
            state = {
            ...state,
            jsondataAllfoodGroup:action.payload
        }
        break;
        case "SET_DATA_FOOD_GROUP_ID":
            state = {
            ...state,
            selectedTab:action.payload
        }
            console.log("id", state.selectedTab);
        break;
}
return state;
};
 export default getDataReducer;