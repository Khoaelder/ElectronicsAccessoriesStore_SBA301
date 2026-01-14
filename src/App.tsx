import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductListPage } from './components/ProductListPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { AccountPage } from './components/AccountPage';
import { Footer } from './components/Footer';

export type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'checkout' | 'login' | 'register' | 'account';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  points: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => 
        i.id === id ? { ...i, quantity } : i
      ));
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const login = (email: string, password: string) => {
    // Mock login
    setUser({
      name: 'Nguyễn Văn A',
      email,
      phone: '0912345678',
      points: 1250
    });
    setCurrentPage('home');
  };

  const register = (name: string, email: string, password: string, phone: string) => {
    // Mock register
    setUser({
      name,
      email,
      phone,
      points: 0
    });
    setCurrentPage('home');
  };

  const logout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const viewProduct = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentPage('product-detail');
  };

  const viewCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onViewProduct={viewProduct} onViewCategory={viewCategory} />;
      case 'products':
        return <ProductListPage onNavigate={setCurrentPage} onViewProduct={viewProduct} onAddToCart={addToCart} category={selectedCategory} />;
      case 'product-detail':
        return <ProductDetailPage productId={selectedProduct} onNavigate={setCurrentPage} onAddToCart={addToCart} />;
      case 'cart':
        return <CartPage cartItems={cartItems} onNavigate={setCurrentPage} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />;
      case 'checkout':
        return <CheckoutPage cartItems={cartItems} user={user} onNavigate={setCurrentPage} onClearCart={clearCart} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} onLogin={login} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} onRegister={register} />;
      case 'account':
        return <AccountPage user={user} onNavigate={setCurrentPage} onLogout={logout} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onViewProduct={viewProduct} onViewCategory={viewCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        onNavigate={setCurrentPage} 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        user={user}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
