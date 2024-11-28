'use client';

import React from 'react';
import TaskInput from './TaskInput';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

type Props = {};

export default function TaskManager({}: Props) {
	const allTasks = useQuery(api.tasks.get);
	return (
		<ul className='flex flex-col justify-center items-start gap-2 text-sm'>
			{allTasks &&
				allTasks.map((task) => (
					<Task
						key={uuidv4()}
						task={task}
					/>
				))}
			<TaskInput key={uuidv4()} />
			<li className='text-accent font-light pointer-events-none'>
				Save and see your changes instantly.
			</li>
		</ul>
	);
}
