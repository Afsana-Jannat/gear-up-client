'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Category } from '@/types/category';

type Props = {
  categories: Category[];
  brands: string[];

  selectedCategory?: string;
  selectedBrand?: string;
  selectedSort?: string;

  minPrice?: string;
  maxPrice?: string;
};

export default function BrowseFilterBar({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  selectedSort,
  minPrice,
  maxPrice,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [categoryId, setCategoryId] = useState(selectedCategory || '');
  const [brand, setBrand] = useState(selectedBrand || '');
  const [sort, setSort] = useState(selectedSort || 'createdAt-desc');

  const [min, setMin] = useState(minPrice || '');
  const [max, setMax] = useState(maxPrice || '');

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (search) params.set('search', search);

    if (categoryId) params.set('categoryId', categoryId);

    if (brand) params.set('brand', brand);

    if (min) params.set('minPrice', min);

    if (max) params.set('maxPrice', max);

    const [sortBy, sortOrder] = sort.split('-');

    params.set('sortBy', sortBy);
    params.set('sortOrder', sortOrder);

    router.push(`/gear?${params.toString()}`);
  };

  const resetFilters = () => {
    setSearch('');
    setCategoryId('');
    setBrand('');
    setMin('');
    setMax('');
    setSort('createdAt-desc');

    router.push('/gear');
  };

  return (
    <div className="mb-10 rounded-3xl border bg-card p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div className="relative xl:col-span-2">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            className="pl-11"
            placeholder="Search gear..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                applyFilters();
              }
            }}
          />
        </div>

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="rounded-lg border bg-background px-3"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="rounded-lg border bg-background px-3"
        >
          <option value="">All Brands</option>

          {brands.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <Input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border bg-background px-3"
        >
          <option value="createdAt-desc">Newest</option>
          <option value="createdAt-asc">Oldest</option>
          <option value="pricePerDay-asc">Price: Low → High</option>
          <option value="pricePerDay-desc">Price: High → Low</option>
        </select>

        <Button onClick={applyFilters} className="h-11">
          Apply Filters
        </Button>

        <Button variant="outline" onClick={resetFilters} className="h-11">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
