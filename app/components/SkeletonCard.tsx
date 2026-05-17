export default function SkeletonCard() {
  return (
    <article className="oc-card overflow-hidden">
      <div className="relative">
        <div className="oc-banner-fallback h-20 w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.46)_100%)]" />
      </div>

      <div className="relative px-4 pb-4">
        <div className="absolute left-4 top-0 z-20 -translate-y-[40%]">
          <div className="oc-avatar-frame h-[84px] w-[84px] ring-2 ring-[var(--surface)]" />
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="flex min-w-0 items-center pl-[96px] pt-3">
            <div className="flex min-w-0 flex-col gap-1">
              <div className="oc-skeleton-block h-5 w-28" />
              <div className="oc-skeleton-block h-3.5 w-[72px]" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
            <div className="oc-pill h-7 w-24" />
            <div className="oc-pill h-7 w-24" />
            <div className="oc-pill h-7 w-32" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="oc-skeleton-block h-3 w-44" />
        </div>

        <div className="oc-surface-strong mt-2 overflow-hidden">
          <div className="grid sm:grid-cols-3">
            <div className="px-3 py-3">
              <div className="flex flex-col gap-1">
                <div className="oc-skeleton-block h-3 w-10" />
                <div className="oc-skeleton-block h-4 w-[72px]" />
              </div>
            </div>

            <div className="border-t border-white/6 px-3 py-3 sm:border-l sm:border-t-0">
              <div className="flex flex-col gap-1">
                <div className="oc-skeleton-block h-3 w-10" />
                <div className="oc-skeleton-block h-4 w-20" />
              </div>
            </div>

            <div className="border-t border-white/6 px-3 py-3 sm:border-l sm:border-t-0">
              <div className="flex flex-col gap-1">
                <div className="oc-skeleton-block h-3 w-14" />
                <div className="oc-skeleton-block h-4 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
