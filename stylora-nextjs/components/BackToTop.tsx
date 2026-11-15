'use client';

export default function BackToTop() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

