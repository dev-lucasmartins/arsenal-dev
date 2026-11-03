import { useCallback, useRef, useState } from "react";

interface UseHoverIntentOptions {
  openDelay?: number;
  closeDelay?: number;
}

export function useHoverIntent({
  openDelay = 150,
  closeDelay = 120,
}: UseHoverIntentOptions = {}) {
  const [isHovering, setIsHovering] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const cancelTimers = useCallback(() => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
  }, []);

  const open = useCallback(() => {
    cancelTimers();
    openTimer.current = setTimeout(() => setIsHovering(true), openDelay);
  }, [cancelTimers, openDelay]);

  const close = useCallback(() => {
    cancelTimers();
    closeTimer.current = setTimeout(() => setIsHovering(false), closeDelay);
  }, [cancelTimers, closeDelay]);

  const openImmediately = useCallback(() => {
    cancelTimers();
    setIsHovering(true);
  }, [cancelTimers]);

  const closeImmediately = useCallback(() => {
    cancelTimers();
    setIsHovering(false);
  }, [cancelTimers]);

  return {
    isHovering,
    open,
    close,
    openImmediately,
    closeImmediately,
    cancelTimers,
  };
}
