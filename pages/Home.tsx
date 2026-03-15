import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, Cpu, Factory, Battery, MapPin } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';

const FEATURED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    postedAt: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '6',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedAt: '2026-03-15'
  },
  {
    id: '7',
    title: 'INDUSTRIEELEKTRIKER (m/w/d)',
    company: 'AB Technical Services GmbH & Co. KG',
    location: 'Kronau, Baden',
    type: 'Vollzeit',
    description: 'INDUSTRIEELEKTRIKER (m/w/d)',
    postedAt: '2026-03-13'
  },
  {
    id: '8',
    title: 'Industrieelektriker*in',
    company: 'Moog GmbH',
    location: 'Böblingen',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-13'
  },
  {
    id: '9',
    title: 'Industrieelektriker*in',
    company: 'dormakaba Deutschland GmbH',
    location: 'Bühl, Baden',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-13'
  },
  {
    id: '10',
    title: 'Industrieelektriker*in',
    company: 'BHK Tief- und Rohrbau GmbH & Co. KG',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-13'
  },
  {
    id: '11',
    title: 'Industrieelektriker (m/w/d)',
    company: 'BleckmannSchulze GmbH (Troisdorf)',
    location: 'Niederkassel, Rhein',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-13'
  },
  {
    id: '12',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Piening GmbH (Kaiserslautern)',
    location: 'Enkenbach-Alsenborn',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-12'
  },
  {
    id: '13',
    title: 'Industrieelektriker (m/w/d)',
    company: 'JobImpulse Nord GmbH Lüdenscheid',
    location: 'Lüdenscheid',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '14',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Sandmann Infrastruktur GmbH',
    location: 'Sternberg, Mecklenburg',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '15',
    title: 'Industrieelektriker*in',
    company: 'BHK Tief- und Rohrbau GmbH & Co. KG',
    location: 'Bremerhaven',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-11'
  },
  {
    id: '16',
    title: 'Industrieelektriker (m/w/d)',
    company: 'persona service AG & Co. KG',
    location: 'Gettorf',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-09'
  },
  {
    id: '17',
    title: 'Industrieelektriker (m/w/d)',
    company: 'DIEPA GmbH Filiale Wurzen',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-09'
  },
  {
    id: '18',
    title: 'Industrieelektriker (m/w/d)',
    company: 'Randstad Deutschland',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-09'
  },
  {
    id: '19',
    title: 'Industrieelektriker*in',
    company: 'VGF - Stadtwerke Verkehrsgesellschaft Frankfurt am Main mbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-09'
  },
  {
    id: '20',
    title: 'Industrieelektriker*in',
    company: 'Volkswagen',
    location: 'Emden, Ostfriesland',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-09'
  },
  {
    id: '21',
    title: 'Industrieelektriker*in',
    company: 'Volkswagen',
    location: 'Braunschweig',
    type: 'Vollzeit',
    description: 'Industrieelektriker*in',
    postedAt: '2026-03-09'
  },
  {
    id: '22',
    title: 'Industrieelektriker (m/w/d)',
    company: 'tempster GmbH',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    description: 'Industrieelektriker (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '23',
    title: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    company: 'Nephrocare Salzgitter GmbH Medizinisches Versorgungszentrum',
    location: 'Salzgitter',
    type: 'Vollzeit',
    description: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    postedAt: '2026-03-08'
  },
  {
    id: '24',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '25',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  }
];

