import { useState, useEffect } from 'react';
import type { CardConfig } from './types';
import { defaultConfig } from './defaults';
import { deriveColorVars } from './utils/colors';
import { readConfigFromUrl, writeConfigToUrl } from './utils/url';
import { Sidebar } from './components/Sidebar';
import { CardGallery } from './components/CardGallery';
import './cards.css';
import './App.css';

/** Root application component. Manages card config state, CSS variable syncing, and URL persistence. */
function App() {
  // Initialize from URL query string if present, otherwise use defaults.
  const [config, setConfig] = useState<CardConfig>(() => readConfigFromUrl() ?? defaultConfig);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sync global colors and fonts to CSS custom properties on :root.
  useEffect(() => {
    const vars = deriveColorVars(config.navy, config.amber, config.cream);
    vars['--font-display'] = config.fontDisplay;
    vars['--font-body'] = config.fontBody;
    const root = document.documentElement;
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }
  }, [config.navy, config.amber, config.cream, config.fontDisplay, config.fontBody]);

  // Persist full config to URL on every change so the URL is always shareable.
  useEffect(() => {
    writeConfigToUrl(config);
  }, [config]);

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
