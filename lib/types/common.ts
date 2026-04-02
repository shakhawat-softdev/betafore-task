/**
 * Common/shared types used throughout the application
 */

/**
 * Result type for server actions and async operations
 * Provides a discriminated union for success/failure states
 */
export type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

/**
 * Standard API response envelope
 * Most APIs wrap data in success/message/data structure
 */
export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Standard component props types
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}
