import { ChevronRight, Star, Truck, Shield, Headphones, CreditCard, Smartphone, Laptop, Speaker, HardDrive, Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onViewProduct: (productId: string) => void;
  onViewCategory: (category: string) => void;
}

const heroSlides = [

  {
    title: 'Bàn Phím Cơ RGB',
    subtitle: 'Switch cao cấp - Đèn LED RGB đa dạng',
    image: 'https://images.unsplash.com/photo-1645802106095-765b7e86f5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMHJnYnxlbnwxfHx8fDE3NjgyNzk0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '⌨️ Mới ra mắt',
    gradient: 'from-purple-600 via-purple-500 to-pink-500'
  },

  {
    title: 'Phụ Kiện Smartphone',
    subtitle: 'Sạc nhanh - Ốp lưng - Kính cường lực',
    image: 'https://images.unsplash.com/photo-1742762378893-2dd7f8470867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYWNjZXNzb3JpZXMlMjBtb2Rlcm58ZW58MXx8fHwxNzY4Mzc1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '📱 Đa dạng',
    gradient: 'from-green-600 via-green-500 to-emerald-500'
  },
  {
    title: 'Thiết Bị Văn Phòng',
    subtitle: 'Chuột - Bàn phím - Webcam chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1766338055425-e150dec44af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBhY2Nlc3NvcmllcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjgzNzUxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '💼 Văn phòng',
    gradient: 'from-orange-600 via-orange-500 to-yellow-500'
  }
];

const categories = [
  { name: 'Phụ kiện điện thoại', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Phụ kiện laptop', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
  { name: 'Thiết bị âm thanh', icon: Speaker, color: 'bg-pink-100 text-pink-600' },
  { name: 'Thiết bị lưu trữ', icon: HardDrive, color: 'bg-green-100 text-green-600' },
  { name: 'Phụ kiện gaming', icon: Gamepad2, color: 'bg-red-100 text-red-600' },
];

const features = [
  {
    icon: Truck,
    title: 'Giao hàng nhanh 2-4h',
    description: 'Miễn phí ship nội thành'
  },
  {
    icon: Shield,
    title: 'Bảo hành dài hạn',
    description: 'Đổi trả trong 30 ngày'
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Tư vấn miễn phí'
  },
  {
    icon: CreditCard,
    title: 'Trả góp 0%',
    description: 'Qua thẻ tín dụng'
  }
];

const flashSaleProducts = [
  {
    id: '1',
    name: 'Tai nghe Gaming RGB Pro',
    price: 890000,
    originalPrice: 1490000,
    image: 'https://images.unsplash.com/photo-1672044631233-22b268dc6416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkcGhvbmVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgwMjg5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 40,
    rating: 4.8,
    sold: 245
  },
  {
    id: '2',
    name: 'Bàn phím cơ Gaming RGB',
    price: 1290000,
    originalPrice: 2190000,
    image: 'https://images.unsplash.com/photo-1645802106095-765b7e86f5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMHJnYnxlbnwxfHx8fDE3Njc5NjI5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 41,
    rating: 4.9,
    sold: 189
  },
  {
    id: '3',
    name: 'Tai nghe không dây AirPods Pro',
    price: 4990000,
    originalPrice: 6490000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzY3OTYxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 23,
    rating: 5.0,
    sold: 423
  },
  {
    id: '4',
    name: 'Set phụ kiện laptop cao cấp',
    price: 590000,
    originalPrice: 990000,
    image: 'https://images.unsplash.com/photo-1661169398798-a91a4eb3ee08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBrZXlib2FyZCUyMG1vdXNlfGVufDF8fHx8MTc2ODAyODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 40,
    rating: 4.7,
    sold: 312
  }
];

const newProducts = [
  {
    id: '5',
    name: 'Ốp lưng iPhone 15 Pro Max',
    price: 290000,
    image: 'https://images.unsplash.com/photo-1726763581169-e7643070cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3Njc5MzQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Mới',
    rating: 4.6,
    sold: 89
  },
  {
    id: '6',
    name: 'Sạc nhanh 65W GaN',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1583573864191-af3ab094887a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY4MDI1NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Mới',
    rating: 4.9,
    sold: 156
  },
  {
    id: '7',
    name: 'Chuột gaming không dây',
    price: 690000,
    image: 'https://images.unsplash.com/photo-1661169398798-a91a4eb3ee08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBrZXlib2FyZCUyMG1vdXNlfGVufDF8fHx8MTc2ODAyODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Mới',
    rating: 4.8,
    sold: 234
  },
  {
    id: '8',
    name: 'Loa bluetooth cao cấp',
    price: 1290000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzY3OTYxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Mới',
    rating: 4.7,
    sold: 178
  }
];

export function HomePage({ onNavigate, onViewProduct, onViewCategory }: HomePageProps) {
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <div className="w-full overflow-hidden py-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Carousel
            plugins={[autoplayPlugin]}
            className="w-full rounded-2xl overflow-hidden shadow-xl"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className={`bg-gradient-to-r ${slide.gradient} text-white rounded-2xl shadow-lg`}>
                    <div className="px-6 py-8 md:py-10">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="px-4 md:px-0">
                          <Badge className="bg-white/20 text-white mb-3 text-sm px-3 py-1">
                            {slide.badge}
                          </Badge>
                          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                            {slide.title}
                          </h1>
                          <p className="text-base md:text-lg mb-4 text-white/90">
                            {slide.subtitle}
                          </p>
                          <div className="flex gap-3">
                            <Button 
                              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                              onClick={() => onNavigate('products')}
                            >
                              Mua ngay
                              <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                            >
                              Xem thêm
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <ImageWithFallback
                            src={slide.image}
                            alt={slide.title}
                            className="w-full max-w-md h-auto rounded-xl object-cover shadow-2xl drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 shadow-lg" />
            <CarouselNext className="right-2 md:right-4 shadow-lg" />
          </Carousel>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-sm">{feature.title}</div>
                  <div className="text-xs text-gray-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Danh mục nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onViewCategory(category.name)}
              className="group"
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow shadow-sm">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div className="font-medium text-sm">{category.name}</div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h2 className="text-2xl font-bold">FLASH SALE</h2>
                <p className="text-sm text-white/80">Giảm đến 50% - Số lượng có hạn</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <span className="text-sm">Kết thúc trong:</span>
              <div className="flex gap-2">
                <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">12</div>
                <div>:</div>
                <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">45</div>
                <div>:</div>
                <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">23</div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => onNavigate('products')}
            >
              Xem tất cả
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSaleProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onViewProduct(product.id)}
              className="group text-left"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow shadow-md">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600">
                    -{product.discount}%
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.sold} đã bán)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-lg">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                  <div className="mt-2 bg-red-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-red-600 h-full rounded-full" 
                      style={{ width: `${(product.sold / 500) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Đã bán {product.sold}/500</div>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* New Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Sản phẩm mới</h2>
          <Button 
            variant="outline"
            onClick={() => onNavigate('products')}
          >
            Xem tất cả
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onViewProduct(product.id)}
              className="group text-left"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow shadow-md">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.sold})</span>
                  </div>
                  <span className="text-red-600 font-bold text-lg">
                    {product.price.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Trả góp 0%</h3>
            <p className="mb-4">Duyệt nhanh chóng, nhận hàng ngay</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 shadow-md">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Tích điểm đổi quà</h3>
            <p className="mb-4">Mua sắm nhiều, nhận ưu đãi lớn</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 shadow-md">
              Xem quà tặng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}