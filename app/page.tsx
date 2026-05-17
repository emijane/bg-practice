import PlayerSearch from "./components/PlayerSearch";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <section className="flex w-full max-w-3xl flex-col gap-5">
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex flex-col gap-1">
              <h1 className="max-w-2xl text-[34px] font-semibold tracking-[-0.04em] text-[#f5f5f5] sm:text-[40px]">
                Player Lookup
              </h1>
              <p className="max-w-2xl text-sm text-[#a1a1a1] sm:text-[15px]">
                Search public Overwatch profiles by BattleTag. Private profiles won&apos;t return competitive details here.
              </p>
            </div>
          </div>

          <PlayerSearch />
        </section>
      </div>
    </main>
  );
}
