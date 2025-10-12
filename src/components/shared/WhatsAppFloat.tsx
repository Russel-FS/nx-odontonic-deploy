import { site } from "@/config/site.config";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      aria-label="WhatsApp"
      className="fixed right-4 bottom-4 inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lg bg-green-500 text-white"
    >
      {/* simple icon */}
      <span className="text-2xl">⌕</span>
    </a>
  );
}
