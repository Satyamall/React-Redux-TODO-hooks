
const initstate={
    todo:[],
    isLoading: true,
    isError: false
}

const reducer=(state=initstate,{type,payload})=>{
     switch(type){
      case "GET_TODO_REQUEST": {
        return {
          ...state,
          isLoading: true
        };
      }
      case "GET_TODO_SUCCESS": {
        return {
          ...state,
          todo: payload.todo,
          isLoading: false
        };
      }
      case "GET_TODO_FAILURE": {
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      }
  
        case "ADD_TODO":{
             return {
                 ...state,
                 todo: [...state.todo,payload]
             };
            }
        case "REMOVE_TODO_ITEM": {
                // TODO
                return {
                  ...state,
                  todo: state.todo.filter((item) => item.id !== payload?.id)
                };
              }
        case "TOGGLE_TODO_STATUS": {
                // TODO
                return {
                  ...state,
                  todo: 
                    state.todo.id === payload.id
                      ? { ...state.todo, status: !state.todo.status }
                      : state.todo
                };
              }
        default: 
           return state
     }
      
}

export {reducer}