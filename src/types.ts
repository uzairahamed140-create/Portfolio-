/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  isConcept: boolean;
  before: {
    title: string;
    metrics: string[];
    description: string;
    bgColor: string;
  };
  after: {
    title: string;
    metrics: string[];
    description: string;
    bgColor: string;
  };
  outcomes: {
    label: string;
    value: string;
  }[];
  watchBrand3D?: boolean; // If true, embed the interactive 3D watch in this case study card
  accentColor: string;
  imagePath?: string;
  technologies?: string[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
