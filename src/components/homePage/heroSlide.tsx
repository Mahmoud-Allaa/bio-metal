import Image from "next/image";

interface HeroSlideProps {
  id: number;
  title: string;
  description: string;
  image: string;
  button?: {
    text: string;
    href: string;
  };
}

export default function HeroSlide({ id, title, description, image, button }: HeroSlideProps) {
  return (
    <div className="relative h-full w-full">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority={id === 1}
      />
      
      {/* Elegant Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 via-primary-dark/50 to-primary-dark/70" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight animate-fade-in-scale animation-delay-600 tracking-wide text-[#D2DCEB] drop-shadow-[0_0_10px_rgba(210,220,235,0.8)] drop-shadow-[0_0_20px_rgba(210,220,235,0.6)]">
            {title}
            </h1>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl mb-12 text-background-light max-w-3xl mx-auto animate-fade-in-up animation-delay-900 leading-relaxed">
            {description}
          </p>
          
          {button && (
            <div className="animate-fade-in-up animation-delay-1200">
              <a
                href={button.href}
                className="btn-secondary inline-block"
              >
                {button.text}
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Elegant Corner Decorations */}
      {/* <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30 animate-fade-in-left"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30 animate-fade-in-right"></div>
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30 animate-fade-in-left animation-delay-600"></div>
      <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30 animate-fade-in-right animation-delay-600"></div> */}
    </div>
  );
}
