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
          {/* First Row - 3 products */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-4 md:mb-8">

            {/* Achieve Section */}
            <div className="text-center flex flex-col p-2 sm:p-4 md:p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm h-full">
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <h3 className="text-sm sm:text-xl md:text-3xl font-black text-green-400 mb-1 sm:mb-2 md:mb-3 tracking-wide">
                  Achieve
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-white mb-0.5 sm:mb-1 font-medium">for Body</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-300 font-medium">
                  {t({
                    JP: '24時間あなたの目標を達成させます',
                    EN: 'Achieving your goals 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[80px] sm:max-w-[150px] md:max-w-[200px] mx-auto flex-1 flex items-center mt-2 sm:mt-4 md:mt-6">
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
            <a href="/confidence" className="text-center flex flex-col p-2 sm:p-4 md:p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 h-full">
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <h3 className="text-sm sm:text-xl md:text-3xl font-black text-green-400 mb-1 sm:mb-2 md:mb-3 tracking-wide">
                  Confidence
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-white mb-0.5 sm:mb-1 font-medium">for Skin</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-300 font-medium">
                  {t({
                    JP: '24時間あなたに自信を与えます',
                    EN: 'Giving you confidence 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[80px] sm:max-w-[150px] md:max-w-[200px] mx-auto flex-1 flex items-center mt-2 sm:mt-4 md:mt-6">
                <Image
                  src="/confidence_image_touka.png"
                  alt="Confidence Product"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </a>

            {/* Forever Section */}
            <div className="text-center flex flex-col p-2 sm:p-4 md:p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm h-full">
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <h3 className="text-sm sm:text-xl md:text-3xl font-black text-green-400 mb-1 sm:mb-2 md:mb-3 tracking-wide">
                  Forever
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-white mb-1 sm:mb-2 font-medium">for Pet</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-300 font-medium">
                  {t({
                    JP: '24時間あなたのペットを支えます',
                    EN: 'Supporting your pets 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[200px] mx-auto flex-1 flex items-center justify-center mt-2 sm:mt-4 md:mt-6">
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

          {/* Second Row - Achieve PRO */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
            {/* Achieve for PRO Athlete */}
            <div className="text-center flex flex-col p-2 sm:p-4 md:p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm h-full">
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <h3 className="text-sm sm:text-xl md:text-3xl font-black text-green-400 mb-1 sm:mb-2 md:mb-3 tracking-wide">
                  Achieve
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-white mb-0.5 sm:mb-1 font-medium">for PRO Athlete</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-300 font-medium">
                  {t({
                    JP: '24時間あなたをより高みに導きます',
                    EN: 'Guiding you to greater heights 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[80px] sm:max-w-[150px] md:max-w-[200px] mx-auto flex-1 flex items-center mt-2 sm:mt-4 md:mt-6">
                <Image
                  src="/athlete.png"
                  alt="Achieve PRO Product"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            {/* for Men Card */}
            <div className="text-center flex flex-col p-2 sm:p-4 md:p-6 border border-green-500/40 rounded-lg bg-black/40 backdrop-blur-sm h-full">
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <h3 className="text-sm sm:text-xl md:text-3xl font-black text-green-400 mb-1 sm:mb-2 md:mb-3 tracking-wide">
                  Confidence
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-white mb-0.5 sm:mb-1 font-medium">for Men</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-300 font-medium">
                  {t({
                    JP: '24時間清潔感による自信を与えます',
                    EN: 'Confidence through cleanliness 24/7'
                  })}
                </p>
              </div>
              <div className="max-w-[80px] sm:max-w-[150px] md:max-w-[200px] mx-auto flex-1 flex items-center mt-2 sm:mt-4 md:mt-6">
                <Image
                  src="/forMen.png"
                  alt="Confidence for men Product"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  style={{ transform: 'rotateY(180deg)' }}
                  priority
                />
              </div>
            </div>
            {/* Empty cell for grid alignment */}
            <div></div>
          </div>
        </div>


      </div>
    </section>
  )
}