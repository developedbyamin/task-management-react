import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../redux/types';

interface CategoryFilterProps {
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  allTasks: Task[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ setFilteredTasks, allTasks }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    if (category === 'All') {
      setFilteredTasks(allTasks);
    } else {
      setFilteredTasks(allTasks.filter((task) => task.category === category));
    }
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="Personal">Personal</option>
      <option value="Work">Work</option>
      <option value="Projects">Projects</option>
    </select>
  );
};

export default CategoryFilter;
