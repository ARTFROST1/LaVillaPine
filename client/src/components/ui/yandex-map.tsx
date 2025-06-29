import { useEffect, useRef } from 'react';

interface YandexMapProps {
  className?: string;
  center?: [number, number];
  zoom?: number;
  markerCoords?: [number, number];
  markerText?: string;
}

export default function YandexMap({ 
  className = "",
  center = [44.6076, 40.1128], // Майкопский район, Республика Адыгея
  zoom = 12,
  markerCoords = [44.6076, 40.1128],
  markerText = "La Villa Pine"
}: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!window.ymaps || !mapRef.current) return;

      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: center,
          zoom: zoom,
          controls: ['zoomControl', 'fullscreenControl']
        }, {
          searchControlProvider: 'yandex#search'
        });

        const placemark = new window.ymaps.Placemark(markerCoords, {
          balloonContent: markerText,
          hintContent: markerText
        }, {
          preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(placemark);
        mapInstanceRef.current = map;
      });
    };

    // Load Yandex Maps API if not already loaded
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=dfbbae4c-9978-4cbb-ac76-07cd86875a73&lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markerCoords, markerText]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-64 rounded-lg ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ymaps: any;
  }
}