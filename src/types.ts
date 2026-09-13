export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  painTrigger: string;
  solution: string;
  badge?: string;
  whatsappMessage: string;
  iconName: string;
}

export interface NeighborhoodRegion {
  region: string;
  neighborhoods: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge: string;
}
