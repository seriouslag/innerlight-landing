import type { CardConfig } from '../../types';
import { HexagonIcon } from '../HexagonIcon';
import { HexagonIconLarge } from '../HexagonIconLarge';
import { ContactRows } from '../ContactInfo';

/** "The Headline" -- Large bold tagline on cream front with background icon, navy back with contact rows. */
export function Card6({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-6-front">
          <div className="headline-large">
            You bring
            <br />
            the <span className="amber">light.</span>
          </div>
          <div className="brand-line">
            <HexagonIcon />
            <span>{config.brandName}</span>
          </div>
          <div className="bg-icon">
            <HexagonIconLarge />
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-6-back">
          <div className="person-name">{config.name}</div>
          <div className="person-title">{config.title}</div>
          <ContactRows config={config} className="contact-stack" />
        </div>
      </div>
    </div>
  );
}
