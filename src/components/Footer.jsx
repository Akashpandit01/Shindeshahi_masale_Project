import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Spade, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-500 flex items-center justify-center"
              >
                <img 
                  src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center" 
                  alt="Shindeshai Masale Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Spade className="h-8 w-8 text-orange-500" />
              </motion.div>
             <span className="text-xl font-bold">{t('brandTitle')}</span>

            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-4"
            >
              {t('trustedSource')} {t('bringFinest')}
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-300 ${social.color} transition-colors`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { name: t('home'), href: '/' },
                { name: t('products'), href: '/products' },
                { name: t('contact'), href: '/contact' },
                { name: t('aboutUs'), href: '#' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="text-gray-300 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3">
             {[
  { icon: MapPin, text: 'Property NO.320, At./Po. Koparde, Tal. Khandala, Dist. Satara - 415521, Maharashtra, India', size: 40 },
  { icon: Phone, text: '+91 9657216197 / 9822463076', size: 18 },
  { icon: Mail, text: 'Shindeshahimasale@gmail.com', size: 18 }
].map((contact, index) => (
  <motion.li
    key={index}
    whileHover={{ x: 5 }}
    className="flex items-start space-x-2"
  >
    <contact.icon size={contact.size} className="text-orange-500 mt-1" />
    <span className="text-gray-300 text-sm">{contact.text}</span>
  </motion.li>
))}

            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-300 text-sm">
            © 2025 Shindeshai Masale. {t('allRightsReserved')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
