export default function SkeletonCard() {
  return (
    <article className="grid gap-4 rounded-xl border border-white/6 bg-[#111111] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_10px_22px_rgba(0,0,0,0.18)] sm:grid-cols-[auto_1fr]">
      <div className="flex items-start gap-3 sm:flex-col sm:items-center sm:gap-2">
        <div className="h-22 w-22 rounded-full border border-white/6 bg-[#171717]" />
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:hidden">
          <div className="h-4 w-28 rounded bg-[#171717]" />
          <div className="h-4 w-20 rounded bg-[#171717]" />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <div className="hidden flex-col gap-1 sm:flex">
          <div className="h-4 w-28 rounded bg-[#171717]" />
          <div className="h-4 w-20 rounded bg-[#171717]" />
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="h-3 w-14 rounded bg-[#171717]" />
              <div className="h-3 w-24 rounded bg-[#171717]" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="h-3 w-20 rounded bg-[#171717]" />
              <div className="h-4 w-10 rounded bg-[#171717]" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="h-3 w-14 rounded bg-[#171717]" />
              <div className="h-4 w-8 rounded bg-[#171717]" />
            </div>
          </div>

          <div className="h-7 w-24 rounded-full border border-white/6 bg-[#070709]" />
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <div className="flex flex-col gap-1">
              <div className="h-3 w-12 rounded bg-[#171717]" />
              <div className="mt-1 h-4 w-24 rounded bg-[#171717]" />
            </div>
          </div>

          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <div className="flex flex-col gap-1">
              <div className="h-3 w-16 rounded bg-[#171717]" />
              <div className="mt-1 h-4 w-24 rounded bg-[#171717]" />
            </div>
          </div>

          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <div className="flex flex-col gap-1">
              <div className="h-3 w-16 rounded bg-[#171717]" />
              <div className="mt-1 h-4 w-24 rounded bg-[#171717]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
