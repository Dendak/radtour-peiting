import type { Poi } from './types';

export const pois: Poi[] = [
  // =============================================
  // AMMERSEE-RUNDE (Do)
  // =============================================
  { id: 'raisting-erdfunk', routeId: 'ammersee', lat: 47.9019, lng: 11.1147, name: 'Erdfunkstelle Raisting', type: 'museum', description: 'Größte Antenne Europas — ikonisches Wahrzeichen des Pfaffenwinkels.', photo: 'photos/raisting.jpg' },
  { id: 'diessen-markt', routeId: 'ammersee', lat: 47.9522, lng: 11.0991, name: 'Dießen am Ammersee', type: 'town', description: 'Malerische Künstler- und Töpferstadt am Südufer des Ammersees.', photo: 'photos/diessen.jpg' },
  { id: 'herrsching', routeId: 'ammersee', lat: 47.9991, lng: 11.1763, name: 'Herrsching — Seepromenade', type: 'lake', description: 'Die längste Seepromenade Bayerns mit Blick auf die Alpen.', photo: 'photos/herrsching.jpg' },
  { id: 'kloster-andechs', routeId: 'ammersee', lat: 47.9747, lng: 11.1821, name: 'Kloster Andechs', type: 'church', description: 'Benediktinerkloster auf dem Heiligen Berg mit legendärer Brauerei.', photo: 'photos/andechs.jpg' },
  // Mittagessen
  { id: 'unterbraeu-diessen', routeId: 'ammersee', lat: 47.9492, lng: 11.1075, name: 'Gasthof Unterbräu Dießen', type: 'gasthaus', description: 'Traditionshaus im Herzen von Dießen. Frischer Ammersee-Fisch.', menuUrl: 'https://www.unterbraeu-diessen.de/speisekarte/' },
  { id: 'seehof-herrsching', routeId: 'ammersee', lat: 48.0001, lng: 11.1748, name: 'Seehof Herrsching', type: 'biergarten', description: 'Biergarten direkt am See mit Alpenpanorama.', menuUrl: 'https://seehof-ammersee.de/en/restaurant/' },
  { id: 'andechs-braeuhaus', routeId: 'ammersee', lat: 47.9743, lng: 11.1830, name: 'Klosterbräustüberl Andechs', type: 'biergarten', description: 'Legendärer Biergarten. Schweinshaxe und Andechser Bier.', menuUrl: 'https://andechs.de/braustueberl/speisekarte/' },
  // Cafés
  { id: 'goldammer-diessen', routeId: 'ammersee', lat: 47.9494, lng: 11.1055, name: 'Café Goldammer Dießen', type: 'cafe', description: 'Seit 120 Jahren Konditorei-Tradition. Bio-Kuchen und Torten.', menuUrl: 'https://www.diegoldammer.de/' },
  { id: 'schokosphaere', routeId: 'ammersee', lat: 47.9909, lng: 11.1549, name: 'SchokoSphäre Breitbrunn', type: 'cafe', description: 'Chocolatier-Café mit handgefertigten Pralinen.', menuUrl: 'https://schokosphaere.de/' },
  { id: 'forster-schondorf', routeId: 'ammersee', lat: 48.0562, lng: 11.0972, name: 'Café Forster Schondorf', type: 'cafe', description: 'Historisches Seecafé im Bootshausstil.', menuUrl: 'https://www.cafeforster.de/' },

  // =============================================
  // WIESKIRCHE & STEINGADEN (Fr)
  // =============================================
  { id: 'kloster-rottenbuch', routeId: 'wieskirche', lat: 47.7327, lng: 10.9663, name: 'Kloster Rottenbuch', type: 'church', description: 'Augustinerchorherrenstift mit prachtvoller Rokoko-Ausstattung.' },
  { id: 'wieskirche', routeId: 'wieskirche', lat: 47.6808, lng: 10.9010, name: 'Wieskirche', type: 'church', description: 'UNESCO-Welterbe — Meisterwerk des bayerischen Rokoko.', photo: 'photos/wieskirche.jpg' },
  { id: 'steingaden-kloster', routeId: 'wieskirche', lat: 47.7036, lng: 10.8625, name: 'Kloster Steingaden', type: 'church', description: 'Romanisches Prämonstratenserstift aus dem 12. Jahrhundert.', photo: 'photos/steingaden.jpg' },
  { id: 'schongau-wies', routeId: 'wieskirche', lat: 47.8131, lng: 10.8946, name: 'Schongauer Altstadt', type: 'town', description: 'Mittelalterliche Altstadt mit komplett erhaltener Stadtmauer.', photo: 'photos/schongau.jpg' },
  // Mittagessen
  { id: 'schweiger-wies', routeId: 'wieskirche', lat: 47.6811, lng: 10.8990, name: 'Gasthof Schweiger (Wieskirche)', type: 'gasthaus', description: 'Seit 1751, direkt neben der Wieskirche. Berühmte Auszogene! Fr Ruhetag.', menuUrl: 'https://www.gasthof-schweiger-wieskirche.de/speisekarte.html' },
  { id: 'graf-steingaden', routeId: 'wieskirche', lat: 47.7038, lng: 10.8644, name: 'Gasthof Graf Steingaden', type: 'gasthaus', description: 'Landgasthof mit Biergarten. Regionale Küche und Wild.', menuUrl: 'https://www.gasthof-graf.de/en/menu' },
  { id: 'brauhaus-schongau', routeId: 'wieskirche', lat: 47.8140, lng: 10.8955, name: 'Schongauer Brauhaus', type: 'gasthaus', description: 'Jugendstil-Brauerei mit hausgebrautem Bier.', menuUrl: 'https://brauhaus-schongau.de/unsere-aktuelle-speisekarte/' },
  // Cafés
  { id: 'ballenhaus-schongau', routeId: 'wieskirche', lat: 47.8127, lng: 10.8942, name: 'Ballenhaus Café Schongau', type: 'cafe', description: 'Bistro-Café am Marienplatz.', menuUrl: 'https://www.ballenhaus-schongau.de/' },
  { id: 'moser-wieskirche', routeId: 'wieskirche', lat: 47.6815, lng: 10.9005, name: 'Gasthof Moser (Kaffee)', type: 'cafe', description: 'Kaffee und Kuchen direkt an der Wieskirche.', menuUrl: 'https://www.gasthof-moser.de/' },
  { id: 'cafe-rottenbuch', routeId: 'wieskirche', lat: 47.7330, lng: 10.9670, name: 'Klosterstüberl Rottenbuch', type: 'cafe', description: 'Café im Klosterhof mit Kuchen und Sonnenterrasse.' },

  // =============================================
  // STAFFELSEE & MURNAU (Sa)
  // =============================================
  { id: 'staffelsee', routeId: 'staffelsee', lat: 47.7174, lng: 11.1774, name: 'Staffelsee', type: 'lake', description: 'Einer der wärmsten Voralpenseen mit sieben Inseln.', photo: 'photos/staffelsee.jpg' },
  { id: 'murnau-stadt', routeId: 'staffelsee', lat: 47.6815, lng: 11.2017, name: 'Murnau am Staffelsee', type: 'town', description: 'Künstlerstadt des Blauen Reiters. Kandinsky und Münter lebten hier.', photo: 'photos/murnau.jpg' },
  { id: 'muenter-haus', routeId: 'staffelsee', lat: 47.6785, lng: 11.1981, name: 'Münter-Haus', type: 'museum', description: 'Das „Russenhaus" — Geburtsstätte des Blauen Reiters.', photo: 'photos/muenter-haus.jpg' },
  { id: 'murnauer-moos', routeId: 'staffelsee', lat: 47.6550, lng: 11.1810, name: 'Murnauer Moos', type: 'viewpoint', description: 'Größtes Moorgebiet Mitteleuropas mit Zugspitz-Panorama.', photo: 'photos/murnauer-moos.jpg' },
  // Mittagessen
  { id: 'griesbraeu-murnau', routeId: 'staffelsee', lat: 47.6810, lng: 11.2020, name: 'Griesbräu zu Murnau', type: 'gasthaus', description: 'Historische Brauerei mit hauseigenem Bier und Biergarten.', menuUrl: 'https://www.griesbraeu.de/speisekarte/' },
  { id: 'auszeit-uffing', routeId: 'staffelsee', lat: 47.7199, lng: 11.1531, name: 'Gasthaus Uffing', type: 'gasthaus', description: 'Gemütlicher Gasthof am Staffelsee.' },
  { id: 'alpenblick-murnau', routeId: 'staffelsee', lat: 47.6820, lng: 11.2000, name: 'Gasthof Alpenblick Murnau', type: 'gasthaus', description: 'Bayerische Wirtshausküche mit Blick auf die Alpen.' },
  // Cafés
  { id: 'cafe-kroenner', routeId: 'staffelsee', lat: 47.6808, lng: 11.2030, name: 'Café Krönner Murnau', type: 'cafe', description: 'Traditionsreiches Café. Berühmt für Torten und Pralinen.', menuUrl: 'https://www.kroenner.com/' },
  { id: 'eiscafe-murnau', routeId: 'staffelsee', lat: 47.6812, lng: 11.2010, name: 'Eiscafé Venezia Murnau', type: 'cafe', description: 'Italienisches Eis und Kaffee am Marktplatz.' },
  { id: 'cafe-huglfing', routeId: 'staffelsee', lat: 47.7627, lng: 11.1667, name: 'Bäckerei-Café Huglfing', type: 'cafe', description: 'Kaffee und Kuchen auf halbem Rückweg.' },

  // =============================================
  // KAUFBEUREN & MARKTOBERDORF (So)
  // =============================================
  { id: 'schongau-kauf', routeId: 'kaufbeuren', lat: 47.8131, lng: 10.8946, name: 'Schongau — Altstadt', type: 'town', description: 'Mittelalterliche Altstadt mit erhaltener Stadtmauer.', photo: 'photos/schongau.jpg' },
  { id: 'marktoberdorf', routeId: 'kaufbeuren', lat: 47.7792, lng: 10.6173, name: 'Marktoberdorf', type: 'town', description: 'Kreisstadt des Ostallgäus mit Barockkirche St. Martin.' },
  { id: 'kaufbeuren-altstadt', routeId: 'kaufbeuren', lat: 47.8804, lng: 10.6220, name: 'Kaufbeurer Altstadt', type: 'town', description: 'Mittelalterliche Altstadt mit Blasiuskirche und Neptunbrunnen.' },
  { id: 'kloster-irsee', routeId: 'kaufbeuren', lat: 47.9066, lng: 10.5739, name: 'Kloster Irsee', type: 'church', description: 'Barockes Benediktinerkloster — heute Tagungszentrum.' },
  // Mittagessen
  { id: 'goldener-hirsch', routeId: 'kaufbeuren', lat: 47.8800, lng: 10.6230, name: 'Goldener Hirsch Kaufbeuren', type: 'gasthaus', description: 'Traditionsgasthof in der Altstadt.', menuUrl: 'https://www.goldener-hirsch-kaufbeuren.de/' },
  { id: 'braustueberl-irsee', routeId: 'kaufbeuren', lat: 47.9062, lng: 10.5745, name: 'Klosterbräustüberl Irsee', type: 'biergarten', description: 'Biergarten am Kloster. Regionales Bier und deftige Brotzeit.' },
  { id: 'hirschen-mod', routeId: 'kaufbeuren', lat: 47.7795, lng: 10.6180, name: 'Zum Hirschen Marktoberdorf', type: 'gasthaus', description: 'Gutbürgerliche Allgäuer Küche im Zentrum.' },
  // Cafés
  { id: 'cafe-herrdegen', routeId: 'kaufbeuren', lat: 47.8808, lng: 10.6215, name: 'Café Herrdegen Kaufbeuren', type: 'cafe', description: 'Traditionsreiches Kaffeehaus in der Fußgängerzone.' },
  { id: 'cafe-mod', routeId: 'kaufbeuren', lat: 47.7790, lng: 10.6185, name: 'Café am Markt Marktoberdorf', type: 'cafe', description: 'Gemütliches Café mit Sonnenterrasse am Marktplatz.' },
  { id: 'cafe-irsee', routeId: 'kaufbeuren', lat: 47.9058, lng: 10.5740, name: 'Klostercafé Irsee', type: 'cafe', description: 'Kaffee und Kuchen im Klostergarten.' },

  // =============================================
  // LANDSBERG AM LECH (A1)
  // =============================================
  { id: 'landsberg-bayertor', routeId: 'landsberg', lat: 48.0519, lng: 10.8712, name: 'Landsberg — Bayertor', type: 'town', description: 'Eines der schönsten Stadttore Süddeutschlands.', photo: 'photos/landsberg.jpg' },
  { id: 'landsberg-hauptplatz', routeId: 'landsberg', lat: 48.0510, lng: 10.8700, name: 'Hauptplatz Landsberg', type: 'town', description: 'Malerischer Marktplatz mit Rathaus und Marienbrunnen.' },
  { id: 'lechfall-landsberg', routeId: 'landsberg', lat: 48.0480, lng: 10.8680, name: 'Lechwehr Landsberg', type: 'viewpoint', description: 'Historisches Wehr mit beeindruckendem Wasserfall.' },
  // Mittagessen
  { id: 'hellmairs', routeId: 'landsberg', lat: 48.0512, lng: 10.8715, name: 'Hellmairs Landsberg', type: 'gasthaus', description: 'Wirtshaus am Hauptplatz. Bayerische Küche.', menuUrl: 'https://www.hellmairs.de/speisekarte/' },
  { id: 'suessbreu', routeId: 'landsberg', lat: 48.0505, lng: 10.8690, name: 'Süßbräu Landsberg', type: 'gasthaus', description: 'Traditionelle Brauerei-Gaststätte mit hauseigenem Bier.' },
  { id: 'gasthof-kinsau', routeId: 'landsberg', lat: 47.8560, lng: 10.8960, name: 'Gasthof Kinsau', type: 'gasthaus', description: 'Dorfgasthof mit bürgerlicher Küche auf der Hinfahrt.' },
  // Cafés
  { id: 'stadtcafe-landsberg', routeId: 'landsberg', lat: 48.0508, lng: 10.8695, name: 'Stadtcafé Landsberg', type: 'cafe', description: 'Altstadt-Café mit Blick auf den Hauptplatz.' },
  { id: 'vivarium', routeId: 'landsberg', lat: 48.0515, lng: 10.8720, name: 'Café Vivarium Landsberg', type: 'cafe', description: 'Modernes Café mit Kaffeespezialitäten.' },
  { id: 'eiscafe-lech', routeId: 'landsberg', lat: 48.0511, lng: 10.8705, name: 'Eiscafé am Lech', type: 'cafe', description: 'Eis und Kaffee mit Blick aufs Lechwehr.' },

  // =============================================
  // FORGGENSEE & FÜSSEN (A2)
  // =============================================
  { id: 'neuschwanstein', routeId: 'forggensee', lat: 47.5576, lng: 10.7498, name: 'Schloss Neuschwanstein', type: 'viewpoint', description: 'Das berühmteste Schloss der Welt — Märchenschloss Ludwigs II.' },
  { id: 'forggensee-blick', routeId: 'forggensee', lat: 47.5838, lng: 10.7120, name: 'Forggensee', type: 'lake', description: 'Fünftgrößter See Bayerns mit Blick auf die Königsschlösser.' },
  { id: 'fuessen-altstadt', routeId: 'forggensee', lat: 47.5694, lng: 10.6982, name: 'Füssen — Altstadt', type: 'town', description: 'Romantische Altstadt mit Hohem Schloss und Kloster St. Mang.' },
  { id: 'lechbruck-steg', routeId: 'forggensee', lat: 47.7131, lng: 10.7954, name: 'Lechbruck — Flößersteg', type: 'viewpoint', description: 'Längste Hängebrücke des Allgäus über den Lech.' },
  // Mittagessen
  { id: 'krone-fuessen', routeId: 'forggensee', lat: 47.5700, lng: 10.7000, name: 'Gasthof Krone Füssen', type: 'gasthaus', description: 'Traditionsgasthof in der Altstadt mit Allgäuer Küche.' },
  { id: 'hanselewirt', routeId: 'forggensee', lat: 47.5740, lng: 10.7370, name: 'Hanselewirt Schwangau', type: 'gasthaus', description: 'Uriges Wirtshaus am Fuß von Neuschwanstein.' },
  { id: 'post-lechbruck', routeId: 'forggensee', lat: 47.7135, lng: 10.7960, name: 'Gasthof Zur Post Lechbruck', type: 'gasthaus', description: 'Familiengeführter Gasthof auf dem Rückweg.' },
  // Cafés
  { id: 'cafe-fuessen', routeId: 'forggensee', lat: 47.5698, lng: 10.6975, name: 'Café Hohes Schloss Füssen', type: 'cafe', description: 'Kaffee und Kuchen mit Blick auf Altstadt und Berge.' },
  { id: 'eis-schwangau', routeId: 'forggensee', lat: 47.5745, lng: 10.7375, name: 'Café am Schlossblick', type: 'cafe', description: 'Eis und Kaffee mit Blick auf Neuschwanstein.' },
  { id: 'seecafe-lechbruck', routeId: 'forggensee', lat: 47.7128, lng: 10.7950, name: 'Seecafé Lechbruck', type: 'cafe', description: 'Entspanntes Café am Lech auf dem Heimweg.' },
];
