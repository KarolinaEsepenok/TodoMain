import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {TaskType} from "../Todolist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLISTS/Task',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
args:{
  changeTaskStatus: action('changeTaskStatus'),
  changeTaskTitle: action('changeTaskTitle'),
  removeTask:action('removeTask'),
  todolistId: '1'
}
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDone.args = {
    task: {id:'ggg',isDone:true, title:'JS'},

};
export const TaskIsNotDone = Template.bind({});
TaskIsNotDone.args = {
  task: {id:'ggggggg',isDone:false, title:'CSS'},

};
