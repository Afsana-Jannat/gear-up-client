// import { getCategories } from '@/service/category/getCategories';
// import { CategoryCard } from './CategoryCard';

// export async function CategoriesSection() {
//   const categories = await getCategories();

//   return (
//     <section className="py-16 lg:py-24">
//       <div className="container mx-auto px-4">
//         <div className="mb-14 text-center">
//           <span className="inline-flex rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//             Browse Categories
//           </span>

//           <h2 className="mt-5 text-4xl font-bold tracking-tight">
//             Find Your Perfect Gear
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
//             Explore premium outdoor and sports equipment from trusted providers
//             for every adventure.
//           </p>
//         </div>

//         {categories.length > 0 ? (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {categories.map((category) => (
//               <CategoryCard key={category.id} category={category} />
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-xl border border-dashed p-12 text-center">
//             <h3 className="text-lg font-semibold">No Categories Found</h3>

//             <p className="mt-2 text-muted-foreground">
//               Categories will appear here when they are available.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
import { getCategories } from '@/service/category/getCategories';
import { CategoryCarousel } from './CategoryCarousel';

export async function CategoriesSection() {
  const categories = await getCategories();

  if (!categories.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-neutral-100 blur-3xl opacity-60" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-neutral-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-[1700px] px-6">
        <CategoryCarousel categories={categories} />
      </div>
    </section>
  );
}
