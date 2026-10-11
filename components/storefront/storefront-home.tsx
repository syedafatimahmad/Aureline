'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { categories, formatPrice, products, reviews, type CartLine } from '@/lib/catalog'

function IconButton({ label, children, onClick }: { label: string; children: React.ReactNode; onClick?: () => void }) {
  return <button aria-label={label} onClick={onClick} className="icon-button">{children}</button>
}

function SectionHeading({ eyebrow, title, action = 'View all' }: { eyebrow: string; title: string; action?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><a href="#shop" className="text-link">{action}<ArrowRight aria-hidden="true" /></a></div>
}

export default function StorefrontHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [wishlist, setWishlist] = useState<string[]>([])
  const [cart, setCart] = useState<CartLine[]>([])
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart])
  const toggleWishlist = (id: string) => setWishlist((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id])
  const addToCart = (product: (typeof products)[number]) => setCart((items) => {
    const existing = items.find((item) => item.id === product.id)
    return existing ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]
  })

  return <main>
    <div className="announcement">Complimentary shipping on orders over $150 <span>•</span> Welcome to Aureline</div>
    <header className="site-header">
      <div className="header-inner">
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <a href="#top" className="wordmark">Aureline</a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation"><a href="#shop">Shop</a><a href="#categories">Categories</a><a href="#journal">Journal</a><a href="#about">About</a></nav>
        <div className="header-actions"><IconButton label="Search"><Search /></IconButton><IconButton label={`Wishlist, ${wishlist.length} items`} onClick={() => document.getElementById('wishlist')?.scrollIntoView({ behavior: 'smooth' })}><Heart fill={wishlist.length ? 'currentColor' : 'none'} /></IconButton><IconButton label={`Shopping bag, ${cartCount} items`} onClick={() => document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' })}><ShoppingBag /><span className="bag-count">{cartCount}</span></IconButton></div>
      </div>
    </header>

    <section className="hero" id="top"><div className="hero-image" role="img" aria-label="Woman wearing a flowing cream dress"></div><div className="hero-copy"><p className="eyebrow">The summer edit · 2024</p><h1>Things made<br /><em>to be lived in.</em></h1><p className="hero-text">A considered collection of clothing, beauty, and objects for the everyday.</p><a className="button button-dark" href="#shop">Explore the edit <ArrowRight aria-hidden="true" /></a></div></section>

    <section className="intro" id="about"><p>Good design is a daily ritual.<br />Aureline is a collection of<br /><em>quietly beautiful things.</em></p></section>

    <section className="content-section" id="categories"><SectionHeading eyebrow="Shop by category" title="Find your everyday" /><div className="category-grid">{categories.map((category) => <a href="#shop" className="category-card" key={category.name}><img src={category.image} alt="" /><div><h3>{category.name}</h3><p>{category.note}</p><ArrowRight aria-hidden="true" /></div></a>)}</div></section>

    <section className="content-section products-section" id="shop"><SectionHeading eyebrow="The edit" title="New, now" /><div className="product-grid">{products.map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} />{product.badge && <span className="product-badge">{product.badge}</span>}<button aria-label={`${wishlist.includes(product.id) ? 'Remove' : 'Add'} ${product.name} ${wishlist.includes(product.id) ? 'from' : 'to'} wishlist`} className="wishlist-button" onClick={() => toggleWishlist(product.id)}><Heart fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={() => addToCart(product)}>Add to bag</button></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.category}</p></div><strong>{formatPrice(product.price)}</strong></div></article>)}</div></section>

    <section className="campaign" id="journal"><div className="campaign-image"></div><div className="campaign-copy"><p className="eyebrow">Aureline objects</p><h2>The beauty<br /><em>of less.</em></h2><p>Thoughtful objects for a slower, softer life. Discover the pieces we return to, season after season.</p><a href="#shop" className="text-link">Read the journal <ArrowRight aria-hidden="true" /></a></div></section>

    <section className="review-section"><SectionHeading eyebrow="Kind words" title="From our community" action="" /><div className="review-grid">{reviews.map((review) => <blockquote key={review.name}><span>“</span><p>{review.quote}</p><footer><strong>{review.name}</strong><small>{review.detail}</small></footer></blockquote>)}</div></section>

    <section className="newsletter"><div><p className="eyebrow">The Aureline letter</p><h2>Notes on living<br /><em>well.</em></h2></div><div><p>Seasonal edits, considered stories, and a little inspiration for your inbox.</p>{subscribed ? <p className="success-message">Thank you — you&apos;re on the list.</p> : <form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true) }}><input aria-label="Email address" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button aria-label="Subscribe"><ArrowRight /></button></form>}</div></section>

    <footer className="site-footer"><div><a className="wordmark" href="#top">Aureline</a><p>Made for the everyday.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#shop">Shop all</a><a href="#categories">Categories</a><a href="#journal">Journal</a></div><div><strong>Help</strong><a href="#about">Contact</a><a href="#about">Shipping & returns</a><a href="#about">FAQ</a></div><div><strong>Follow</strong><a href="#about">Instagram</a><a href="#about">Pinterest</a><a href="#about">TikTok</a></div></div><p className="copyright">© 2024 Aureline. All rights reserved.</p></footer>
    <div id="cart" className="sr-only" aria-live="polite">{cartCount} items in your shopping bag.</div><div id="wishlist" className="sr-only" aria-live="polite">{wishlist.length} items in your wishlist.</div>
  </main>
}