const GEO_CITIES = [
  { name: 'Berlin', region: 'Berlin' },
  { name: 'Hamburg', region: 'Hamburg' },
  { name: 'München', region: 'Bayern' },
  { name: 'Köln', region: 'NRW' },
  { name: 'Frankfurt am Main', region: 'Hessen' },
  { name: 'Stuttgart', region: 'Baden-Württemberg' },
  { name: 'Düsseldorf', region: 'NRW' },
  { name: 'Leipzig', region: 'Sachsen' },
  { name: 'Dortmund', region: 'NRW' },
  { name: 'Essen', region: 'NRW' },
  { name: 'Bremen', region: 'Bremen' },
  { name: 'Dresden', region: 'Sachsen' },
  { name: 'Hannover', region: 'Niedersachsen' },
  { name: 'Nürnberg', region: 'Bayern' },
  { name: 'Duisburg', region: 'NRW' },
  { name: 'Bochum', region: 'NRW' },
  { name: 'Wuppertal', region: 'NRW' },
  { name: 'Mannheim', region: 'Baden-Württemberg' },
  { name: 'Karlsruhe', region: 'Baden-Württemberg' },
  { name: 'Augsburg', region: 'Bayern' },
  { name: 'Wolfsburg', region: 'Niedersachsen' },
  { name: 'Ingolstadt', region: 'Bayern' },
  { name: 'Ludwigshafen', region: 'Rheinland-Pfalz' },
  { name: 'Leverkusen', region: 'NRW' },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-16 md:pb-20">

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
              Wir vernetzen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-500">Spannung</span> mit Zukunft.
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed">
              Deutschlands spezialisierte Jobbörse für Industrieelektriker, Elektroniker und Mechatroniker. Finden Sie Top-Arbeitgeber in der Industrie 4.0.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/jobs" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/25">
                Jobs finden <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/arbeitgeber" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400 text-base font-bold rounded-lg text-white bg-white/10 hover:bg-white/20 hover:border-white transition-all backdrop-blur-sm">
                Für Arbeitgeber
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-white border-y border-slate-100 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-4xl font-bold text-brand-600 mb-1 sm:mb-2">1.500+</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">Aktuelle Stellen</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-4xl font-bold text-brand-600 mb-1 sm:mb-2">450+</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">Partner-Firmen</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-4xl font-bold text-brand-600 mb-1 sm:mb-2">Ø 58k</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">Jahresgehalt</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-4xl font-bold text-brand-600 mb-1 sm:mb-2">24h</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">Vermittlungszeit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs - Prominent on mobile */}
      <section className="bg-slate-50 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Top Stellenangebote</h2>
              <p className="text-slate-500 mt-1 sm:mt-2 text-sm sm:text-base">Die aktuellsten Vakanzen unserer Premium-Partner</p>
            </div>
            <Link to="/jobs" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-800">
              Alle Angebote <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FEATURED_JOBS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center md:hidden">
            <Link to="/jobs" className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-sm">
              Alle Jobs anzeigen <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Beliebte Tätigkeitsfelder</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Wir decken das gesamte Spektrum der Elektrotechnik ab. Egal ob Wartung, Neubau oder Programmierung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group">
            <div className="h-12 w-12 sm:h-14 sm:w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-600 transition-colors">
              <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">Betriebstechnik</h3>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Wartung, Instandhaltung und Reparatur von industriellen Produktionsanlagen und Versorgungssystemen.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center text-sm sm:text-base">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group">
            <div className="h-12 w-12 sm:h-14 sm:w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-600 transition-colors">
              <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">Automatisierung</h3>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              SPS-Programmierung (Siemens, Beckhoff), Robotertechnik und Prozessleittechnik.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center text-sm sm:text-base">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all group sm:col-span-2 md:col-span-1">
            <div className="h-12 w-12 sm:h-14 sm:w-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-600 transition-colors">
              <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-brand-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">Energie & Gebäude</h3>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Schaltschrankbau, Mittelspannungsschaltanlagen und industrielle Gebäudeinstallation.
            </p>
            <Link to="/jobs" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center text-sm sm:text-base">
              Stellen anzeigen <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Geo SEO - Cities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Industrieelektriker Jobs nach Stadt</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Finden Sie Industrieelektriker-Stellenangebote in Ihrer Region. Wir listen offene Positionen in allen wichtigen deutschen Industriestandorten.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {GEO_CITIES.map((city) => (
            <Link
              key={city.name}
              to="/jobs"
              className="flex items-center gap-2 p-3 sm:p-4 bg-white rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all group text-sm sm:text-base"
            >
              <MapPin className="h-4 w-4 text-brand-500 flex-shrink-0 group-hover:text-brand-700" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-900 group-hover:text-brand-700 block truncate">{city.name}</span>
                <span className="text-slate-400 text-xs block">{city.region}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GEO Content Section - Career Info & FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white rounded-2xl shadow-sm border border-slate-100">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Karriere als Industrieelektriker: Ein Zukunftsberuf</h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-6">
            Die Industrieelektrik bildet das Rückgrat der deutschen Wirtschaft. In Zeiten von Industrie 4.0, Energiewende und zunehmender Automatisierung sind Fachkräfte gefragter denn je.
            <strong> Elektroniker für Betriebstechnik</strong> und <strong>Automatisierungstechniker</strong> gehören zu den Berufsgruppen mit der höchsten Arbeitsplatzsicherheit und überdurchschnittlichen Gehaltssteigerungen.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Was macht ein Industrieelektriker?</h3>
          <p className="text-slate-700 mb-4 text-sm sm:text-base">
            Ein Industrieelektriker ist spezialisiert auf elektrische Systeme in industriellen Anlagen. Zu den Kernaufgaben gehören:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6 text-sm sm:text-base">
            <li><strong>Installation:</strong> Montage und Anschluss elektrischer Betriebsmittel in Produktionshallen und Fertigungslinien.</li>
            <li><strong>Wartung:</strong> Regelmäßige Prüfung und Instandhaltung nach DGUV V3 und VDE-Normen.</li>
            <li><strong>Fehlersuche:</strong> Diagnose und Behebung von Störungen in komplexen Produktionsstraßen mittels moderner Messtechnik.</li>
            <li><strong>Modernisierung:</strong> Retrofitting alter Anlagen auf neue Steuerungsstandards (z. B. Siemens S7, TIA Portal).</li>
            <li><strong>SPS-Programmierung:</strong> Anpassung und Optimierung von speicherprogrammierbaren Steuerungen.</li>
            <li><strong>Dokumentation:</strong> Erstellung und Pflege von Schaltplänen, Prüfprotokollen und technischen Unterlagen.</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Ausbildung und Karriereweg</h3>
          <p className="text-slate-700 mb-4 text-sm sm:text-base">
            Die Ausbildung zum Industrieelektriker dauert in der Regel 2 Jahre und ist eine der kürzesten anerkannten Ausbildungen im Elektrobereich. Die zwei Fachrichtungen sind:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6 text-sm sm:text-base">
            <li><strong>Fachrichtung Betriebstechnik:</strong> Fokus auf Energieversorgung, Anlagentechnik und Schaltanlagen in der industriellen Produktion.</li>
            <li><strong>Fachrichtung Geräte und Systeme:</strong> Fokus auf elektronische Baugruppen, Geräte und Systeme der Informations- und Kommunikationstechnik.</li>
          </ul>
          <p className="text-slate-700 mb-6 text-sm sm:text-base">
            Nach der Ausbildung bieten sich zahlreiche Weiterbildungsmöglichkeiten: Elektroniker für Betriebstechnik (3,5 Jahre), Meister der Elektrotechnik, Techniker oder ein berufsbegleitendes Studium der Elektrotechnik. Der Fachkräftemangel sorgt dafür, dass gut ausgebildete Industrieelektriker hervorragende Aufstiegschancen haben.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Arbeitsmarkt und Zukunftsaussichten</h3>
          <p className="text-slate-700 mb-6 text-sm sm:text-base">
            Deutschland ist Europas größter Industriestandort. Die Nachfrage nach qualifizierten Industrieelektrikern übersteigt das Angebot deutlich. Besonders gesucht sind Fachkräfte in der Automobilindustrie (BMW, Volkswagen, Mercedes-Benz), der Chemieindustrie (BASF, Bayer), im Maschinenbau (Siemens, Bosch) und in der Lebensmittelindustrie. Der Trend zur Elektromobilität, zu erneuerbaren Energien und zur Digitalisierung der Produktion (Industrie 4.0) schafft kontinuierlich neue Arbeitsplätze. Laut Bundesagentur für Arbeit gehört der Beruf des Industrieelektrikers zu den Engpassberufen in Deutschland.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Häufige Fragen (FAQ)</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Wie hoch ist das Gehalt als Industrieelektriker?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Das Einstiegsgehalt liegt in Deutschland typischerweise zwischen <strong>32.000 und 38.000 Euro</strong> brutto jährlich.
                Mit Berufserfahrung und Weiterbildung zum Elektroniker für Betriebstechnik sind Gehälter zwischen <strong>42.000 und 55.000 Euro</strong> üblich.
                Mit Spezialisierung (z. B. SPS-Technik) und Schichtzulagen sind in der Automobil- oder Chemieindustrie sogar bis zu <strong>70.000 Euro</strong> jährlich möglich.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Welche Qualifikationen brauche ich?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Voraussetzung ist in der Regel eine abgeschlossene Berufsausbildung als Industrieelektriker, Elektroniker für Betriebstechnik, Mechatroniker oder eine vergleichbare Qualifikation.
                Zusatzqualifikationen wie der SPS-Techniker (Siemens S7, TIA Portal), der Meistertitel oder Zertifikate im Bereich Mittelspannungstechnik erhöhen die Karrierechancen und das Gehalt signifikant.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Was ist der Unterschied zwischen Industrieelektriker und Elektroniker für Betriebstechnik?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Der Industrieelektriker absolviert eine 2-jährige Ausbildung und ist auf grundlegende elektrotechnische Arbeiten spezialisiert. Der Elektroniker für Betriebstechnik hat eine 3,5-jährige Ausbildung mit einem breiteren und tieferen Kompetenzprofil, einschließlich SPS-Programmierung und komplexer Anlagentechnik. Viele Industrieelektriker nutzen ihre Ausbildung als Einstieg und qualifizieren sich anschließend weiter zum Elektroniker.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">In welchen Branchen arbeiten Industrieelektriker?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Industrieelektriker finden Beschäftigung in nahezu allen produzierenden Branchen: <strong>Automobilindustrie</strong> (Montagelinien, Robotertechnik), <strong>Chemieindustrie</strong> (Prozessanlagen, Explosionsschutz), <strong>Lebensmittelindustrie</strong> (Verpackungsanlagen, Hygienestandards), <strong>Energieversorgung</strong> (Schaltanlagen, Umspannwerke), <strong>Maschinenbau</strong> (Sondermaschinenbau, Werkzeugmaschinen) und in der <strong>Gebäudetechnik</strong> großer Industriekomplexe.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Wie sieht der typische Arbeitsalltag eines Industrieelektrikers aus?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Der Arbeitsalltag variiert je nach Einsatzgebiet. Typische Aufgaben umfassen morgendliche Anlagenprüfungen, die Installation neuer elektrischer Komponenten, Fehlersuche bei Produktionsstillständen, Wartungsarbeiten nach Plan sowie die Dokumentation der durchgeführten Arbeiten. Viele Industrieelektriker arbeiten im Schichtbetrieb, da Produktionsanlagen rund um die Uhr laufen. Bereitschaftsdienst am Wochenende ist in vielen Betrieben üblich und wird durch Zulagen vergütet.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Welche Weiterbildungsmöglichkeiten gibt es?</h4>
              <p className="text-slate-700 text-sm sm:text-base">
                Die wichtigsten Weiterbildungswege sind: <strong>Elektroniker für Betriebstechnik</strong> (Aufbauausbildung), <strong>Industriemeister Elektrotechnik</strong> (IHK), <strong>Staatlich geprüfter Techniker</strong> (Fachrichtung Elektrotechnik), <strong>SPS-Fachkraft</strong> (Siemens, Beckhoff), sowie ein <strong>berufsbegleitendes Studium</strong> der Elektrotechnik oder Automatisierungstechnik. Viele Arbeitgeber unterstützen Weiterbildungen finanziell und durch Freistellungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Bereit für den nächsten Karriereschritt?</h2>
            <p className="text-brand-100 text-base sm:text-lg max-w-xl">
              Entdecken Sie aktuelle Industrieelektriker-Stellenangebote in ganz Deutschland. Täglich neue Vakanzen von Top-Arbeitgebern.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
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
