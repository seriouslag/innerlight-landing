import { useState, useEffect } from 'react';
import type { CardConfig } from './types';
import { defaultConfig } from './defaults';
import { deriveColorVars } from './utils/colors';
import { Sidebar } from './components/Sidebar';
import { CardGallery } from './components/CardGallery';
import './cards.css';
import './App.css';

/** Root application component. Manages card config state and CSS variable syncing. */
function App() {
  const [config, setConfig] = useState<CardConfig>(defaultConfig);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const vars = deriveColorVars(config.navy, config.amber, config.cream);
    const root = document.documentElement;
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }
  }, [config.navy, config.amber, config.cream]);

  return (
    <div className={`app-layout${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
      <Sidebar config={config} onChange={setConfig} open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="app-main">
        <CardGallery config={config} onChange={setConfig} />
      </main>
    </div>
  );
}

export default App;
