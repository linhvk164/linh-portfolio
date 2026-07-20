type ProjectTagsProps = {
  tags: string[];
  className?: string;
};

export function ProjectTags({ tags, className = "" }: ProjectTagsProps) {
  return (
    <ul className={`flex flex-wrap justify-start gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-[#ececec] px-3 py-1 text-xs font-medium text-[#5c5c5c]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
