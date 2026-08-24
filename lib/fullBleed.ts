/** Pages that use the sticky top nav without the profile sidebar / bottom nav. */
export function isFullBleedPage(pathname: string): boolean {
  return !pathname.startsWith("/projects/");
}
