export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-background px-6 py-16 text-center">
      <h2 className="text-2xl font-bold">No gears found</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        You haven't added any gear yet. Start by listing your first rental gear.
      </p>
    </div>
  );
}
