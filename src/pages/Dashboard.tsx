import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import CalendarView from '../components/CalendarView';
import CategoryFilter from '../components/CategoryFilter';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Dashboard: React.FC = () => {
  const allTasks = useSelector((state: RootState) => state.tasks.tasks);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  return (
    <div>
      <UserProfile />
      <AddTaskForm />
      <CategoryFilter setFilteredTasks={setFilteredTasks} allTasks={allTasks} />
      <TaskList />
      <CalendarView />
    </div>
  );
};

export default Dashboard;
