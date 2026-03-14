import { useState } from 'react';
import { Palette, RotateCcw } from 'lucide-react';
import type { ComponentType } from 'react';
import type { CardConfig, CardColorOverride, CardFontOverride } from '../types';
import { deriveColorVars } from '../utils/colors';
import { DISPLAY_FONTS, BODY_FONTS } from '../utils/fonts';

const DEFAULT_COLOR_LABELS: Record<keyof CardColorOverride, string> = {
  navy: 'Navy',
  amber: 'Amber',
  cream: 'Cream',
};

interface CardSectionProps {
  designNumber: number;
  title: string;
  description: string;
  CardComponent: ComponentType<{ config: CardConfig }>;
  config: CardConfig;
  onColorOverride: (designNumber: number, override: CardColorOverride | undefined) => void;
  onFontOverride: (designNumber: number, override: CardFontOverride | undefined) => void;
  editableColors: Array<keyof CardColorOverride>;
  colorLabels: Partial<Record<keyof CardColorOverride, string>>;
}

/** Wraps a card design with its label, title, description, and per-card style editor. */
export function CardSection({
  designNumber,
  title,
  description,
  CardComponent,
  config,
  onColorOverride,
  onFontOverride,
  editableColors,
  colorLabels,
}: CardSectionProps) {
  const [panelOpen, setPanelOpen] = useState(false);

  // Color override resolution
  const colorOverride = config.cardOverrides[designNumber];
  const hasColorOverride = colorOverride !== undefined;
  const navy = colorOverride?.navy ?? config.navy;
  const amber = colorOverride?.amber ?? config.amber;
  const cream = colorOverride?.cream ?? config.cream;

  // Font override resolution
  const fontOverride = config.fontOverrides[designNumber];
  const hasFontOverride = fontOverride !== undefined;

  const hasAnyOverride = hasColorOverride || hasFontOverride;

  // Build inline style: only apply vars that are actually overridden per card.
  // Non-overridden vars fall through to :root, staying reactive to global changes.
  const inlineVars: Record<string, string> = {};
  if (hasColorOverride) {
    Object.assign(inlineVars, deriveColorVars(navy, amber, cream));
  }
  if (fontOverride?.fontDisplay) {
    inlineVars['--font-display'] = fontOverride.fontDisplay;
  }
  if (fontOverride?.fontBody) {
    inlineVars['--font-body'] = fontOverride.fontBody;
  }
  const cardStyle = Object.keys(inlineVars).length > 0
    ? (inlineVars as React.CSSProperties)
    : undefined;

  const currentColors: Record<keyof CardColorOverride, string> = { navy, amber, cream };
  const currentFontDisplay = fontOverride?.fontDisplay ?? config.fontDisplay;
  const currentFontBody = fontOverride?.fontBody ?? config.fontBody;

  function handleColorChange(key: keyof CardColorOverride, value: string) {
    onColorOverride(designNumber, { ...colorOverride, [key]: value });
  }

  function handleFontChange(key: keyof CardFontOverride, value: string) {
    onFontOverride(designNumber, { ...fontOverride, [key]: value });
  }

  function handleReset() {
    onColorOverride(designNumber, undefined);
    onFontOverride(designNumber, undefined);
    setPanelOpen(false);
  }

  return (
    <section className="card-section">
      <div className="card-section-label">Design {designNumber}</div>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="card-section-card-wrapper">
        <div style={cardStyle}>
          <CardComponent config={config} />
        </div>

        <button
          className={`card-edit-btn${panelOpen ? ' open' : ''}`}
          onClick={() => setPanelOpen(!panelOpen)}
          title="Edit card style"
          type="button"
        >
          <Palette size={16} />
          Style
        </button>

        {panelOpen && (
          <div className="card-color-panel">
            {editableColors.length > 0 && (
              <div className="card-style-group">
                <div className="card-style-group-title">Colors</div>
                {editableColors.map((key) => (
                  <div key={key} className="card-color-panel-row">
                    <label>
                      <span>{colorLabels[key] ?? DEFAULT_COLOR_LABELS[key]}</span>
                      <div className="color-input-row">
                        <input
                          type="color"
                          value={currentColors[key]}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                        />
                        <input
                          type="text"
                          value={currentColors[key]}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="color-hex-input"
                        />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="card-style-group">
              <div className="card-style-group-title">Fonts</div>
              <div className="card-color-panel-row">
                <label>
                  <span>Display</span>
                  <select
                    className="card-font-select"
                    value={currentFontDisplay}
                    onChange={(e) => handleFontChange('fontDisplay', e.target.value)}
                  >
                    {DISPLAY_FONTS.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="card-color-panel-row">
                <label>
                  <span>Body</span>
                  <select
                    className="card-font-select"
                    value={currentFontBody}
                    onChange={(e) => handleFontChange('fontBody', e.target.value)}
                  >
                    {BODY_FONTS.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {hasAnyOverride && (
              <button className="card-color-reset-btn" onClick={handleReset} type="button">
                <RotateCcw size={13} />
                Reset to global
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
