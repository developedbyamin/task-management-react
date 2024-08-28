import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Task } from '../redux/types';
import Calendar from 'react-calendar';

const CalendarView: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const getTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dayTasks = tasks.filter((task: Task) => new Date(task.date).toDateString() === date.toDateString());
      return dayTasks.map((task) => <p key={task.id}>{task.title}</p>);
    }
    return null;
  };

  return <Calendar tileContent={getTileContent} />;
};

export default CalendarView;
