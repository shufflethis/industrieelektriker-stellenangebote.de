import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, Cpu, Factory, Battery } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';

const FEATURED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Industrieelektriker (m/w/d)',
    company: 'zeitkraft Gesellschaft für Personalservice mbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-04'
  },
  {
    id: '2',
    title: 'Industrieelektriker (m/w/d)',
    company: 'JobImpulse Süd GmbH Mainz',
    location: 'Klein-Winternheim',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Neo Temp GmbH',
    location: 'Cottbus',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Neo Temp GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '5',
    title: 'Industrieelektriker (m/w/d)',
    company: 'PersEH GmbH',
    location: 'Aachen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '6',
    title: 'Industrieelektriker (m/w/d)',
    company: 'teamkompetent GmbH Personaldienstleistungen',
    location: 'Bad Wörishofen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '7',
    title: 'Industrieelektriker (m/w/d)',
    company: 'JobImpulse Nord GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '8',
    title: 'Industrieelektriker (m/w/d)',
    company: 'DEKRA Arbeit GmbH',
    location: 'Lünen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '9',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Orizon GmbH, Niederlassung Osnabrück',
    location: 'Melle, Wiehengeb',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '10',
    title: 'Industrieelektriker (m/w/d)',
    company: 'König Fachpersonal GmbH & Co KG, Niederlassung Erfurt',
    location: 'Erfurt',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '11',
    title: 'Industrieelektriker (m/w/d)',
    company: 'zeitkraft Gesellschaft für Personalservice mbH',
    location: 'Landsberg am Lech',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '12',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Pirmasens',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-01'
  },
  {
    id: '13',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Finnentrop',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-01'
  },
  {
    id: '14',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Kassel, Hessen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '15',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Buchholz in der Nordheide',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '16',
    title: 'Industrieelektriker (m/w/d)',
    company: 'RÜBSAM Fachkräfte GmbH & Co. KG',
    location: 'Salzgitter',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '17',
    title: 'Industrieelektriker (m/w/d)',
    company: 'PerSe-Partner GmbH',
    location: 'Remscheid',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '18',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Bodelshausen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '19',
    title: 'Industrieelektriker (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Salzgitter',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '20',
    title: 'Industrieelektriker/in (m/w/d)',
    company: 'Adecco Personaldienstleistungen GmbH',
    location: 'Norderstedt',
    type: 'Vollzeit',
    description: 'Industrieelektriker/in (m/w/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '21',
    title: 'Industrieelektriker (m/w/d)',
    company: 'I. K.Hofmann GmbH',
    location: 'Eisenhüttenstadt',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '22',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Personal Service PSH Magdeburg GmbH',
    location: 'Magdeburg',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '23',
    title: 'Industrieelektriker (m/w/d)',
    company: 'JobImpulse Süd GmbH Mainz',
    location: 'Wiesbaden',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '24',
    title: 'Industrieelektriker (m/w/d)',
    company: 'GeAT mbH Aschersleben',
    location: 'Sangerhausen',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-02-25'
  },
  {
    id: '25',
    title: 'Industrieelektriker/in (m/w/d)',
    company: 'Praxis Personalmanagement GmbH',
    location: 'Rostock',
    type: 'Vollzeit',
    description: 'Industrieelektriker/in (m/w/d)',
    postedAt: '2026-02-23'
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pb-20">

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/id/1073/1920/1080"
            alt="Industrieelektrik Hintergrund"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Wir vernetzen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-500">Spannung</span> mit Zukunft.
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Deutschlands führende Jobbörse für Industrieelektriker, Elektroniker und Mechatroniker. Finden Sie Top-Arbeitgeber in der Industrie 4.0.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jobs" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/25">
                Jobs finden <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/arbeitgeber" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-400 text-base font-bold rounded-lg text-white bg-white/10 hover:bg-white/20 hover:border-white transition-all backdrop-blur-sm">
                Für Arbeitgeber
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-brand-600 mb-2">1.500+</div>
              <div className="text-slate-600 font-medium">Aktuelle Stellen</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand-600 mb-2">450+</div>
              <div className="text-slate-600 font-medium">Partner-Firmen</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand-600 mb-2">Ø 58k</div>
              <div className="text-slate-600 font-medium">Jahresgehalt</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand-600 mb-2">24h</div>
              <div className="text-slate-600 font-medium">Vermittlungszeit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Beliebte Tätigkeitsfelder</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Wir decken das gesamte Spektrum der Elektrotechnik ab. Egal ob Wartung, Neubau oder Programmierung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group">
            <div className="h-14 w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
              <Factory className="h-8 w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Betriebstechnik</h3>
            <p className="text-slate-600 mb-4">
              Wartung, Instandhaltung und Reparatur von industriellen Produktionsanlagen und Versorgungssystemen.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group">
            <div className="h-14 w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
              <Cpu className="h-8 w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Automatisierung</h3>
            <p className="text-slate-600 mb-4">
              SPS-Programmierung (Siemens, Beckhoff), Robotertechnik und Prozessleittechnik.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group">
            <div className="h-14 w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
              <Battery className="h-8 w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Energie & Gebäude</h3>
            <p className="text-slate-600 mb-4">
              Schaltschrankbau, Mittelspannungsschaltanlagen und industrielle Gebäudeinstallation.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Top Stellenangebote</h2>
              <p className="text-slate-500 mt-2">Die aktuellsten Vakanzen unserer Premium-Partner</p>
            </div>
            <Link to="/jobs" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-800">
              Alle Angebote <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {FEATURED_JOBS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/jobs" className="btn btn-primary w-full justify-center">
              Alle Jobs anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* GEO Content Section - High Value Text Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-2xl shadow-sm border border-slate-100">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Karriere in der Industrieelektrik: Ein Zukunftsmarkt</h2>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Die Industrieelektrik bildet das Rückgrat der deutschen Wirtschaft. In Zeiten von Industrie 4.0, Energiewende und zunehmender Automatisierung sind Fachkräfte gefragter denn je.
            <strong>Elektroniker für Betriebstechnik</strong> und <strong>Automatisierungstechniker</strong> gehören zu den Berufsgruppen mit der höchsten Arbeitsplatzsicherheit und überdurchschnittlichen Gehaltssteigerungen.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Was macht ein Industrieelektriker?</h3>
          <p className="text-slate-700 mb-4">
            Ein Industrieelektriker ist spezialisiert auf elektrische Systeme in industriellen Anlagen. Zu den Kernaufgaben gehören:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li><strong>Installation:</strong> Montage und Anschluss elektrischer Betriebsmittel.</li>
            <li><strong>Wartung:</strong> Regelmäßige Prüfung und Instandhaltung nach DGUV V3.</li>
            <li><strong>Fehlersuche:</strong> Diagnose und Behebung von Störungen in komplexen Produktionsstraßen.</li>
            <li><strong>Modernisierung:</strong> Retrofitting alter Anlagen auf neue Steuerungsstandards.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Häufige Fragen (FAQ)</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Wie hoch ist das Gehalt als Industrieelektriker?</h4>
              <p className="text-slate-700">
                Das Einstiegsgehalt liegt in Deutschland typischerweise zwischen <strong>38.000€ und 45.000€</strong> brutto jährlich.
                Mit Berufserfahrung und Spezialisierung (z.B. SPS-Technik) sind Gehälter bis zu <strong>70.000€</strong> (oft inkl. Schichtzulagen) in der Automobil- oder Chemieindustrie üblich.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Welche Qualifikationen brauche ich?</h4>
              <p className="text-slate-700">
                Voraussetzung ist in der Regel eine abgeschlossene Berufsausbildung als Elektroniker für Betriebstechnik, Mechatroniker, Industrieelektriker oder eine vergleichbare Qualifikation.
                Zusatzqualifikationen wie der "SPS-Techniker" oder der "Meister" erhöhen die Karrierechancen signifikant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für den nächsten Karriereschritt?</h2>
            <p className="text-brand-100 text-lg max-w-xl">
              Erstellen Sie jetzt Ihr Profil und lassen Sie sich von Top-Unternehmen finden. Oder nutzen Sie unsere KI-Tools zur Optimierung Ihres Lebenslaufs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/jobs" className="bg-white text-brand-700 hover:bg-brand-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-center">
              Jetzt Jobs ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;