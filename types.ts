
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: Priority;
  completed: boolean;
}

export interface CalendarEvent {
  id: string;
  title:string;
  start: string;
  end: string;
  allDay: boolean;
  color: string;
}

export interface RoadmapItem {
  id: string;
  date: string;
  title: string;
  description: string;
  progress: number;
  completed: boolean;
}

export interface UserProfile {
    name: string;
    role: string;
    initials: string;
}

export type Theme = 'light' | 'dark';
