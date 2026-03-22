import type { Poi } from '../data/types';

interface Props {
  pois: Poi[];
  onPoiClick: (poi: Poi) => void;
}

const typeLabels: Record<string, string> = {
  church: 'Kirche / Kloster',
  viewpoint: 'Aussichtspunkt',
  town: 'Ort',
  bridge: 'Brücke',
  museum: 'Museum',
  restaurant: 'Restaurant',
  gasthaus: 'Gasthaus',
  biergarten: 'Biergarten',
  lake: 'See',
  cafe: 'Café',
};

function PoiLinks({ poi }: { poi: Poi }) {
  const hasLinks = poi.website || poi.menuUrl || poi.googleMapsUrl;
  if (!hasLinks) return null;

  return (
    <div className="poi-links">
      {poi.website && (
        <a href={poi.website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="Website">
          🌐 Website
        </a>
      )}
      {poi.menuUrl && (
        <a href={poi.menuUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="Speisekarte">
          📋 Speisekarte
        </a>
      )}
      {poi.googleMapsUrl && (
        <a href={poi.googleMapsUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="Google Maps">
          📍 Maps
        </a>
      )}
    </div>
  );
}

function PoiCard({ poi, onPoiClick }: { poi: Poi; onPoiClick: (poi: Poi) => void }) {
  return (
    <div className="poi-item" onClick={() => onPoiClick(poi)}>
      {poi.photo ? (
        <img src={`${import.meta.env.BASE_URL}${poi.photo}`} alt={poi.name} className="poi-photo" loading="lazy" />
      ) : (
        <div className="poi-photo-placeholder">📍</div>
      )}
      <div className="poi-content">
        <strong>{poi.name}</strong>
        <span className="poi-type">{typeLabels[poi.type] || poi.type}</span>
        <p>{poi.description}</p>
        <PoiLinks poi={poi} />
      </div>
    </div>
  );
}

export function PoiList({ pois, onPoiClick }: Props) {
  const sights = pois.filter((p) => !['gasthaus', 'biergarten', 'restaurant', 'cafe'].includes(p.type));
  const lunches = pois.filter((p) => ['gasthaus', 'biergarten', 'restaurant'].includes(p.type));
  const cafes = pois.filter((p) => p.type === 'cafe');

  return (
    <div className="poi-list">
      {sights.length > 0 && (
        <>
          <h3>Sehenswürdigkeiten</h3>
          {sights.map((poi) => (
            <PoiCard key={poi.id} poi={poi} onPoiClick={onPoiClick} />
          ))}
        </>
      )}
      {lunches.length > 0 && (
        <>
          <h3>🍴 Mittagessen</h3>
          {lunches.map((poi) => (
            <PoiCard key={poi.id} poi={poi} onPoiClick={onPoiClick} />
          ))}
        </>
      )}
      {cafes.length > 0 && (
        <>
          <h3>☕ Kaffee & Kuchen</h3>
          {cafes.map((poi) => (
            <PoiCard key={poi.id} poi={poi} onPoiClick={onPoiClick} />
          ))}
        </>
      )}
    </div>
  );
}
