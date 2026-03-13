import type { CardConfig } from '../../types';
import { ContactGrid } from '../ContactInfo';

/** "The Editorial" -- CSS grid front with bold headline and hexagon icon, cream back with 2-column contact grid. */
export function Card5({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-5-front">
          <div className="text-side">
            <div className="headline">
              Light Up
              <br />
              Your Online
              <br />
              Presence
            </div>
          </div>
          <div className="icon-side">
            <svg viewBox="0 0 200 200" fill="none">
              <polygon
                points="100,15 180,55 180,145 100,185 20,145 20,55"
                stroke="#1a2068"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M116,48 C136,56 148,76 148,100 C148,116 140,130 128,140 L128,160 L80,160 L80,140 C68,130 60,116 60,100 C60,72 80,48 108,48 Z"
                stroke="#e8991c"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <polygon
                points="100,72 124,86 124,114 100,128 76,114 76,86"
                fill="#e8991c"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-5-back">
          <div className="top-row">
            <div>
              <div className="person-name">{config.name}</div>
              <div className="person-title">{config.title}</div>
            </div>
            <div className="brand-small">{config.brandName}</div>
          </div>
          <ContactGrid config={config} className="contact-grid-2col" />
        </div>
      </div>
    </div>
  );
}
