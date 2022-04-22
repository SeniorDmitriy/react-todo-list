import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handlerCompleteClick = () => {
		dispatch(
			toggleComplete({ id: id, completed: !completed })
		);
	};

	return (
		<li className={`list-group-item d-flex justify-content-between ${completed && 'list-group-item-success'}`}>
			<label className='d-flex justify-content-between w-100'>
				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={completed}
					onChange = {handlerCompleteClick}
					></input>
					{title}
				</span>
			</label>
			<button className='btn btn-danger'>Delete</button>
		</li>
	);
};

export default TodoItem;
