import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Package, Award } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const { t } = useTranslation();
  const featuredProducts = products.slice(0, 6);

  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Package, value: '20+', label: 'Premium Products' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Image Slider */}
      <ImageSlider />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                </motion.div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular authentic Indian spices and masalas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <span>View All Products</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
  {t('whyChoose')}
</h2>
<div className="space-y-4">
  {[
    {
      title: t('premiumQuality'),
      description: t('premiumQualityDesc'),
    },
    {
      title: t('traditionalMethods'),
      description: t('traditionalMethodsDesc'),
    },
    {
      title: t('noPreservatives'),
      description: t('noPreservativesDesc'),
    }
  ].map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex items-start space-x-3"
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1"
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
      <div>
        <h3 className="font-semibold mb-1">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    </motion.div>
  ))}
</div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Indian Spices"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;