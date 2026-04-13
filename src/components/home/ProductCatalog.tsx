import { products } from '@/lib/data';
import { ProductCard } from './ProductCard';

export function ProductCatalog() {
  return (
    <section id="product-catalog" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover our range of premium ghee, crafted with care for your well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
