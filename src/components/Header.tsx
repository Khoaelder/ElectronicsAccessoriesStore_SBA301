import { Search, ShoppingCart, User, Menu, Heart, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import type { Page, User as UserType } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  cartCount: number;
  user: UserType | null;
}

export function Header({ onNavigate, cartCount, user }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">Hotline: 1900-xxxx</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hệ thống 50+ cửa hàng toàn quốc</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="hover:underline font-medium">Tra cứu đơn hàng</button>
            <button className="hover:underline font-medium">Tìm cửa hàng</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 shrink-0 group ml-2"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl tracking-tight">PK</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-xl leading-none tracking-tight text-gray-900">PHỤ KIỆN</div>
              <div className="text-xs text-gray-500 mt-0.5 tracking-wide">ĐIỆN TỬ</div>
            </div>
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Tìm kiếm sản phẩm, danh mục, thương hiệu..."
                className="pl-12 pr-4 h-12 bg-gray-50 border-gray-300 focus:bg-white focus:border-red-500 focus:shadow-md rounded-xl text-sm transition-shadow"
              />
            </div>
            <div className="mt-2.5 flex flex-wrap gap-3 text-xs">
              <button className="text-gray-600 hover:text-red-600 transition-colors">Tai nghe gaming</button>
              <span className="text-gray-300">•</span>
              <button className="text-gray-600 hover:text-red-600 transition-colors">Ốp lưng iPhone 15</button>
              <span className="text-gray-300">•</span>
              <button className="text-gray-600 hover:text-red-600 transition-colors">Chuột không dây</button>
              <span className="text-gray-300">•</span>
              <button className="text-gray-600 hover:text-red-600 transition-colors">Sạc nhanh</button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mr-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative hidden md:flex h-11 w-11 rounded-xl hover:bg-gray-100"
            >
              <Heart className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="relative h-11 w-11 rounded-xl hover:bg-gray-100"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600 text-xs font-bold">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {user ? (
              <Button 
                variant="ghost"
                onClick={() => onNavigate('account')}
                className="hidden md:flex items-center gap-2 h-11 px-4 rounded-xl hover:bg-gray-100 hover:shadow-sm transition-shadow"
              >
                <User className="w-5 h-5" />
                <span className="font-medium text-sm">{user.name}</span>
              </Button>
            ) : (
              <Button 
                onClick={() => onNavigate('login')}
                className="hidden md:flex bg-red-600 hover:bg-red-700 h-11 px-6 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                Đăng nhập
              </Button>
            )}

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden h-11 w-11 rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-3.5 text-sm overflow-x-auto">
            <button 
              onClick={() => onNavigate('home')}
              className="font-semibold text-red-600 whitespace-nowrap hover:text-red-700 transition-colors"
            >
              Trang chủ
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap transition-colors"
            >
              Phụ kiện điện thoại
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap transition-colors"
            >
              Phụ kiện laptop
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap transition-colors"
            >
              Thiết bị âm thanh
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap transition-colors"
            >
              Phụ kiện gaming
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap transition-colors"
            >
              Thiết bị lưu trữ
            </button>
            <button className="text-red-600 font-semibold whitespace-nowrap hover:text-red-700 transition-colors">
              🔥 Flash Sale
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}