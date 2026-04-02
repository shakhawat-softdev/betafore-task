/**
 * SectionNotice Component
 * Displays informational messages or error states
 */

interface SectionNoticeProps {
  message: string;
}

export default function SectionNotice({ message }: SectionNoticeProps) {
  return (
    <div className="rounded border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-600">
      {message}
    </div>
  );
}
