import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  image: string;
  date?: string;
}

export interface CaseStudy {
  id: number;
  image: string;
  title: string;
  description: string;
  duration?: string;
  painLevel?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}