import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { CardConfig } from '../types';

interface ContactRowsProps {
  config: CardConfig;
  className?: string;
}

/** Renders phone, email, website, location as icon + text rows. */
export function ContactRows({ config, className }: ContactRowsProps) {
  return (
    <div className={className}>
      <div className="contact-row">
        <Phone />
        <span>{config.phone}</span>
      </div>
      <div className="contact-row">
        <Mail />
        <span>{config.email}</span>
      </div>
      <div className="contact-row">
        <Globe />
        <span>{config.website}</span>
      </div>
      <div className="contact-row">
        <MapPin />
        <span>{config.location}</span>
      </div>
    </div>
  );
}

interface ContactGridProps {
  config: CardConfig;
  className?: string;
}

/** Renders contact info in a 2-column grid layout. */
export function ContactGrid({ config, className }: ContactGridProps) {
  return (
    <div className={className}>
      <div className="contact-item">
        <Phone />
        <span>{config.phone}</span>
      </div>
      <div className="contact-item">
        <Mail />
        <span>{config.email}</span>
      </div>
      <div className="contact-item">
        <Globe />
        <span>{config.website}</span>
      </div>
      <div className="contact-item">
        <MapPin />
        <span>{config.location}</span>
      </div>
    </div>
  );
}

interface ContactLinesProps {
  config: CardConfig;
  className?: string;
}

/** Renders contact info as contact-line items (used in Design 3). */
export function ContactLines({ config, className }: ContactLinesProps) {
  return (
    <div className={className}>
      <div className="contact-line">
        <Phone />
        <span>{config.phone}</span>
      </div>
      <div className="contact-line">
        <Mail />
        <span>{config.email}</span>
      </div>
      <div className="contact-line">
        <Globe />
        <span>{config.website}</span>
      </div>
    </div>
  );
}
