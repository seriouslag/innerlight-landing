import { useState } from 'react';
import { Palette, RotateCcw } from 'lucide-react';
import type { ComponentType } from 'react';
import type { CardConfig, CardColorOverride } from '../types';
import { deriveColorVars } from '../utils/colors';

const DEFAULT_LABELS: Record<keyof CardColorOverride, string> = {
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
  editableColors: Array<keyof CardColorOverride>;
  colorLabels: Partial<Record<keyof CardColorOverride, string>>;
}

/** Wraps a card design with its label, title, and description. */
export function CardSection({
  designNumber,
  title,
  description,
  CardComponent,
  config,
  onColorOverride,
  editableColors,
  colorLabels,
}: CardSectionProps) {
  const [panelOpen, setPanelOpen] = useState(false);

  const override = config.cardOverrides[designNumber];
  const hasOverride = override !== undefined;

  const navy = override?.navy ?? config.navy;
  const amber = override?.amber ?? config.amber;
  const cream = override?.cream ?? config.cream;

  const cardStyle = hasOverride
    ? (deriveColorVars(navy, amber, cream) as React.CSSProperties)
    : undefined;

  const currentValues: Record<keyof CardColorOverride, string> = { navy, amber, cream };

  function handleColorChange(key: keyof CardColorOverride, value: string) {
    onColorOverride(designNumber, { ...override, [key]: value });
  }

  function handleReset() {
    onColorOverride(designNumber, undefined);
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
          title="Edit card colors"
          type="button"
        >
          <Palette size={16} />
          Colors
        </button>

        {panelOpen && (
          <div className="card-color-panel">
            {editableColors.map((key) => (
              <div key={key} className="card-color-panel-row">
                <label>
                  <span>{colorLabels[key] ?? DEFAULT_LABELS[key]}</span>
                  <div className="color-input-row">
                    <input
                      type="color"
                      value={currentValues[key]}
                      onChange={(e) => handleColorChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={currentValues[key]}
                      onChange={(e) => handleColorChange(key, e.target.value)}
                      className="color-hex-input"
                    />
                  </div>
                </label>
              </div>
            ))}
            {hasOverride && (
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
