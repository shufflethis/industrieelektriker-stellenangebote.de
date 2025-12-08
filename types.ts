export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedAt: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum UserRole {
  EMPLOYER = 'EMPLOYER',
  EMPLOYEE = 'EMPLOYEE'
}

export interface GeminiResponse {
  text: string;
  error?: string;
}