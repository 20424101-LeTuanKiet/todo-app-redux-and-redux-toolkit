// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 9, name: 'Write CV', completed: false, priority: 'Medium' },
// };

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    };
};

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    };
};
