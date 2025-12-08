import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateJobDescription = async (
  jobTitle: string,
  requirements: string,
  benefits: string
): Promise<string> => {
  if (!API_KEY) {
    return "API Key fehlt. Bitte konfigurieren Sie process.env.API_KEY, um die KI-Funktionen zu nutzen.";
  }

  try {
    const prompt = `
      Erstelle eine professionelle, ansprechende und SEO-optimierte Stellenanzeige auf Deutsch für die Position: ${jobTitle}.
      
      Anforderungen: ${requirements}
      Vorteile/Benefits: ${benefits}
      
      Struktur der Anzeige:
      1. Einleitung (Warum wir?)
      2. Deine Aufgaben
      3. Dein Profil
      4. Wir bieten
      
      Bitte nutze Markdown-Formatierung für Überschriften und Listen. Der Tonfall soll professionell, aber einladend für Fachkräfte der Industrie sein.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Konnte keine Beschreibung generieren.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es ist ein Fehler bei der Generierung aufgetreten. Bitte versuchen Sie es später erneut.";
  }
};

export const optimizeCV = async (cvText: string): Promise<string> => {
    if (!API_KEY) {
    return "API Key fehlt.";
  }

  try {
    const prompt = `
      Du bist ein Karriere-Experte für Industrieelektrik. Analysiere den folgenden Lebenslauf-Auszug und gib 3 konkrete Verbesserungsvorschläge, um die Chancen auf ein Vorstellungsgespräch zu erhöhen.
      
      Lebenslauf Text:
      "${cvText}"
      
      Antworte direkt mit den 3 Punkten.
    `;

     const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Keine Tipps verfügbar.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Fehler bei der Analyse.";
  }
}