import type { CardConfig } from '../types';
import type { ComponentType } from 'react';

interface CardSectionProps {
  designNumber: number;
  title: string;
  description: string;
  CardComponent: ComponentType<{ config: CardConfig }>;
  config: CardConfig;
}

/** Wraps a card design with its label, title, and description. */
export function CardSection({
  designNumber,
  title,
  description,
  CardComponent,
  config,
}: CardSectionProps) {
  return (
    <section className="card-section">
      <div className="card-section-label">Design {designNumber}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <CardComponent config={config} />
    </section>
  );
}
