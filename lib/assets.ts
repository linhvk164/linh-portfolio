import { BASE_PATH } from "@/lib/basePath";

/** Encode path segments and prefix basePath when set (custom domain uses ""). */
export function publicPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const encoded = path
    .split("/")
    .map((segment, index) =>
      index === 0 || segment === "" ? segment : encodeURIComponent(segment),
    )
    .join("/");

  return `${BASE_PATH}${encoded}`;
}
