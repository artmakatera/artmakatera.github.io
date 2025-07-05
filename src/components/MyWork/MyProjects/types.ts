import type { ImageMetadata } from "astro";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  link: string;
  linkText: string;
  tags: string[];
  imageClassName?: string; // Optional className for custom styling
}