const PagePlaceholder = ({ eyebrow, title, description }) => (
  <section className="container-page flex min-h-[55vh] flex-col justify-center gap-4 py-16 sm:py-24">
    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{eyebrow}</p>
    <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-content sm:text-4xl lg:text-5xl">{title}</h1>
    <p className="max-w-xl text-base text-content-muted sm:text-lg">{description}</p>
  </section>
);

export default PagePlaceholder;
