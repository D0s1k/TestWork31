'use client';
import Image from "next/image";
import { useAuth } from "@/store/authStore";
import cls from '@/components/ProductCard/ProductCard.module.scss'

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
  }
  

export const ProductCard = ({ product }: { product: Product }) => {
    const { token } = useAuth();
  
    return (
      <div className={cls.cardCont}>
        <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        {token && <button>Add to cart</button>}
      </div>
    );
  }
