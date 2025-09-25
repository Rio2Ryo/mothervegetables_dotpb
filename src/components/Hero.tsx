'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToToken = () => {
    const element = document.getElementById('token')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-24 md:pt-32 lg:pt-40">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="w-80 md:w-96 mx-auto">
            <Image
              src="/logo-uCgt3dQl.png"
              alt="MOTHER VEGETABLE"
              width={400}
              height={150}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>
        </div>


        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-8 mt-12 px-4">
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {t({
                JP: '35億年前の地球のはじまりの生命',
                EN: 'Life from the beginning of Earth 3.5 billion years ago'
              })}
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {t({
                JP: '「マザーベジタブル」',
                EN: '"Mother Vegetable"'
              })}
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {t({
                JP: '地球が生み出した生命力を、あなたに。',
                EN: 'Bringing you the life force created by Earth.'
              })}
            </p>
          </div>
        </div>


        {/* Products Grid */}
        <div className="max-w-7xl mx-auto mb-12 mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Achieve Section */}
            <div className="text-center flex flex-col p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-green-400 mb-3 tracking-wide">
                  Achieve
                </h3>
                <p className="text-lg text-white mb-2 font-medium">for Body</p>
                <p className="text-sm text-gray-300 font-medium mb-6">
                  {t({
                    JP: '24時間あなたの目標を達成させます',
                    EN: 'Achieving your goals 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[200px] mx-auto flex-1 flex items-center">
                <Image
                  src="/Achive_image.png"
                  alt="Achieve Product"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Confidence Section */}
            <div className="text-center flex flex-col p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-green-400 mb-3 tracking-wide">
                  Confidence
                </h3>
                <p className="text-lg text-white mb-2 font-medium">for Skin</p>
                <p className="text-sm text-gray-300 font-medium mb-6">
                  {t({
                    JP: '24時間あなたに自信を与えます',
                    EN: 'Giving you confidence 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[200px] mx-auto flex-1 flex items-center">
                <Image
                  src="/confidence_image_touka.png"
                  alt="Confidence Product"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Forever Section */}
            <div className="text-center flex flex-col p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-green-400 mb-3 tracking-wide">
                  Forever
                </h3>
                <p className="text-lg text-white mb-2 font-medium">for Pet</p>
                <p className="text-sm text-gray-300 font-medium mb-6">
                  {t({
                    JP: '24時間あなたのペットを支えます',
                    EN: 'Supporting your pets 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[200px] mx-auto flex-1 flex items-center justify-center">
                <Image
                  src="/forever_image_touka.png"
                  alt="Forever Product"
                  width={200}
                  height={200}
                  className="w-full object-contain"
                  style={{ marginTop: '-8px' }}
                  priority
                />
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  )
}