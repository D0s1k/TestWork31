import { create } from 'zustand';
import api from '@/lib/axios';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface ProductState {
  products: Product[];
  loadProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  async loadProducts() {
    const res = await api.get('/products?limit=12');
    set({ products: res.data.products });
  },
}));
