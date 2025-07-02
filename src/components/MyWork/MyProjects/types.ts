export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  tags: string[];
  imageClassName?: string; // Optional className for custom styling
}