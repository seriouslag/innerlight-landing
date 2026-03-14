import { useState } from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import type { CardConfig } from '../types';
import { FontCombobox } from './FontCombobox';
import '../sidebar.css';

interface SidebarProps {
  config: CardConfig;
  onChange: (config: CardConfig) => void;
  open: boolean;
  onToggle: () => void;
}

interface SectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/** Collapsible section within the sidebar. */
function Section({ title, defaultOpen = true, children }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="sidebar-section">
      <button
        className="sidebar-section-header"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span>{title}</span>
        <span className="sidebar-chevron">{open ? '\u25B2' : '\u25BC'}</span>
      </button>
      {open && <div className="sidebar-section-body">{children}</div>}
    </div>
  );
}

/** Sidebar panel for customizing card text and colors. */
export function Sidebar({ config, onChange, open, onToggle }: SidebarProps) {
  /** Updates a single field on the config. */
  function update<K extends keyof CardConfig>(key: K, value: CardConfig[K]) {
    onChange({ ...config, [key]: value });
  }

  return (
    <aside className={`sidebar${open ? '' : ' sidebar--collapsed'}`}>
      <button className="sidebar-toggle-btn" onClick={onToggle} type="button" title={open ? 'Collapse sidebar' : 'Expand sidebar'}>
        {open ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
      </button>
      {open && <div className="sidebar-title">Customize</div>}

      {open && <Section title="Brand">
        <label className="sidebar-field">
          <span>Brand Name</span>
          <input
            type="text"
            value={config.brandName}
            onChange={(e) => update('brandName', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Tagline</span>
          <input
            type="text"
            value={config.tagline}
            onChange={(e) => update('tagline', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Alt Tagline</span>
          <input
            type="text"
            value={config.taglineAlt}
            onChange={(e) => update('taglineAlt', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Services</span>
          <input
            type="text"
            value={config.services.join(', ')}
            onChange={(e) =>
              update(
                'services',
                e.target.value.split(',').map((s) => s.trim()),
              )
            }
          />
        </label>
      </Section>}

      {open && <Section title="Contact">
        <label className="sidebar-field">
          <span>Name</span>
          <input
            type="text"
            value={config.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Title</span>
          <input
            type="text"
            value={config.title}
            onChange={(e) => update('title', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Phone</span>
          <input
            type="text"
            value={config.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Email</span>
          <input
            type="text"
            value={config.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Website</span>
          <input
            type="text"
            value={config.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </label>
        <label className="sidebar-field">
          <span>Location</span>
          <input
            type="text"
            value={config.location}
            onChange={(e) => update('location', e.target.value)}
          />
        </label>
      </Section>}

      {open && <Section title="Typography">
        <div className="sidebar-field">
          <span>Display Font</span>
          <FontCombobox
            value={config.fontDisplay}
            onChange={(v) => update('fontDisplay', v)}
          />
        </div>
        <div className="sidebar-field">
          <span>Body Font</span>
          <FontCombobox
            value={config.fontBody}
            onChange={(v) => update('fontBody', v)}
          />
        </div>
      </Section>}

      {open && <Section title="Colors">
        <label className="sidebar-field sidebar-color-field">
          <span>Navy</span>
          <div className="color-input-row">
            <input
              type="color"
              value={config.navy}
              onChange={(e) => update('navy', e.target.value)}
            />
            <input
              type="text"
              value={config.navy}
              onChange={(e) => update('navy', e.target.value)}
              className="color-hex-input"
            />
          </div>
        </label>
        <label className="sidebar-field sidebar-color-field">
          <span>Amber</span>
          <div className="color-input-row">
            <input
              type="color"
              value={config.amber}
              onChange={(e) => update('amber', e.target.value)}
            />
            <input
              type="text"
              value={config.amber}
              onChange={(e) => update('amber', e.target.value)}
              className="color-hex-input"
            />
          </div>
        </label>
        <label className="sidebar-field sidebar-color-field">
          <span>Cream</span>
          <div className="color-input-row">
            <input
              type="color"
              value={config.cream}
              onChange={(e) => update('cream', e.target.value)}
            />
            <input
              type="text"
              value={config.cream}
              onChange={(e) => update('cream', e.target.value)}
              className="color-hex-input"
            />
          </div>
        </label>
      </Section>}
    </aside>
  );
}
