type Props = {
  total: number;
};

export default function CategoriesHeader({ total }: Props) {
  return (
    <section className="mb-12">
      <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        Categories
      </span>

      <h1 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">
        Explore All Categories
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Browse sports and outdoor categories to quickly discover the equipment
        you need for your next adventure.
      </p>

      <p className="mt-6 text-sm font-medium text-muted-foreground">
        {total} categories available
      </p>
    </section>
  );
}
