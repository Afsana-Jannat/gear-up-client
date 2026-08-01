type Props = {
  total: number;
};

export default function BrowseHeader({ total }: Props) {
  return (
    <section className="mb-10">
      <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        Gear Collection
      </span>

      <h1 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">
        Browse Sports & Outdoor Gear
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Discover premium sports and outdoor equipment for camping, hiking,
        photography, cycling and more. Rent only what you need.
      </p>

      <p className="mt-6 text-sm font-medium text-muted-foreground">
        {total} gear available
      </p>
    </section>
  );
}
