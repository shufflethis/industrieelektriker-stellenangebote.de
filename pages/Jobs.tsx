import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Siemens Energy',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '55k - 65k €',
    description: 'Wartung und Instandhaltung von Produktionsanlagen, Fehlersuche an SPS-Steuerungen.',
    postedAt: '2 Tagen'
  },
  {
    id: '2',
    title: 'Elektroniker Automatisierungstechnik',
    company: 'BASF SE',
    location: 'Ludwigshafen',
    type: 'Vollzeit',
    salary: '62k - 75k €',
    description: 'Betreuung der Prozessleittechnik in einem Chemiepark. Erfahrung mit Ex-Schutz erforderlich.',
    postedAt: '1 Tag'
  },
  {
    id: '3',
    title: 'Servicetechniker International',
    company: 'Krones AG',
    location: 'Regensburg / Weltweit',
    type: 'Reisetätigkeit',
    salary: '70k - 90k €',
    description: 'Inbetriebnahme von Abfüllanlagen weltweit. Hohe Reisebereitschaft vorausgesetzt.',
    postedAt: '3 Tagen'
  },
  {
    id: '4',
    title: 'Elektromeister Instandhaltung',
    company: 'BMW Group',
    location: 'München',
    type: 'Führungskraft',
    salary: '80k+ €',
    description: 'Leitung eines Instandhaltungsteams im Karosseriebau. Verantwortung für Verfügbarkeit.',
    postedAt: '1 Woche'
  },
  {
    id: '5',
    title: 'Mechatroniker (m/w/d)',
    company: 'Deutsche Bahn',
    location: 'Frankfurt am Main',
    type: 'Schichtdienst',
    salary: '42k - 50k €',
    description: 'Instandhaltung von ICE-Zügen. Fehlersuche an Türsystemen, Klimaanlagen und Antrieb.',
    postedAt: 'Gestern'
  }
];

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Aktuelle Stellenangebote</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Finden Sie Ihren Traumjob in der Industrieelektrik. Wir prüfen jedes Angebot auf Qualität und Aktualität.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Jobtitel, Firma oder Stichwort"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:col-span-4 relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Ort oder PLZ"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-3">
              <button className="w-full h-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Filter className="h-5 w-5" />
                Filtern
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Karrierelevel</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" />
                  <span className="ml-2 text-slate-700 text-sm">Berufseinstieg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" defaultChecked />
                  <span className="ml-2 text-slate-700 text-sm">Fachkraft</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" />
                  <span className="ml-2 text-slate-700 text-sm">Führungskraft</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Anstellungsart</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" defaultChecked />
                  <span className="ml-2 text-slate-700 text-sm">Vollzeit</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" />
                  <span className="ml-2 text-slate-700 text-sm">Teilzeit</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 border-slate-300" />
                  <span className="ml-2 text-slate-700 text-sm">Montage / Reise</span>
                </label>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                <p className="text-slate-500">Keine Jobs gefunden, die Ihrer Suche entsprechen.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;