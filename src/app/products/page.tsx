'use client';

import { useEffect, useRef } from 'react';
import { useProductStore } from '@/store/productStore';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import cls from '@/app/products/style.module.scss';
import { Loader } from '@/components/Loader/Loader';

export default function ProductsPage() {
  const { products, loadProducts, isLoading } = useProductStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className={cls.productsPage}>
      <h1>Products</h1>
      {isLoading 
      ? <Loader/> 
      : <div className={cls.carouselWrapper}>
          <button className={cls.scrollBtn} onClick={scrollLeft}>
            ←
          </button>

          <div className={cls.productsCont} ref={scrollRef}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button className={cls.scrollBtn} onClick={scrollRight}>
            →
          </button>
        </div>
      }
    </div>
  );
}
