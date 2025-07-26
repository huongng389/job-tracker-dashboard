import { useState } from 'react';
import './App.css';
import JobCard from './components/JobCard';
import type { Job } from './utils/types';

const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Helsinki, Finland',
    status: 'applied',
    pinned: false,
  },
  {
    id: 2,
    title: 'React Engineer',
    company: 'CodeWorks',
    location: 'Remote',
    status: 'interview',
    pinned: true,
  },
  {
    id: 3,
    title: 'UI Developer',
    company: 'Designify',
    location: 'Tallinn, Estonia',
    status: 'offer',
    pinned: false,
  },
];

function App() {
  const [jobs, setJobs] = useState(mockJobs);

  const handleTogglePin = (id: number) => {
    const updateJobs = jobs.map((job) =>
      job.id === id ? { ...job, pinned: !job.pinned } : job
    );
    setJobs(updateJobs);
  };

  return (
    <>
      <div className="container">
        <h1>Job tracker</h1>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onTogglePin={handleTogglePin} />
        ))}
      </div>
    </>
  );
}

export default App;
