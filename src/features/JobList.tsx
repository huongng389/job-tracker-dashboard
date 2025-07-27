import JobCard from '../components/JobCard';
import type { Job } from '../utils/types';

type JobListProps = {
  jobs: Job[];
  ontogglePin: (id: number) => void;
};

const JobList: React.FC<JobListProps> = ({ jobs, ontogglePin }) => {
  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onTogglePin={ontogglePin} />
      ))}
    </div>
  );
};
export default JobList;
