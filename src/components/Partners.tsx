'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Partner {
  name: string;
  description: string;
  image: string;
  subtitle?: string;
}

interface PartnerCategory {
  title: { JP: string; EN: string };
  colorClass: string;
  partners: Partner[];
}

export default function Partners() {
  const { t } = useLanguage()
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCategories(newExpanded)
  }

  const categories: PartnerCategory[] = [
    {
      title: { JP: '政府・公的機関・地域パートナー', EN: 'Government, Public Institutions & Regional Partners' },
      colorClass: 'blue',
      partners: [
        {
          name: t({ JP: "BioNexus ステータス企業", EN: "BioNexus Status Company" }),
          subtitle: t({ JP: "マレーシア政府認可", EN: "Malaysian Government Approved" }),
          description: t({
            JP: "マレーシア政府の特別クラス・バイオテクノロジー企業として認定されており、バイオテクノロジー商業化の進歩のための実質的な財政的インセンティブ、税制優遇、制度的サポートへのアクセスを享受しています。",
            EN: "Certified as a special class biotechnology company by the Malaysian government, enjoying access to substantial financial incentives, tax benefits, and institutional support for advancing biotechnology commercialization."
          }),
          image: "/bionexus-DbMz1jYi.jpeg"
        },
        {
          name: "ASEAN",
          subtitle: t({ JP: "東南アジア諸国連合", EN: "Association of Southeast Asian Nations" }),
          description: t({
            JP: "持続可能な水産養殖および農業セクターにおけるパートナーシップからの公式支援により、東南アジア全10カ国にわたる地域に責任を有し、実際的に実行可能な政策とシステムというASEANの共通ビジョンに貢献しています。",
            EN: "With official support from partnerships in sustainable aquaculture and agriculture sectors, responsible for the region spanning all 10 Southeast Asian countries, contributing to ASEAN's shared vision of practical and implementable policies and systems."
          }),
          image: "/ASEAN-uoWrwKNH.jpeg"
        },
        {
          name: "ANGKASA",
          subtitle: t({ JP: "マレーシア政府機関", EN: "Malaysian Government Agency" }),
          description: t({
            JP: "16,000以上の協同組合と730万人の組合員を代表する協同組合開発庁の組合員として、1,596億収益455億を超える価値を有しており、マレーシアの中核経済活動における第一セクターとして重要な技術革新を果たしています。",
            EN: "As a member of the Cooperative Development Agency representing over 16,000 cooperatives and 7.3 million members, with assets exceeding 159.6 billion in revenue and 45.5 billion in value, playing a crucial technological innovation role as a primary sector in Malaysia's core economic activities."
          }),
          image: "/ANGKASA-BAUWowhT.jpeg"
        },
        {
          name: t({ JP: "インベスト・セランゴール", EN: "Invest Selangor" }),
          subtitle: t({ JP: "政府機関", EN: "Government Agency" }),
          description: t({
            JP: "セランゴール州政府が提供する優遇支援エコシステムのメンバーです。このエコシステムには、効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界別プログラム、ネットワークやインフラへのアクセスが含まれています。これにより、マレーシアで最も経済的に活発な州の一つで、プロジェクトの成功を促進することを目指しています。",
            EN: "Member of the preferential support ecosystem provided by the Selangor State Government, including efficient administrative processes, customized incentive packages, industry-specific programs, and access to networks and infrastructure, aiming to promote project success in one of Malaysia's most economically active states."
          }),
          image: "/Invest_selangor-BU24U3lB.jpeg"
        },
        {
          name: "NEGERI PAHANG",
          subtitle: t({ JP: "パハン州政府", EN: "Pahang State Government" }),
          description: t({
            JP: "マレーシア、パハン州の投資・産業・科学・技術・イノベーション委員会の委員長（パハン州政府）は、特に収穫量の増加、効率、生産性の向上のための技術と近代的な農業手法の使用を通じて、パハン州の農業セクターの経済発展を強化するMother Vegetableへの提案された投資に対する支援を私たちに与えてくれました。",
            EN: "The Chairman of the Investment, Industry, Science, Technology and Innovation Committee of Pahang State, Malaysia has given us support for the proposed investment in Mother Vegetable to enhance economic development of Pahang's agricultural sector, particularly through the use of technology and modern farming methods to increase yields, efficiency and productivity."
          }),
          image: "/Negeri-dJn5D2--.jpeg"
        },
        {
          name: "YTAA",
          subtitle: "Yayasan Tengku Abdul Aziz Sultan Abu Bakar",
          description: t({
            JP: "YTAAは社会影響のチャネルとして機能し、サブスクリプションの負担軽減、教育イニシアチブ、ヘルスケア用プログラムやマイクロファイナンスプロジェクトに直接資金を提供することを保証し、地域的な教育全体保健とサステナビリティにおけるエンジニアリングプロジェクトで協力しています。",
            EN: "YTAA functions as a channel for social impact, ensuring direct funding for subscription burden reduction, educational initiatives, healthcare programs and microfinance projects, collaborating on engineering projects in regional education, holistic health and sustainability."
          }),
          image: "/YTAA.jpeg"
        }
      ]
    },
    {
      title: { JP: '学術・研究機関', EN: 'Academic & Research Institutions' },
      colorClass: 'cyan',
      partners: [
        {
          name: t({ JP: "ノッティンガム大学", EN: "University of Nottingham" }),
          description: t({
            JP: "大学構内における3エーカーの施設をMother Vegetable事業に提供する戦略的協力体制を構築し、研究開発の発展のため尊敬されるバイオテクノロジーチームによるサポートを受けています。",
            EN: "Building strategic cooperation by providing a 3-acre facility on campus for Mother Vegetable business, supported by a respected biotechnology team for research and development advancement."
          }),
          image: "/Nottingham-DFhtfkra.jpeg"
        },
        {
          name: t({ JP: "シンガポール国立大学", EN: "National University of Singapore" }),
          description: t({
            JP: "農業や水産養殖、生物的防除剤、製品開発の分野において、科学的専門知識と革新を提供するパートナーシップを結んでいます。私たちの活動の基盤となる科学を強化し、イニシアチブが最先端の研究に基づいていることを確保することが重要です。",
            EN: "Forming partnerships that provide scientific expertise and innovation in agriculture, aquaculture, biological control agents, and product development. It is crucial to strengthen the science underlying our activities and ensure initiatives are based on cutting-edge research."
          }),
          image: "/NUS-BabuExyP.jpeg"
        },
        {
          name: t({ JP: "マラヤ大学", EN: "University of Malaya" }),
          description: t({
            JP: "マレーシアの最高学府であるマラヤ大学と研究開発分野で連携しています。同大学の優れた学術的知見と科学技術の専門性により、私たちの技術革新が大きく前進しています。",
            EN: "Collaborating in research and development with University of Malaya, Malaysia's premier institution. Our technological innovation is significantly advancing through the university's excellent academic insights and scientific expertise."
          }),
          image: "/UM-CuopK3W1.jpeg"
        },
        {
          name: t({ JP: "マレーシア科学大学", EN: "Universiti Sains Malaysia" }),
          description: t({
            JP: "微細藻類研究の分野で国際的に高い評価を受けているマレーシア科学大学と共同研究を実施しています。同大学の専門知識と研究施設を活用し、微細藻類の可能性を最大限に引き出す技術開発を進めています。",
            EN: "Conducting joint research with Universiti Sains Malaysia, internationally acclaimed in microalgae research. Utilizing the university's expertise and research facilities to advance technology development that maximizes microalgae potential."
          }),
          image: "/USM-DHEGJzFX.jpeg"
        },
        {
          name: t({ JP: "マレーシア国民大学", EN: "Universiti Kebangsaan Malaysia" }),
          description: t({
            JP: "Mother Vegetableプロジェクトの革新性と持続可能性に高い関心を示していただき、全面的な支援を受けています。現在、大学キャンパス内にMother Vegetable施設を設置する計画が進行中で、教育・研究・社会実装を一体化した新しいモデルの構築を目指しています。",
            EN: "Showing high interest in the innovation and sustainability of the Mother Vegetable project with full support. Plans are currently underway to establish Mother Vegetable facilities on campus, aiming to build a new model integrating education, research, and social implementation."
          }),
          image: "/ukm.jpeg"
        },
        {
          name: t({ JP: "マヒドン大学", EN: "Mahidol University" }),
          description: t({
            JP: "タイを代表する研究大学と共同で、家畜飼料における生物的防除剤（BCA）の革新的な応用研究を実施しています。畜産分野における成長促進と疾病耐性向上を目的とした実証実験を進めています。",
            EN: "Conducting innovative applied research on biological control agents (BCA) in livestock feed jointly with Thailand's leading research university. Advancing demonstration experiments aimed at growth promotion and disease resistance improvement in the livestock sector."
          }),
          image: "/Mahidol-7ODll9ol.jpeg"
        },
        {
          name: t({ JP: "明治大学", EN: "Meiji University" }),
          description: t({
            JP: "体育会競技者に対してMother Vegetable関連製品を提供するスポンサーシップ協力により、持続可能な栄養ソリューションを通じたスポーツパフォーマンスの支援を実施しています。",
            EN: "Supporting sports performance through sustainable nutrition solutions via sponsorship cooperation providing Mother Vegetable-related products to athletic competitors."
          }),
          image: "/Meiji-C7G7ovOM.jpeg"
        }
      ]
    },
    {
      title: { JP: '行政・地方自治体', EN: 'Administration & Local Governments' },
      colorClass: 'green',
      partners: [
        {
          name: t({
            JP: "食品産業・商品・地域開発省（M-FICoRD）サラワク州",
            EN: "Ministry of Food Industry, Commodity and Regional Development (M-FICoRD) Sarawak"
          }),
          description: t({
            JP: "包括的な技術分析提案：サラワク州パダンアイ貯水池におけるテイラピア育成システム。地域の水資源を活用した持続可能な養殖モデルの確立と地域経済の活性化を目指しています。",
            EN: "Comprehensive technical analysis proposal: Tilapia farming system at Padang Ai Reservoir in Sarawak. Aiming to establish sustainable aquaculture models utilizing regional water resources and revitalize the local economy."
          }),
          image: "/m-ficord.jpeg"
        },
        {
          name: t({ JP: "河津町（日本）", EN: "Kawazu Town (Japan)" }),
          description: t({
            JP: "日本におけるMother Vegetableを核とした包括的な事業提携による海洋産業の振興。",
            EN: "Promotion of marine industry through comprehensive business partnerships centered on Mother Vegetable in Japan."
          }),
          image: "/kawazu-town.jpeg"
        },
        {
          name: t({ JP: "静岡県（日本）", EN: "Shizuoka Prefecture (Japan)" }),
          description: t({
            JP: "海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。",
            EN: "Providing comprehensive prefectural-level support systems for marine industry development and sustainable technology implementation."
          }),
          image: "/shizuoka-prefecture.jpeg"
        },
        {
          name: t({ JP: "東京都板橋区（日本）", EN: "Itabashi Ward, Tokyo (Japan)" }),
          description: t({
            JP: "海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。",
            EN: "Providing comprehensive ward-level support systems for marine industry development and sustainable technology implementation."
          }),
          image: "/itabashi-ward.jpeg"
        },
        {
          name: t({ JP: "水産庁（日本）", EN: "Fisheries Agency (Japan)" }),
          description: t({
            JP: "日本における海洋産業の振興とMother Vegetableの導入支援",
            EN: "Supporting the promotion of marine industry and introduction of Mother Vegetable in Japan"
          }),
          image: "/fisheries-agency.jpeg"
        }
      ]
    },
    {
      title: { JP: '国際機関', EN: 'International Organizations' },
      colorClass: 'purple',
      partners: [
        {
          name: t({ JP: "東アジア経済研究所（ERIA）", EN: "Economic Research Institute for ASEAN and East Asia (ERIA)" }),
          description: t({
            JP: "ASEAN持続可能農業に関する地域ガイドライン実施のための実践的行動計画および持続可能な農業食料システムに関する予備調査研究において協力しています。",
            EN: "Collaborating on practical action plans for implementing regional guidelines on ASEAN sustainable agriculture and preliminary research on sustainable agri-food systems."
          }),
          image: "/eria.jpeg"
        },
        {
          name: t({ JP: "日本-ASEAN統合基金", EN: "Japan-ASEAN Integration Fund" }),
          description: t({
            JP: "水産養殖および畜産セクターにおける抗菌剤耐性（AMR）対策としての生物的防除剤（BCA）応用に関する実証プロジェクトへの支援を提供しています。",
            EN: "Providing support for demonstration projects on the application of biological control agents (BCA) as countermeasures against antimicrobial resistance (AMR) in aquaculture and livestock sectors."
          }),
          image: "/jaif.jpeg"
        }
      ]
    },
    {
      title: { JP: 'その他の提携組織・プロジェクト', EN: 'Other Partner Organizations & Projects' },
      colorClass: 'orange',
      partners: [
        {
          name: t({ JP: "Revoganix（レヴォガニクス）", EN: "Revoganix" }),
          description: t({
            JP: "ASEANパネル企業として認められており、ASEAN持続可能な農業・水産養殖アカデミーの設立や地域のBCA（生物的防除剤）生産イニシアチブなど、ASEANから直接授与された複数の影響力の大きいプロジェクトを任されています。",
            EN: "Recognized as an ASEAN panel company, entrusted with multiple high-impact projects directly awarded by ASEAN, including establishing the ASEAN Sustainable Agriculture and Aquaculture Academy and regional BCA production initiatives."
          }),
          image: "/revoganix.jpeg"
        },
        {
          name: t({ JP: "バイオエコノミーコーポレーション", EN: "Bioeconomy Corporation" }),
          description: t({
            JP: "農業廃棄物をクリーンな食品に変えるプロジェクトエンゲージメント。持続可能なバイオエコノミーの推進と廃棄物の有効活用を通じた循環型経済の実現に取り組んでいます。",
            EN: "Project engagement in transforming agricultural waste into clean food. Working towards realizing a circular economy through promoting sustainable bioeconomy and effective utilization of waste."
          }),
          image: "/bioeconomy.jpeg"
        },
        {
          name: t({
            JP: "テマセクポリテクニック・水産養殖イノベーションセンター",
            EN: "Temasek Polytechnic Aquaculture Innovation Centre"
          }),
          description: t({
            JP: "ティラピア飼料における生物的防除剤（BCA）の革新的な応用：オープンポンドタンク水産養殖における成長と耐病性の向上。",
            EN: "Innovative application of biological control agents (BCA) in tilapia feed: Enhancing growth and disease resistance in open pond tank aquaculture."
          }),
          image: "/temasek.jpeg"
        },
        {
          name: t({ JP: "Cropabl（マレーシア）", EN: "Cropabl (Malaysia)" }),
          description: t({
            JP: "20年以上にわたって非侵襲的かつ無化学物質の農業に取り組んできたパイオニア的企業であり、食料安全保障と持続可能な農業実践を推進するために政府機関との強力なパートナーシップを築いてきました。",
            EN: "A pioneering company with over 20 years of commitment to non-invasive and chemical-free farming, building strong partnerships with government agencies to promote food security and sustainable agricultural practices."
          }),
          image: "/cropabl.jpeg"
        },
        {
          name: "Sabah Invest",
          description: t({
            JP: "サバ州政府とのパートナーシップのもとでMOTHER VEGETABLEプロジェクトの実施を強力に支援する意向を示しています。この取り組みは、輸入食品への依存度が高いサバを、自給自足が可能で輸出余剰を生み出せる州へと変革することを目指しています。",
            EN: "Expressing strong intention to support the implementation of the MOTHER VEGETABLE project in partnership with the Sabah State Government. This initiative aims to transform Sabah from high dependency on imported food to a self-sufficient state capable of generating export surplus."
          }),
          image: "/sabah-invest.jpeg"
        },
        {
          name: "Healcom Foundation",
          description: t({
            JP: "MOTHER VEGETABLEの取り組みに賛同し、地域社会に最高品質で健康的かつ持続可能に栽培された食品を届ける可能性を高く評価しています。",
            EN: "Supporting the MOTHER VEGETABLE initiative and highly valuing its potential to deliver the highest quality, healthy, and sustainably grown food to local communities."
          }),
          image: "/healcom.jpeg"
        },
        {
          name: t({ JP: "全国姉妹漁業振興協議会株式会社", EN: "National Sister Fisheries Promotion Council Inc." }),
          description: t({
            JP: "河津町との連携による海洋事業開発とMother Vegetable事業の推進。全国の漁業組合の連絡窓口を実施。",
            EN: "Promoting marine business development and Mother Vegetable business through collaboration with Kawazu Town. Implementing communication channels for fishery associations nationwide."
          }),
          image: "/sfc.jpeg"
        },
        {
          name: t({ JP: "日本PTA", EN: "Japan PTA" }),
          description: t({
            JP: "日本では、小学生の保護者600万人がPTAに登録されています。保護者と教師の会プロジェクト：全国の選ばれた小学校でオリンピック選手とのイベントを開催し、子供たちがマザーベジタブルを体験し、栄養について学びます。",
            EN: "In Japan, 6 million parents of elementary school students are registered with the PTA. Parent-Teacher Association Project: Hosting events with Olympic athletes at selected elementary schools nationwide, where children experience Mother Vegetable and learn about nutrition."
          }),
          image: "/pta.jpeg"
        },
        {
          name: "LEON",
          description: t({
            JP: "アパレル雑誌LEONの不動産部門：20年以上の歴史を持つ日本の紳士向けアパレル雑誌で、40代から50代の富裕層をターゲットとし、月間約1,000万ページビューを誇ります。",
            EN: "Real estate division of apparel magazine LEON: A Japanese men's apparel magazine with over 20 years of history, targeting affluent individuals in their 40s and 50s, boasting approximately 10 million monthly page views."
          }),
          image: "/leon.jpeg"
        },
        {
          name: t({ JP: "JTB総合研究所", EN: "JTB Research Institute" }),
          description: t({
            JP: "JTBツーリズムリサーチ＆コンサルティング：日本最大の旅行代理店であり、世界最大級の旅行代理店の1つ。海洋産業の推進とエデングリーン関連製品の事業開発支援のためのパートナーシップ",
            EN: "JTB Tourism Research & Consulting: Japan's largest travel agency and one of the world's largest. Partnership for promoting marine industry and supporting business development of Eden Green-related products."
          }),
          image: "/jtb-logo.svg"
        },
        {
          name: t({ JP: "九州電工", EN: "Kyushu Denko" }),
          description: t({
            JP: "日本の大手電力会社：藻場（海藻の群落）を造成することで、魚貝類の住処としての機能や水質浄化、さらにはCO₂固定機能を活かした藻場再生の実用化研究に2001年度から取り組んでいます。",
            EN: "Major Japanese power company: Since 2001, engaged in practical research on seaweed bed restoration utilizing functions as habitat for fish and shellfish, water purification, and CO₂ fixation through creating seaweed beds."
          }),
          image: "/Kyushudenko.jpeg"
        },
        {
          name: t({ JP: "黒井漁業協同組合", EN: "Kuroi Fishery Cooperative" }),
          description: t({
            JP: "日本の下関市に位置する漁協組合：磯焼けによる空ウニの大量発生や養殖に対して課題を持っており、MOTHER VEGETABLEを活用することで局所的な磯焼け解決や効率的な養殖を進めている。",
            EN: "Fishery cooperative located in Shimonoseki City, Japan: Facing challenges with mass occurrence of empty sea urchins due to rocky shore denudation and aquaculture, advancing local rocky shore denudation solutions and efficient aquaculture using MOTHER VEGETABLE."
          }),
          image: "/kuroi-fishery-DSW6ddl8.jpeg"
        },
        {
          name: "MO",
          description: t({
            JP: "株式会社MOは、日本にていち早くマザーベジタブルを提供すべく、マーケティング調査、販売企画、改善点等を研究開発し、日本国内での販売戦略をサポートしています。",
            EN: "MO Corporation conducts marketing research, sales planning, and R&D for improvements to provide Mother Vegetable early in Japan, supporting domestic sales strategies in Japan."
          }),
          image: "/mo_logo.png"
        }
      ]
    }
  ]

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t({ JP: 'パートナーシップ', EN: 'Partnerships' })}
          </h2>
        </div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className={`w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r ${
                  category.colorClass === 'blue' ? 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30' :
                  category.colorClass === 'cyan' ? 'from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30' :
                  category.colorClass === 'green' ? 'from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30' :
                  category.colorClass === 'purple' ? 'from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30' :
                  'from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30'
                } transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <h3 className={`text-xl font-bold ${
                    category.colorClass === 'blue' ? 'text-blue-400' :
                    category.colorClass === 'cyan' ? 'text-cyan-400' :
                    category.colorClass === 'green' ? 'text-green-400' :
                    category.colorClass === 'purple' ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>
                    {t(category.title)}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    ({category.partners.length} {t({ JP: '組織', EN: 'organizations' })})
                  </span>
                </div>
                {expandedCategories.has(categoryIndex) ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {expandedCategories.has(categoryIndex) && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-5">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className={`bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 md:p-5 hover:border-${category.colorClass}-500/50 transition-all duration-300 hover:scale-[1.02]`}
                      >
                        <div className="flex gap-3 md:gap-4">
                          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow overflow-hidden">
                            <Image
                              src={partner.image}
                              alt={partner.name}
                              fill
                              className="object-contain p-1.5 md:p-2"
                              quality={100}
                              sizes="(max-width: 768px) 64px, 80px"
                            />
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="text-xs md:text-sm font-bold text-white leading-snug mb-1 text-left">{partner.name}</h4>
                            {partner.subtitle && (
                              <p className={`${
                                category.colorClass === 'blue' ? 'text-blue-400' :
                                category.colorClass === 'cyan' ? 'text-cyan-400' :
                                category.colorClass === 'green' ? 'text-green-400' :
                                category.colorClass === 'purple' ? 'text-purple-400' :
                                'text-orange-400'
                              } text-[10px] md:text-xs font-medium mb-1.5 md:mb-2 leading-tight text-left`}>
                                {partner.subtitle}
                              </p>
                            )}
                            <p className="text-gray-300 text-[10px] md:text-xs leading-[1.5] md:leading-[1.4] text-left">{partner.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}