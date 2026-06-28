export interface BlogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  // Shown above the post title and used for social previews by default.
  headerImage?: BlogImage;
  // Optional Open Graph/Twitter override when the visible header should differ.
  socialImage?: BlogImage;
  content: string; // Markdown content with optional {{tweet:https://...}} markers
}
