import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Home, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { orderId, totalPrice } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h1>
          <Link
            to="/"
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Go to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <CheckCircle size={32} className="text-green-600" />
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('orderConfirmed')}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {t('thankYou')}! Your order has been successfully placed and is being processed.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                { label: t('orderNumber'), value: orderId },
                { label: 'Total Amount', value: `₹${totalPrice}` },
                { label: 'Order Date', value: new Date().toLocaleDateString() },
                { label: 'Expected Delivery', value: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString() }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Order Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 text-sm">
              {[
                { label: 'Order Placed', active: true },
                { label: 'Processing', active: true },
                { label: 'Shipped', active: false },
                { label: 'Delivered', active: false }
              ].map((status, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.2 }}
                      className={`w-3 h-3 rounded-full ${
                        status.active ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></motion.div>
                    <span className={status.active ? 'text-gray-600' : 'text-gray-400'}>
                      {status.label}
                    </span>
                  </div>
                  {index < 3 && <div className="w-8 h-px bg-gray-300"></div>}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <Package size={20} />
                <span>Continue Shopping</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Home size={20} />
                <span>Back to Home</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your registered email address. 
              You can track your order status in your account dashboard.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;