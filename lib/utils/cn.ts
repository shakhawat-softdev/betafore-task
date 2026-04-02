/**
 * CSS class name utility
 * Combines class names and removes falsy values
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Conditionally adds classes based on condition
 */
export function withCondition(
  baseClass: string,
  conditionalClass: string,
  condition: boolean,
): string {
  return condition ? `${baseClass} ${conditionalClass}` : baseClass;
}
