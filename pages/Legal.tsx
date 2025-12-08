import React from 'react';

export const Impressum: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 TMG</p>
    
    <h3>VoltKarriere GmbH</h3>
    <p>
      Industriestraße 1<br />
      10115 Berlin<br />
      Deutschland
    </p>

    <h3>Kontakt</h3>
    <p>
      Telefon: +49 (0) 30 12345678<br />
      E-Mail: kontakt@voltkarriere.de
    </p>

    <h3>Registereintrag</h3>
    <p>
      Eintragung im Handelsregister.<br />
      Registergericht: Amtsgericht Berlin-Charlottenburg<br />
      Registernummer: HRB 123456
    </p>

    <h3>Umsatzsteuer-ID</h3>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
      DE 123 456 789
    </p>

    <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
    <p>
      Max Mustermann<br />
      Industriestraße 1<br />
      10115 Berlin
    </p>

    <h3>Haftungsausschluss</h3>
    <p>
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
    </p>
  </div>
);

export const Datenschutz: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
    <h1>Datenschutzerklärung</h1>
    
    <h2>1. Datenschutz auf einen Blick</h2>
    <h3>Allgemeine Hinweise</h3>
    <p>
      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
    </p>

    <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
    <p>
      Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br/>
      <strong>Beispiel Hoster GmbH</strong>
    </p>

    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
    <h3>Datenschutz</h3>
    <p>
      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
    </p>
    
    <h3>KI-Dienste (Google Gemini)</h3>
    <p>
      Auf unserer Website nutzen wir Funktionen der Künstlichen Intelligenz von Google (Gemini API) zur Generierung von Texten. Wenn Sie diese Funktionen nutzen (z.B. Job-Generator), werden die von Ihnen eingegebenen Daten an Google Server übertragen und dort verarbeitet. Bitte geben Sie keine sensiblen persönlichen Daten in die KI-Eingabefelder ein.
    </p>
  </div>
);