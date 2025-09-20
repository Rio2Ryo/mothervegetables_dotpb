'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="fixed top-0 right-0 p-4" style={{ zIndex: 1100 }}>
      <button
        onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
        className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300 border border-gray-600 rounded-md bg-black/70 backdrop-blur-sm"
      >
        {language === 'EN' ? 'EN' : 'JP'}
      </button>
    </header>
  )
}