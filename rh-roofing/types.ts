export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}