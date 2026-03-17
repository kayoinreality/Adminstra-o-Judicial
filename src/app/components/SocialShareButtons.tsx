import { Facebook, Twitter, Linkedin, Link, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

export function SocialShareButtons({ url, title }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-gray-600 mr-2">Compartilhar:</span>
      
      <button
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
        aria-label="Compartilhar no Facebook"
      >
        <Facebook className="w-4 h-4" />
        <span className="text-sm">Facebook</span>
      </button>

      <button
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A91DA] transition-colors"
        aria-label="Compartilhar no Twitter"
      >
        <Twitter className="w-4 h-4" />
        <span className="text-sm">Twitter</span>
      </button>

      <button
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#095196] transition-colors"
        aria-label="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
        <span className="text-sm">LinkedIn</span>
      </button>

      <button
        onClick={() => openShareWindow(shareLinks.whatsapp)}
        className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm">WhatsApp</span>
      </button>

      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors relative"
        aria-label="Copiar link"
      >
        <Link className="w-4 h-4" />
        <span className="text-sm">{copied ? 'Copiado!' : 'Copiar link'}</span>
      </button>
    </div>
  );
}
