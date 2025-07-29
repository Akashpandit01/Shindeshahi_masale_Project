import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { t } = useTranslation();
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={item.product.images[0]}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {t(item.product.nameKey)}
        </h3>
        <p className="text-gray-600 text-sm">{item.product.weight}</p>
        <p className="text-orange-600 font-bold">₹{item.product.price}</p>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Minus size={16} />
          </motion.button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Plus size={16} />
          </motion.button>
        </div>

        <div className="text-right">
          <p className="font-bold text-gray-900">
            ₹{item.product.price * item.quantity}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(item.product.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;