import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query('tasks').collect();
	},
});

export const updateTask = mutation({
	args: {
		id: v.id('tasks'),
		text: v.string(),
		isCompleted: v.boolean(),
	},
	handler: async (ctx, args) => {
		const { id, text, isCompleted } = args;

		await ctx.db.patch(id, { text, isCompleted });
	},
});

export const addNewTask = mutation({
	args: {
		text: v.string(),
		isCompleted: v.boolean(),
	},
	handler: async (ctx, args) => {
		const { text, isCompleted } = args;
		await ctx.db.insert('tasks', { isCompleted, text });
	},
});

export const removeTask = mutation({
	args: { id: v.id('tasks') },
	handler: async (ctx, args) => {
		const { id } = args;
		await ctx.db.delete(id);
	},
});
