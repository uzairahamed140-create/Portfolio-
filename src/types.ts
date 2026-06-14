/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DeveloperProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  technologies: string[];
  projectUrl: string;
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
