/** Encode path segments for public assets (handles spaces in filenames). */
export function publicPath(path: string): string {
  return path
    .split("/")
    .map((segment, index) =>
      index === 0 || segment === "" ? segment : encodeURIComponent(segment),
    )
    .join("/");
}
