export interface TextSection {
  type: 'text';
  title?: string;
  content: string;
}

export interface StepsSection {
  type: 'steps';
  title: string;
  steps: {
    title: string;
    description: string;
    status: string;
    color: string;
    hoverColor: string;
  }[];
}

export interface TimelineSection {
  type: 'timeline';
  title: string;
  events: {
    title: string;
    date: string;
    description?: string;
  }[];
}

export interface ImageSection {
  type: 'image';
  title: string;
  png: string;
}

export interface TableSection {
  type: 'table';
  title: string;
  headers: string[];
  rows: string[][];
}

export type Section = TextSection | StepsSection | TimelineSection | ImageSection | TableSection;

export interface SectionsData {
  sections: Section[];
}