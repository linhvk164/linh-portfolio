/** Dispatched when home case-study covers are in their resting grid positions. */
export const HOME_COVERS_SETTLED_EVENT = "linh:home-covers-settled";
export const HOME_COVERS_RESET_EVENT = "linh:home-covers-reset";

let coversSettled = false;

export function resetHomeCoversSettled() {
  coversSettled = false;
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(HOME_COVERS_RESET_EVENT));
}

export function peekHomeCoversSettled() {
  return coversSettled;
}

export function notifyHomeCoversSettled() {
  coversSettled = true;
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(HOME_COVERS_SETTLED_EVENT));
}
