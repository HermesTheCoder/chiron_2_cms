interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  accent?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  accent = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${
      alignment === 'center' ? 'text-center' : 
      alignment === 'right' ? 'text-right' : 'text-left'
    }`}>
      {subtitle && (
        <span className={`text-sm md:text-base uppercase tracking-widest font-medium mb-3 inline-block ${accent ? 'text-primary' : 'text-text-light'}`}>
          {subtitle}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold relative">
        {title}
        {accent && (
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full opacity-20"></span>
        )}
      </h2>
    </div>
  );
} 