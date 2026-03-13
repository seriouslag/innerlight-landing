import { useState, useEffect } from 'react';
import type { CardConfig } from './types';
import { defaultConfig } from './defaults';
import { Sidebar } from './components/Sidebar';
import { CardGallery } from './components/CardGallery';
import './cards.css';
import './App.css';

/** Root application component. Manages card config state and CSS variable syncing. */
function App() {
  const [config, setConfig] = useState<CardConfig>(defaultConfig);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--navy', config.navy);
    root.style.setProperty('--amber', config.amber);
    root.style.setProperty('--cream', config.cream);

    // Derive dependent colors from the primary navy
    const r = parseInt(config.navy.slice(1, 3), 16);
    const g = parseInt(config.navy.slice(3, 5), 16);
    const b = parseInt(config.navy.slice(5, 7), 16);
    root.style.setProperty(
      '--navy-deep',
      `rgb(${Math.max(0, r - 12)}, ${Math.max(0, g - 5)}, ${Math.max(0, b - 3)})`,
    );
    root.style.setProperty(
      '--navy-mid',
      `rgb(${Math.max(0, r - 6)}, ${Math.max(0, g - 6)}, ${Math.max(0, b - 22)})`,
    );

    // Derive amber glow
    const ar = parseInt(config.amber.slice(1, 3), 16);
    const ag = parseInt(config.amber.slice(3, 5), 16);
    const ab = parseInt(config.amber.slice(5, 7), 16);
    root.style.setProperty(
      '--amber-glow',
      `rgba(${ar}, ${ag}, ${ab}, 0.15)`,
    );

    // Derive cream variants
    const cr = parseInt(config.cream.slice(1, 3), 16);
    const cg = parseInt(config.cream.slice(3, 5), 16);
    const cb = parseInt(config.cream.slice(5, 7), 16);
    root.style.setProperty(
      '--cream-warm',
      `rgb(${Math.max(0, cr - 8)}, ${Math.max(0, cg - 9)}, ${Math.max(0, cb - 11)})`,
    );
    root.style.setProperty(
      '--cream-dark',
      `rgb(${Math.max(0, cr - 29)}, ${Math.max(0, cg - 31)}, ${Math.max(0, cb - 35)})`,
    );
  }, [config.navy, config.amber, config.cream]);

  return (
    <div className="app-layout">
      <Sidebar config={config} onChange={setConfig} />
      <main className="app-main">
        <CardGallery config={config} />
      </main>
    </div>
  );
}

export default App;
