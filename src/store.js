const NEW_TODO_CHANGED = "NEW_TODO_CHANGED";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO_DONE = "TOGGLE_TODO_DONE";
const REMOVE_TODO = "REMOVE _TODO";
const ALL_DONE = "ALL_DONE";
const STATUS_ALL_DONE = "STATUS_ALL_DONE";

const initialState = {
  activePage: "Todo List",
  newTodo: "",
  allDone: 0,
  todos: [
    { title: "Learn React", done: false },
    { title: "Learn React2", done: false }
  ]
};

export const actions = {
  newTodoChanged(newTodo) {
    return {
      type: NEW_TODO_CHANGED,
      newTodo
    };
  },
  addTodo(todo) {
    return {
      type: ADD_TODO,

      todo
    };
  },
  toggleTodoDone(toggle) {
    return {
      type: TOGGLE_TODO_DONE,
      toggle
    };
  },
  removeTodo(index) {
    return {
      type: REMOVE_TODO,
      index
    };
  },
  allDone() {
    return {
      type: ALL_DONE
    };
  },
  statusAllDone() {
    return {
      type: STATUS_ALL_DONE
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_TODO_CHANGED: {
      return {
        ...state,
        newTodo: action.newTodo
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case TOGGLE_TODO_DONE: {
      const todos = [...state.todos]; // Copy todos array value
      // todos[index] = { ...todos[index] }; // Copy the specific object in the array
      todos[action.toggle.index].done = action.toggle.checked; // update the 'done' property of the object
      return {
        ...state,
        todos
      };
    }
    case REMOVE_TODO: {
      const todos = [...state.todos]; // Copy todos array value
      todos.splice(action.index, 1); // remove from array
      return {
        ...state,
        todos
      };
    }
    case ALL_DONE: {
      let status = true;
      if (state.allDone) {
        status = false;
      }
      const todos = state.todos.map(todo => {
        return {
          ...todo,
          done: status
        };
      });

      return {
        ...state,
        allDone: status,
        todos
      };
    }
    case STATUS_ALL_DONE: {
      let count = 0;
      state.todos.map(todo => {
        if (todo.done) {
          count++;
        }
        return count;
      });
      console.log(count);
      return {
        ...state,
        allDone: count === state.todos.length ? true : false
      };
    }
    default:
      return state;
  }
}
