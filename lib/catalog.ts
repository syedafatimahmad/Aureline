export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  badge?: string
  color?: string
}

export const categories = [
  { name: 'Women', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', note: 'Quietly considered pieces' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85', note: 'Rituals for every day' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85', note: 'The finishing touch' },
]

export const products: Product[] = [
  { id: 'linen-dress', name: 'The Linen Dress', category: 'New arrivals', price: 188, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85', badge: 'New' },
  { id: 'everyday-tote', name: 'Everyday Tote', category: 'Accessories', price: 124, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85' },
  { id: 'silk-shirt', name: 'Soft Silk Shirt', category: 'New arrivals', price: 156, image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85' },
  { id: 'body-oil', name: 'Neroli Body Oil', category: 'Beauty', price: 48, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85', badge: 'Bestseller' },
]

export const reviews = [
  { quote: 'The kind of pieces that make getting dressed feel effortless.', name: 'Mara L.', detail: 'Verified customer' },
  { quote: 'Beautifully made, beautifully packed, and already part of my daily ritual.', name: 'Eve R.', detail: 'Verified customer' },
  { quote: 'A considered edit of things I actually want to live with.', name: 'Sofia K.', detail: 'Verified customer' },
]

export const formatPrice = (price: number) => `$${price.toLocaleString('en-US')}`

export type CartLine = Product & { quantity: number }
