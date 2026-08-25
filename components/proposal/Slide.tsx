"use client";

type SlideProps = {
  number: string;
  title: string;
  intro?: string;
  interactive?: boolean;
  /** Extra content under the left-column intro (interactive slides only) */
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export function Slide({
  number,
  title,
  intro,
  interactive = false,
  aside,
  children,
}: SlideProps) {
  if (interactive) {
    return (
      <div className="flex min-h-0 flex-1 items-center py-4">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="space-y-4 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--proposal-muted)]">
                Slide {number}
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[var(--proposal-ink)] md:text-4xl">
                {title}
              </h1>
              {intro ? (
                <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--proposal-muted)] md:text-lg">
                  {intro}
                </p>
              ) : null}
            </div>
            {aside ? <div className="max-w-md">{aside}</div> : null}
          </div>

          <div className="max-h-[min(70vh,40rem)] space-y-4 overflow-y-auto p-1 text-left">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--proposal-muted)]">
          Slide {number}
        </p>
        <h1 className="mt-1 max-w-2xl text-2xl font-semibold tracking-tight text-[var(--proposal-ink)] md:text-3xl">
          {title}
        </h1>
        <div className="mt-5 w-full space-y-4 text-center [&_.text-left]:text-left">
          {children}
        </div>
      </div>
    </div>
  );
}
