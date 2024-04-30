import { useLayoutEffect } from "react";

/**
 * Hook for locking body element scroll
 */
export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};
