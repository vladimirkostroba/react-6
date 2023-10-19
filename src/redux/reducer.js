import { statusFilters } from "./constans";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};
// Используем initialState как значение состояния по умолчанию
export const rootReducer = (state = initialState, action) => {
  // Редюсер различает экшены по значению свойства type
  switch (action.type) {
    case "tasks/addTask":
        return {...state,tasks:[...state.tasks, action.payload]};

    case "tasks/deleteTask":
        return{
            ...state,
            task:state.tasks.filter(task => task.id !== action.payload)
        };

     case "tasks/toggleCompleted":
        return{
            ...state,
            tasks:state.tasks.map(task => {
                if(task.id !== action.payload){
                    return task;
                }

                return {
                    ...task,
                    completed: !task.completed,
                }
            })
        }

        case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    // В зависимости от типа экшена будет выполняться разная логика
    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
      return state;
  }
};