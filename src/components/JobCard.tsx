import React from 'react';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import './JobCard.css';
import type { Job } from '../utils/types';

type JobCardProps = {
  job: Job;
  onTogglePin: (id: number) => void;
};

const JobCard: React.FC<JobCardProps> = ({ job, onTogglePin }) => {
  return (
    <Card className={`job-card ${job.pinned ? 'pinned' : ''}`}>
      <CardContent>
        <div className="job-card-header">
          <Typography variant="h6">{job.title}</Typography>
          <IconButton onClick={() => onTogglePin(job.id)}>
            {job.pinned ? (
              <PushPinIcon color="primary" />
            ) : (
              <PushPinOutlinedIcon />
            )}
          </IconButton>
        </div>
        <Typography color="textSecondary">{job.company}</Typography>
        <Typography variant="body2">{job.location}</Typography>
        <span className={`status-tag ${job.status}`}>{job.status}</span>
      </CardContent>
    </Card>
  );
};

export default JobCard;
