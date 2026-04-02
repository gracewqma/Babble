export default function BabbleBoard() {
  const rows = 7;
  const cols = 7;
  const cells = Array.from({ length: rows * cols });

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Babble</h1>

        <div className="inline-block rounded-2xl bg-white p-4 shadow-sm">
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {cells.map((_, index) => (
              <div
                key={index}
                className="h-14 w-14 rounded-md border border-neutral-300 bg-amber-50"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
