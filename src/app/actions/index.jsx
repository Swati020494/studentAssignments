let nextTodoId=0
//The difference is scoping. var is scoped to the nearest function block and 
//let is scoped to the nearest enclosing block (both are global if outside any block), which can be smaller than a function block.
export const addTodo=(text)=>{
	return{
		type:'ADD_TODO',
		id:nextTodoId++,
		text
	}
}
export const setVisibilityFilter=(filter)=>{
	return{
		type:'SET_VISIBILITY_FILTER',
		filter
	}
}
export const toggleTodo=(id)=>{
	return{
		type:'TOGGLE_TODO',
		id

	}
}