/**
 * Join a site-relative path with Astro's configured base (GitHub Pages safe).
 */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const clean = path.replace(/^\//, '');
  return `${normalizedBase}${clean}`;
}

export function assetPath(file: string): string {
  return withBase(`assets/${file.replace(/^assets\//, '')}`);
}
