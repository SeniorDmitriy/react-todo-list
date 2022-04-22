import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
// import TodoItem from './components/TodoItem';

const App = () => {
	const todoItems = useSelector((state) => 
		state.todos.filter((todo)=> todo)
	);

	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List: {todoItems.length}</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
