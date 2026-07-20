function LazyExample() {
  return (
    <section className="page-card">
      <h2>Приклад lazy loading</h2>
      <p className="page-intro">
        Цей компонент завантажується динамічно за допомогою React.lazy та Suspense.
      </p>
      <p>
        Lazy loading покращує час першого рендеру, завантажуючи код тільки тоді, коли він потрібен.
      </p>
    </section>
  );
}

export default LazyExample;
