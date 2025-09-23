type HeroProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
};

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  const background = imageUrl ||
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section
      className="relative h-72 sm:h-96 bg-cover bg-center"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-primary) 75%, transparent)",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
          {subtitle ? (
            <p className="mt-3 text-lg max-w-2xl mx-auto">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
