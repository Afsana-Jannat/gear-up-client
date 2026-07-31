export default function Loading() {
  return (
    <div className="container mx-auto py-20">
      <div className="animate-pulse space-y-6">
        <div className="h-96 rounded-lg bg-muted" />

        <div className="space-y-3">
          <div className="h-8 w-1/2 rounded bg-muted" />
          <div className="h-5 w-1/3 rounded bg-muted" />
          <div className="h-5 w-full rounded bg-muted" />
          <div className="h-5 w-5/6 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
