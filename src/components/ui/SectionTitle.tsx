export default function SectionTitle({
  title,
  subtitle,
  className = "",
  centered = true,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-16 md:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 tracking-tight leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
