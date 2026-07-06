import { pillTag } from "@/lib/layout";

type ProjectTagsProps = {
  tags: string[];
};

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <ul className="mt-3 flex flex-wrap justify-start gap-2">
      {tags.map((tag) => (
        <li key={tag} className={pillTag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
