import React from 'react';
import { MapPin, Building, Clock, Euro } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-brand-100">
              {job.type}
            </span>
            <span className="text-slate-400 text-xs">Vor {job.postedAt}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1">
            {job.title}
          </h3>
          <div className="flex items-center text-slate-600 font-medium mb-4">
            <Building className="h-4 w-4 mr-1.5" />
            {job.company}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-500 mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1.5 text-slate-400" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Euro className="h-4 w-4 mr-1.5 text-slate-400" />
              {job.salary}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5 text-slate-400" />
              Sofortiger Einstieg
            </div>
          </div>
          
          <p className="text-slate-600 text-sm line-clamp-2 mb-4">
            {job.description}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <button className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm">
            Bewerben
          </button>
        </div>
      </div>
    </div>
  );
};