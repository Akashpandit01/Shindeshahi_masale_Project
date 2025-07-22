import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    { key: 'all', label: t('allProducts') },
    { key: 'powders', label: t('powders') },
    { key: 'masalas', label: t('masalas') },
    { key: 'chutneys', label: t('chutneys') }
  ];

  const sortOptions = [
    { key: 'default', label: 'Default' },
    { key: 'price-low-high', label: 'Price: Low to High' },
    { key: 'price-high-low', label: 'Price: High to Low' },
    { key: 'discount', label: 'Highest Discount' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = t(product.nameKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t(product.descriptionKey).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        filtered.sort((a, b) => {
          const discountA = a.originalPrice && a.originalPrice > a.price 
            ? Math.round(((a.originalPrice - a.price) / a.originalPrice) * 100) 
            : 0;
          const discountB = b.originalPrice && b.originalPrice > b.price 
            ? Math.round(((b.originalPrice - b.price) / b.originalPrice) * 100) 
            : 0;
          return discountB - discountA;
        });
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, t]);

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="products-header"
        >
          <h1 className="products-title">
            {t('products')}
          </h1>
          <p className="products-subtitle">
            Explore our complete collection of authentic Indian spices, powders, and masalas
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="products-filters"
        >
          <div className="filters-row">
            {/* Search */}
            <div className="search-container">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="search-wrapper"
              >
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </motion.div>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <Filter size={20} className="filter-icon" />
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Sort Filter */}
            <div className="filter-group">
              <ArrowUpDown size={20} className="filter-icon" />
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                {sortOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </motion.select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="products-content"
        >
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="no-products"
            >
              <p className="no-products-title">No products found matching your criteria.</p>
              <p className="no-products-subtitle">Try adjusting your search or filter options.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="products-results"
        >
          <p className="results-text">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;