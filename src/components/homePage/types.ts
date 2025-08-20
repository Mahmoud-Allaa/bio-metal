export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  button?: {
    text: string;
    href: string;
  };
}
