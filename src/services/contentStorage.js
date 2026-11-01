import { useState, useEffect } from 'react';
import { GET_INSPIRED_IMAGES } from '../constants/inspiration';
import { PARTNERS } from '../constants/partners';

const STORAGE_KEY_INSPIRED = 'look_and_like_inspired_images_v1';
const STORAGE_KEY_PARTNERS = 'look_and_like_partners_v1';
const EVENT_NAME = 'look_and_like_content_changed';

/**
 * Get stored or default Get Inspired Images
 */
export function getStoredInspiredImages() {
  if (typeof window === 'undefined') return GET_INSPIRED_IMAGES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_INSPIRED);
    if (!raw) return GET_INSPIRED_IMAGES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : GET_INSPIRED_IMAGES;
  } catch (err) {
    console.warn('Failed to parse stored inspired images:', err);
    return GET_INSPIRED_IMAGES;
  }
}

/**
 * Save Get Inspired Images to localStorage and notify listeners
 */
export function saveStoredInspiredImages(images) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_INSPIRED, JSON.stringify(images));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { type: 'inspired', data: images } }));
  } catch (err) {
    console.error('Failed to save inspired images to localStorage:', err);
  }
}

/**
 * Reset Get Inspired Images to original defaults
 */
export function resetStoredInspiredImages() {
  if (typeof window === 'undefined') return GET_INSPIRED_IMAGES;
  try {
    localStorage.removeItem(STORAGE_KEY_INSPIRED);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { type: 'inspired', data: GET_INSPIRED_IMAGES } }));
    return GET_INSPIRED_IMAGES;
  } catch (err) {
    console.error('Failed to reset inspired images:', err);
    return GET_INSPIRED_IMAGES;
  }
}

/**
 * Get stored or default Partners
 */
export function getStoredPartners() {
  if (typeof window === 'undefined') return PARTNERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PARTNERS);
    if (!raw) return PARTNERS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : PARTNERS;
  } catch (err) {
    console.warn('Failed to parse stored partners:', err);
    return PARTNERS;
  }
}

/**
 * Save Partners to localStorage and notify listeners
 */
export function saveStoredPartners(partners) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_PARTNERS, JSON.stringify(partners));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { type: 'partners', data: partners } }));
  } catch (err) {
    console.error('Failed to save partners to localStorage:', err);
  }
}

/**
 * Reset Partners to original defaults
 */
export function resetStoredPartners() {
  if (typeof window === 'undefined') return PARTNERS;
  try {
    localStorage.removeItem(STORAGE_KEY_PARTNERS);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { type: 'partners', data: PARTNERS } }));
    return PARTNERS;
  } catch (err) {
    console.error('Failed to reset partners:', err);
    return PARTNERS;
  }
}

/**
 * Reactive React hook for components consuming or managing live content
 */
export function useContentStorage() {
  const [inspiredImages, setInspiredImages] = useState(getStoredInspiredImages);
  const [partners, setPartners] = useState(getStoredPartners);

  useEffect(() => {
    const handleUpdate = () => {
      setInspiredImages(getStoredInspiredImages());
      setPartners(getStoredPartners());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return {
    inspiredImages,
    partners,
    saveInspiredImages: (imgs) => {
      saveStoredInspiredImages(imgs);
      setInspiredImages(imgs);
    },
    resetInspiredImages: () => {
      const def = resetStoredInspiredImages();
      setInspiredImages(def);
    },
    savePartners: (pts) => {
      saveStoredPartners(pts);
      setPartners(pts);
    },
    resetPartners: () => {
      const def = resetStoredPartners();
      setPartners(def);
    }
  };
}

