import React, { useState } from 'react';
import { Sparkles, Check, Send } from 'lucide-react';
import { generateJobDescription } from '../services/geminiService';

const Employers: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [requirements, setRequirements] = useState('');
  const [benefits, setBenefits] = useState('');
  const [generatedAd, setGeneratedAd] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedAd('');
    
    const result = await generateJobDescription(jobTitle, requirements, benefits);
    setGeneratedAd(result);
    setIsLoading(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Finden Sie die besten Elektrofachkräfte</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Nutzen Sie unsere KI-gestützte Plattform, um Ihre offenen Stellen schneller und präziser zu besetzen. 
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Value Proposition */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Warum VoltKarriere?</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Spezialisierte Zielgruppe</h3>
                <p className="mt-2 text-base text-slate-500">
                  Keine Streuverluste. Wir erreichen ausschließlich Fachkräfte aus der Elektrotechnik, Mechatronik und Automatisierung.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Generative Engine Optimization (GEO)</h3>
                <p className="mt-2 text-base text-slate-500">
                  Unsere Plattform ist so strukturiert, dass KI-Suchmaschinen Ihre Stellenanzeigen bevorzugt ausspielen und verstehen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Generator Tool */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4">
            <div className="flex items-center text-white">
              <Sparkles className="h-5 w-5 mr-2" />
              <h3 className="font-bold">KI Stellenanzeigen-Generator</h3>
            </div>
            <p className="text-brand-100 text-sm mt-1">
              Erstellen Sie in Sekunden eine professionelle Jobbeschreibung mit Gemini AI.
            </p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Jobtitel</label>
                <input 
                  type="text" 
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="z.B. Industrieelektriker Betriebstechnik"
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Wichtigste Anforderungen (Stichpunkte)</label>
                <textarea 
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="z.B. SPS S7, Schichtbereitschaft, DGUV V3..."
                  className="w-full p-2 border border-slate-300 rounded-lg h-24 focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Benefits (Stichpunkte)</label>
                <textarea 
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  placeholder="z.B. Weihnachtsgeld, 30 Tage Urlaub, Firmenwagen..."
                  className="w-full p-2 border border-slate-300 rounded-lg h-24 focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>Generiere...</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" /> Anzeige generieren</>
                )}
              </button>
            </form>

            {generatedAd && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Vorschlag:</h4>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 whitespace-pre-wrap font-mono h-64 overflow-y-auto">
                  {generatedAd}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  * Generiert durch Google Gemini. Bitte prüfen Sie den Text vor Veröffentlichung.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;