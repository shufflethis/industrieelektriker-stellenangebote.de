import React, { useState } from 'react';
import { BookOpen, TrendingUp, Search, UserCheck, Sparkles } from 'lucide-react';
import { optimizeCV } from '../services/geminiService';

const Employees: React.FC = () => {
  const [cvText, setCvText] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvText.trim()) return;
    
    setIsLoading(true);
    setAnalysis('');
    
    const result = await optimizeCV(cvText);
    setAnalysis(result);
    setIsLoading(false);
  };

  return (
    <div className="bg-white pb-20">
      
      {/* Header */}
      <div className="bg-brand-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Karriere-Ratgeber & Tools</h1>
        <p className="text-brand-100 max-w-2xl mx-auto text-lg">
          Maximieren Sie Ihre Chancen auf dem Arbeitsmarkt mit Expertenwissen und KI-Support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
            <TrendingUp className="h-10 w-10 text-brand-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Gehaltstrends 2024</h3>
            <p className="text-slate-600 text-sm">
              Industrieelektriker verdienen aktuell durchschnittlich 7% mehr als im Vorjahr. Spezialisierung auf SPS lohnt sich besonders.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
            <BookOpen className="h-10 w-10 text-brand-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Weiterbildung</h3>
            <p className="text-slate-600 text-sm">
              Der "Industriemeister Elektrotechnik" bleibt der Goldstandard für den Aufstieg in Führungspositionen.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
            <Search className="h-10 w-10 text-brand-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Gesuchte Skills</h3>
            <p className="text-slate-600 text-sm">
              Hohe Nachfrage nach Kenntnissen in TIA Portal, EPLAN P8 und Robotik (KUKA/Fanuc).
            </p>
          </div>
        </div>

        {/* AI CV Tool */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-100 p-2 rounded-lg">
              <UserCheck className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">KI Lebenslauf-Check</h2>
              <p className="text-slate-500 text-sm">Fügen Sie Auszüge Ihres Lebenslaufs ein (z.B. "Berufserfahrung") und erhalten Sie Feedback.</p>
            </div>
          </div>

          <form onSubmit={handleAnalyze}>
            <textarea
              value={cvText}
              onChange={(e) => setCvText(e.target.value)}
              placeholder="Fügen Sie hier Ihren Text ein..."
              className="w-full h-40 p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 outline-none resize-none bg-white mb-4"
            />
            <button
              type="submit"
              disabled={isLoading || !cvText}
              className="px-6 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Analysiere...' : 'Feedback erhalten'}
            </button>
          </form>

          {analysis && (
            <div className="mt-8 bg-white p-6 rounded-lg border border-brand-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                <Sparkles className="h-4 w-4 text-brand-500 mr-2" /> KI-Analyse
              </h4>
              <div className="prose prose-sm prose-slate max-w-none">
                <div className="whitespace-pre-wrap">{analysis}</div>
              </div>
            </div>
          )}
        </div>

        {/* Long form content for SEO */}
        <div className="mt-16 prose prose-slate max-w-none">
          <h2>Tipps für Ihre Bewerbung als Industrieelektriker</h2>
          <p>
            Eine erfolgreiche Bewerbung im technischen Bereich zeichnet sich durch Präzision und Relevanz aus. Personalverantwortliche in der Industrie scannen Lebensläufe oft nach spezifischen Schlagworten (Keywords), die auch von automatisierten Bewerbermanagementsystemen (ATS) erfasst werden.
          </p>
          
          <h3>1. Technische Skills hervorheben</h3>
          <p>
            Listen Sie Ihre Fähigkeiten detailliert auf. Schreiben Sie nicht nur "SPS-Kenntnisse", sondern spezifizieren Sie: "Siemens S7, TIA Portal, Graph, AWL/FUP". Nennen Sie konkrete Hersteller, mit denen Sie gearbeitet haben (Rittal, Phoenix Contact, Schneider Electric).
          </p>

          <h3>2. Projekte beschreiben</h3>
          <p>
            Statt nur Tätigkeiten aufzulisten ("Schaltschrankbau"), beschreiben Sie Projekte: "Eigenverantwortlicher Aufbau und Verdrahtung von 15 Steuerschränken für eine Abfüllanlage inkl. I/O-Check". Das macht Ihre Erfahrung greifbar.
          </p>

          <h3>3. Zertifikate sind Währung</h3>
          <p>
            In der Elektrotechnik sind Scheine essentiell. Führen Sie Schaltberechtigungen (Mittelspannung/Hochspannung), SCC-Zertifikate oder herstellerspezifische Schulungen prominent auf.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employees;