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
  isLoading: boolean
  loadProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,

  async loadProducts() {
    set({ isLoading: true });
    try {
      const res = await api.get('/products?limit=12');
      set({ products: res.data.products });
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
