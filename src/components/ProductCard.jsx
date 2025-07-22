import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, index }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="product-card"
    >
      <Link to={`/products/${product.id}`}>
        <div className="product-image-container">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="product-image"
          />
          
          {/* Image Navigation */}
          {product.images.length > 1 && (
            <div className="image-navigation">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="nav-button nav-prev"
              >
                <ChevronLeft size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="nav-button nav-next"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          )}

          {/* Image Dots */}
          {product.images.length > 1 && (
            <div className="image-dots">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
          
          {/* Discount Badge */}
          {product.originalPrice && product.originalPrice > product.price && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="discount-badge"
            >
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </motion.div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="stock-overlay">
              <span className="out-of-stock-badge">
                {t('outOfStock')}
              </span>
            </div>
          )}

          {/* Hover Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="hover-actions"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="action-button"
            >
              <Heart size={16} />
            </motion.button>
          </motion.div>
        </div>

        <div className="product-content">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="product-title"
          >
            {t(product.nameKey)}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="product-description"
          >
            {t(product.descriptionKey)}
          </motion.p>
          
          <div className="product-price-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="price-container"
            >
              <span className="current-price">
                ₹{product.price}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="original-price">
                  ₹{product.originalPrice}
                </span>
              )}
            </motion.div>
            <span className="product-weight">{product.weight}</span>
          </div>

          <div className="product-actions">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
            >
              <ShoppingCart size={16} />
              <span>{t('addToCart')}</span>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="view-details-btn"
              >
                <Eye size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;