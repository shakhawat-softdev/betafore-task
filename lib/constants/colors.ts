/**
 * Color scheme and design tokens
 * Following WIN Store brand guidelines
 */

export const COLORS = {
  primary: "#00b4b4" as const,
  primaryDark: "#009999" as const,
  header: "#03484D" as const,
  dark: "#222831" as const,
  light: "#f9f9f9" as const,
  lightGray: "#AEAEAE" as const,
  gray: {
    50: "#f9fafb" as const,
    100: "#f3f4f6" as const,
    200: "#e5e7eb" as const,
    300: "#d1d5db" as const,
    500: "#6b7280" as const,
    700: "#374151" as const,
    800: "#1f2937" as const,
  },
  text: {
    primary: "#333f4f" as const,
    secondary: "#666666" as const,
    light: "#999999" as const,
    muted: "#ABA3A3" as const,
  },
  backgrounds: {
    card: "#ffffff" as const,
    section: "#f9f9f9" as const,
    hover: "#f0f0f0" as const,
  },
} as const;

export type ColorKey = keyof typeof COLORS;
export type ColorValue = (typeof COLORS)[ColorKey];
