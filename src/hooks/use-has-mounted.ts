"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * True only after client hydration. Backed by useSyncExternalStore instead
 * of an effect + setState so it doesn't trigger an extra render pass.
 */
export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
