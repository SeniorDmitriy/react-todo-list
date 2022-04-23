import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import editIcon from '../icons/edit.svg';
import deleteIcon from '../icons/delete.svg';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handlerCompleteClick = () => {
		dispatch(
			toggleComplete({ id: id, completed: !completed })
		);
	};

	const handlerDeleteClick = () => {
		dispatch(deleteTodo({ id: id }));
	};

	const handlerChangeClick = (e) => {
		let userValue = prompt('Enter a new name', '');
		let itemParent = e.currentTarget.parentNode;
		let itemTitle = itemParent.querySelector('.text-title');

		itemTitle.textContent = userValue;
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
				 	<span className='text-title'>
				 		{title}
					</span>
				</span>
			</label>
			<button className='btn btn-danger mr-2' onClick={handlerDeleteClick}>
				<img src={deleteIcon} width={22} height={20} />
			</button>
			<button className='btn btn-success' onClick={handlerChangeClick}>
				<img src={editIcon} width={22} height={20} />
			</button>
		</li>
	);
};

export default TodoItem;
