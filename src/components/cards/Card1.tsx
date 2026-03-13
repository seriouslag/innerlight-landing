import type { CardConfig } from '../../types';
import { HexagonIcon } from '../HexagonIcon';
import { HexagonIconLarge } from '../HexagonIconLarge';
import { ContactGrid } from '../ContactInfo';

/** "The Classic" -- Navy front with brand mark and tagline, cream back with contact grid. */
export function Card1({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-1-front">
          <div className="card-left">
            <div className="brand-mark">
              <HexagonIcon />
              <span>{config.brandName}</span>
            </div>
            <div className="tagline">
              You bring the <span className="amber">light.</span>
            </div>
          </div>
          <div className="card-right">
            <HexagonIconLarge strokeColor="#f5f1eb" headColor="#f5f1eb" />
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-1-back">
          <div className="person-info">
            <div className="person-name">{config.name}</div>
            <div className="person-title">{config.title}</div>
          </div>
          <ContactGrid config={config} className="contact-grid" />
        </div>
      </div>
    </div>
  );
}
