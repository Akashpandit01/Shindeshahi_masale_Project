import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import './ImageSlider.css';
import hing from "../assets/high-space.jpg";
  import indiancondiments from "../assets/indian-condiments.jpg";

   import closeup from "../assets/closeup-shot.jpg";


const ImageSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');

  const sliderImages = [
    {
      id: 1,
      image: hing,
      titleKey: 'slide1Title',
      subtitleKey: 'slide1Subtitle',
      descriptionKey: 'slide1Description'
    },
    {
      id: 2,
      image: indiancondiments,
      titleKey: 'slide2Title',
      subtitleKey: 'slide2Subtitle',
      descriptionKey: 'slide2Description'
    },
    {
      id: 3,
      image: closeup,
      titleKey: 'slide3Title',
      subtitleKey: 'slide3Subtitle',
      descriptionKey: 'slide3Description'
    }
  ];

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock location based on coordinates (in real app, use reverse geocoding)
          const mockLocations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];
          const randomLocation = mockLocations[Math.floor(Math.random() * mockLocations.length)];
          setLocation(randomLocation);
        },
        () => {
          setLocation('India');
        }
      );
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="slider-slide"
        >
          <div
            className="slider-background"
            style={{
              backgroundImage: `url(${sliderImages[currentSlide].image})`
            }}
          >
            {/* Overlay */}
            <div className="slider-overlay"></div>
            
            {/* Content */}
            <div className="slider-content">
              <div className="slider-text-container">
                {/* Location Welcome */}
                {location && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="location-welcome"
                  >
                    <motion.div
                      animate={{ bounce: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <MapPin size={20} />
                    </motion.div>
                    <span>Welcome from {location}</span>
                  </motion.div>
                )}
                
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="slider-main-title"
                >
                  {t(sliderImages[currentSlide].titleKey)}
                </motion.h1>
                
                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="slider-subtitle"
                >
                  {t(sliderImages[currentSlide].subtitleKey)}
                </motion.h2>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="slider-description"
                >
                  {t(sliderImages[currentSlide].descriptionKey)}
                </motion.p>
                
                {/* Shop Now Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="slider-button-container"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/products" className="slider-shop-button">
                      <span>{t('shopNow')}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="slider-nav-button slider-nav-left"
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="slider-nav-button slider-nav-right"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {sliderImages.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;