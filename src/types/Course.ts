export interface ContentSection {
  title: string;
  text: string;
  imageUrl?: string;
  bulletPoints?: string[];
}

export interface ModuleContent {
  imageUrl: string;
  text: string;
  sections?: ContentSection[];
}

export interface Resource {
  title: string;
  type: string;
  size: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  content: ModuleContent;
  resources?: Resource[];
  quiz?: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  level: string;
  duration: string;
  enrollments: number;
  featured: boolean;
  modules: Module[];
}