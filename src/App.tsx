import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, Bike, Check, ChevronDown, CircleDollarSign, Clock3, Gift, House, Menu, Monitor, Package, ShieldCheck, Sparkles, Trophy, X, CarFront } from 'lucide-react'
import { months, products, productImages, terms } from './data'

const rise = { hidden: { opacity: 0, y: 30, scale: .97, filter: 'blur(5px)' }, show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: .075 } } }
const termHeadings = ['Membership and product choice', 'Participation ID', 'Monthly scheme schedule', 'How results are shared', 'Multiple participation IDs', '43-inch TV after 24 months', 'Consolation prizes', 'Consolation prize confirmation', 'Monthly installment amount', 'Organisers’ decision']

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} transition={{ duration: .8, ease: [.22, 1, .36, 1], delay }}>{children}</motion.div>
}

function App() {
  const [activeMonth, setActiveMonth] = useState(1)
  const [openTerms, setOpenTerms] = useState<number | null>(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = months[activeMonth - 1]
  const nav = [['Our story', '#about'], ['The products', '#products'], ['The rewards', '#rewards'], ['24-month plan', '#journey'], ['How to join', '#participate']]

  return <>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Lifessy Corp home"><img className="brand-logo" src="/lifessy-logo.png" alt="Lifessy Corp logo" /></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-cta" href="#journey">Explore the plan <ArrowRight size={15} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-noise" />
        <div className="hero-content">
          <motion.img className="hero-logo" src="/lifessy-logo.png" alt="Lifessy Corp" initial={{ opacity: 0, y: 12, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .05, duration: .55 }} />
          <motion.div className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>EMPOWERING DREAMS. BUILDING WEALTH.</motion.div>
          <motion.h1 variants={stagger} initial="hidden" animate="show">
            <motion.span className="hero-line" variants={rise}>Your Dreams.</motion.span>
            <motion.span className="hero-line" variants={rise}><em>Your Rewards.</em></motion.span>
            <motion.span className="hero-line" variants={rise}>Your Journey.</motion.span>
          </motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>Twenty-four months, with a different prize plan each month — from bikes and Smart QLED TVs to iPhones, cars and a 1 BHK house.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
            <a className="button button-gold" href="#journey">Explore the Lucky Plan <ArrowRight size={16} /></a><a className="button button-quiet" href="#rewards">Discover the rewards <ArrowDown size={15} /></a>
          </motion.div>
          <motion.div className="hero-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .95 }}><span><i /> A 24-MONTH REWARD PROGRAMME</span><span>01 — 24</span></motion.div>
        </div>
        <motion.div className="hero-showcase" initial={{ opacity: 0, x: 35, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: .35, ease: [.2, .8, .2, 1] }}>
          <div className="showcase-glow" /><div className="hero-spotlight" />
          <div className="prize-stage">
            <div className="stage-copy"><span className="micro">THE LUCKY PLAN</span><b>A journey<br />of rewards.</b><small>MONTH 01 — 24</small></div>
            <div className="showcase-tv"><div className="tv-glint"/><div className="tv-image"><span>24</span><small>MONTHS OF POSSIBILITY</small></div><div className="tv-foot"/></div>
            <div className="showcase-phone"><div className="phone-lens"/><span>✦</span></div>
            <div className="showcase-bike"><Bike size={88} strokeWidth={1.05}/></div>
            <div className="showcase-label"><Sparkles size={14}/> Monthly prize plans <b>01 / 24</b></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon"><Trophy size={16}/></span><span><small>THE GRAND FINALE</small><b>1 BHK House</b></span></div>
          <div className="floating-note note-bottom"><span className="note-icon"><Monitor size={16}/></span><span><small>SMART QLED TVs</small><b>43″ &amp; 75″</b></span></div>
        </motion.div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
        <div className="hero-bottom-rule" />
      </section>

      <section className="intro-section" id="about"><div className="section-wrap intro-inner">
        <Reveal className="intro-left"><span className="eyebrow">01 / THE STORY</span><h2>A little excitement,<br /><em>every month.</em></h2></Reveal>
        <Reveal className="intro-copy" delay={.12}><p className="intro-lede">At Lifessy Corp, we believe every customer’s dream deserves a place on the journey.</p><p>This brochure presents our 24-Month Lucky Plan: a month-by-month line-up of rewards, from bikes and Smart QLED TVs to iPhones, cars and a 1 BHK house.</p><a className="text-link" href="#journey">Meet the 24-month plan <ArrowRight size={15}/></a></Reveal>
      </div></section>
      <section className="values-band"><div className="values-inner">
        {[{icon: ShieldCheck,title:'Trust',text:'A programme built on clear, month-wise plans.'},{icon: Sparkles,title:'Excitement',text:'A new set of prizes to look forward to every month.'},{icon: Gift,title:'Premium rewards',text:'Bikes, Smart QLED TVs, iPhones, cars and a 1 BHK house.'},{icon: CircleDollarSign,title:'Customer loyalty',text:'A 24-month journey shared with Lifessy.'}].map((item,i)=><Reveal key={item.title} delay={i*.06}><div className="value-card"><item.icon size={20}/><span className="value-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}
      </div></section>

      <section className="products-section" id="products"><div className="section-wrap products-inner">
        <Reveal className="section-heading"><div><span className="eyebrow">02 / LIFESSY PRODUCT RANGE</span><h2>Choose a product.<br /><em>Begin the journey.</em></h2></div><p>Buy any products at ₹2,000 and get the benefits of the products.</p></Reveal>
        <motion.div className="product-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .1 }}>
          {products.map((name,i)=><motion.article className={`product-card product-tone-${i%5}`} key={name} variants={rise} transition={{ duration: .5 }} whileHover={{ y: -5 }}><div className="product-visual"><div className="product-photo"><img src={productImages[i]} alt={name} loading="lazy" /></div><span className="product-number">{String(i+1).padStart(2,'0')}</span></div><h3>{name}</h3><span className="product-arrow"><ArrowDownRight size={14}/></span></motion.article>)}
        </motion.div><p className="small-note"><span>14</span> products in the Lifessy range</p>
      </div></section>

      <section className="rewards-section" id="rewards"><div className="section-wrap rewards-wrap">
        <Reveal className="section-heading rewards-heading"><div><span className="eyebrow">03 / THE REWARDS</span><h2>Something to<br /><em>look forward to.</em></h2></div><p>Prize categories across the month-wise plan.<br/>Images are for illustration only.</p></Reveal>
        <div className="reward-gallery">
          <Reveal className="reward-card reward-bike"><div className="reward-visual bike-visual"><div className="brochure-photo"><img src="/prize-01.jpg" alt="Motorcycle shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>01 / 06</span><img className="reward-icon" src="/icon-bike.png" alt=""/><h3>Bikes &amp; scooters</h3><ArrowUpRightIcon/></div></Reveal>
          <Reveal className="reward-card reward-phone" delay={.08}><div className="reward-visual phone-visual"><div className="brochure-photo phone-photo"><img src="/prize-02.jpg" alt="iPhone shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>02 / 06</span><img className="reward-icon" src="/icon-iphone.png" alt=""/><h3>iPhones</h3><ArrowUpRightIcon/></div></Reveal>
          <Reveal className="reward-card reward-tv" delay={.12}><div className="reward-visual tv-visual"><div className="brochure-photo"><img src="/prize-04.jpg" alt="43-inch Smart QLED TV shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>03 / 06</span><img className="reward-icon" src="/icon-tv43.png" alt=""/><h3>43″ Smart QLED TV</h3><ArrowUpRightIcon/></div></Reveal>
          <Reveal className="reward-card reward-car" delay={.06}><div className="reward-visual car-visual"><div className="brochure-photo"><img src="/prize-05.jpg" alt="Car shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>04 / 06</span><img className="reward-icon" src="/icon-car.png" alt=""/><h3>Cars</h3><ArrowUpRightIcon/></div></Reveal>
          <Reveal className="reward-card reward-tv75" delay={.1}><div className="reward-visual tv75-visual"><div className="brochure-photo"><img src="/prize-06.jpg" alt="75-inch Smart QLED TV shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>05 / 06</span><img className="reward-icon" src="/icon-tv75.png" alt=""/><h3>75″ Smart QLED TV</h3><ArrowUpRightIcon/></div></Reveal>
          <Reveal className="reward-card reward-house" delay={.14}><div className="reward-visual house-visual"><div className="brochure-photo"><img src="/prize-03.jpg" alt="House shown in the brochure" loading="lazy" /></div></div><div className="reward-label"><span>06 / 06</span><img className="reward-icon" src="/icon-house.png" alt=""/><h3>1 BHK House</h3><ArrowUpRightIcon/></div></Reveal>
        </div>
        <Reveal className="major-strip"><div><span className="eyebrow">THE MAJOR PRIZES</span><b>Five milestone months.<br/><em>One extraordinary finale.</em></b></div><div className="major-list">{months.filter(m=>m.major).map(m=><a href="#journey" key={m.month} onClick={()=>setActiveMonth(m.month)}><small>MONTH {String(m.month).padStart(2,'0')}</small><span>{m.major}</span><ArrowRight size={15}/></a>)}</div></Reveal>
      </div></section>

      <section className="journey-section" id="journey"><div className="section-wrap journey-wrap">
        <Reveal className="section-heading"><div><span className="eyebrow">04 / THE 24-MONTH LUCKY PLAN</span><h2>Every month has<br/><em>its own moment.</em></h2></div><p>Select a month to explore its prize plan.<br/>The major prize months are marked in gold.</p></Reveal>
        <Reveal className="month-selector"><div className="month-selector-top"><span>SELECT A MONTH</span><span>01 <i/> 24</span></div><div className="month-grid">{months.map(({month,major})=><button key={month} className={`${activeMonth===month?'selected':''} ${major?'month-major':''}`} onClick={()=>setActiveMonth(month)} aria-label={`Month ${month}${major?`, major prize: ${major}`:''}`} aria-pressed={activeMonth===month}>{String(month).padStart(2,'0')}{major&&<i/>}</button>)}</div></Reveal>
        <AnimatePresence mode="wait"><motion.article className={`month-detail ${active.major?'is-major':''}`} key={activeMonth} initial={{ opacity: 0, y: 18, scale: .99 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .42, ease: [.22, 1, .36, 1] }}>
          <div className="month-detail-title"><span className="eyebrow">THE PRIZE PLAN</span><div className="month-number">{String(active.month).padStart(2,'0')}</div><b>MONTH</b>{active.major&&<span className="major-pill"><Sparkles size={12}/> MAJOR PRIZE</span>}</div>
          <div className="month-detail-content"><div className="month-plan-head"><h3>{active.major ? (active.month===24?'The grand finale.':'A milestone month.') : 'This month’s prize plan.'}</h3><span>MONTH {String(active.month).padStart(2,'0')} OF 24</span></div>
            <div className="prize-lines">
              {active.vehicle.length>0&&<div className="prize-line"><span className="prize-line-icon"><img src="/icon-bike.png" alt=""/></span><div><b>{active.month===24?'1 bike: Honda CB350':`${active.month===3?'3 bikes + 2 electric scooters':active.month===2?'5 scooters':active.month===5?'5 bikes & scooters':active.month>=7?'5 bikes & scooters':'5 bikes'}`}</b><p>{active.vehicle.join(' · ')}</p></div></div>}
              {active.tv43>0&&<div className="prize-line"><span className="prize-line-icon"><img src="/icon-tv43.png" alt=""/></span><div><b>{active.tv43} × 43-inch Android Smart QLED TV</b></div><span className="line-count">{String(active.tv43).padStart(2,'0')}</span></div>}
              {active.tv75>0&&<div className="prize-line"><span className="prize-line-icon"><img src="/icon-tv75.png" alt=""/></span><div><b>{active.tv75} × 75-inch Smart QLED TV</b></div><span className="line-count">{String(active.tv75).padStart(2,'0')}</span></div>}
              <div className="prize-line"><span className="prize-line-icon"><img src="/icon-iphone.png" alt=""/></span><div><b>{active.iphone}</b></div></div>
              {active.major&&<div className="prize-line prize-line-major"><span className="prize-line-icon"><img src={active.month===24?'/icon-house.png':'/icon-car.png'} alt=""/></span><div><b>{active.month===24?'1 BHK House (₹50 lakh worth)':`1 × Car: ${active.major}`}</b></div><Sparkles size={16}/></div>}
            </div><div className="month-controls"><button onClick={()=>setActiveMonth(activeMonth===1?24:activeMonth-1)}><ArrowRight className="prev-arrow" size={15}/> PREVIOUS</button><span>{String(activeMonth).padStart(2,'0')} / 24</span><button onClick={()=>setActiveMonth(activeMonth===24?1:activeMonth+1)}>NEXT MONTH <ArrowRight size={15}/></button></div>
          </div><div className="month-detail-visual"><div className="detail-orb"/>{active.major?(active.month===24?<House size={82}/>:<CarFront size={104}/>):active.tv43+active.tv75>0?<Monitor size={91}/>:<Bike size={95}/>}<span>{active.major?'A PRIZE TO REMEMBER':'A MONTH OF POSSIBILITIES'}</span></div>
        </motion.article></AnimatePresence>
        <div className="plan-footnote"><span><i/> MONTH-WISE PRIZE PLAN</span><span>Prize names, models and quantities as shown in the brochure.</span></div>
      </div></section>

      <section className="participate-section" id="participate"><div className="section-wrap participate-wrap">
        <Reveal className="participate-intro"><span className="eyebrow">05 / HOW TO PARTICIPATE</span><h2>Your place on<br/><em>the journey.</em></h2><p>Four simple steps, from your first product choice to the monthly winner announcements.</p><div className="fee-card"><span className="fee-icon"><CircleDollarSign size={19}/></span><span><small>MEMBERSHIP AMOUNT</small><b>₹2,000<span>/- per ID</span></b></span><span className="fee-note">one product<br/>choice only</span></div></Reveal>
        <div className="steps-list">{[
          ['01','Choose a product','Pay the ₹2,000/- membership amount online and choose one product (1 prize).'],
          ['02','Get your participation ID','Receive your participation ID, which continues until the last month.'],
          ['03','Pay every month','Pay ₹2,000/- every month before the 10th and receive one product.'],
          ['04','See the monthly winners','Winners are announced every month.'],
        ].map(([num,title,text],i)=><Reveal key={num} delay={i*.07}><article className="step-card"><span className="step-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><span className="step-icon">{i===0?<Package/>:i===1?<Check/>:i===2?<Clock3/>:<Trophy/>}</span></article></Reveal>)}</div>
      </div><div className="section-wrap participation-detail"><Reveal className="detail-panel"><span className="eyebrow">A FEW DETAILS TO KNOW</span><div className="detail-columns"><p><b>Monthly schedule</b><span>Pay ₹2,000/- every month before the 10th.</span></p><p><b>Participation ID</b><span>Your ID continues until the last month.</span></p><p><b>Dates, method &amp; eligibility</b><span>Dates, method, eligibility and prize claim and delivery process will be confirmed by Lifessy.</span></p></div></Reveal></div></section>

      <section className="terms-section"><div className="section-wrap terms-wrap"><Reveal className="section-heading"><div><span className="eyebrow">06 / IMPORTANT CUSTOMER INFORMATION</span><h2>Clear details.<br/><em>Every step.</em></h2></div><p>Prize names, models and quantities are as shown on the monthly plan pages. Where a bike or scooter brand or iPhone model is not specified, Lifessy will confirm it.</p></Reveal>
        <Reveal className="terms-box"><div className="terms-header"><span className="eyebrow">24 MONTHS — EVERY MONTH PRODUCT PURCHASE</span><span>10 TERMS</span></div>{terms.map((term,i)=><div className={`term-item ${openTerms===i?'term-open':''}`} key={term}><button onClick={()=>setOpenTerms(openTerms===i?null:i)} aria-expanded={openTerms===i}><span className="term-number">{String(i+1).padStart(2,'0')}</span><span>{termHeadings[i]}</span><ChevronDown size={17}/></button><AnimatePresence initial={false}>{openTerms===i&&<motion.div className="term-extra" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}}><p>{term}</p></motion.div>}</AnimatePresence></div>)}
          <div className="terms-notes"><span className="note-star">✳</span><div><b>NOTE</b><p>Registration costs and applicable government fees for the vehicles shall be borne by the bumper prize winner.</p><p>Images of the prizes shown in the brochure are for illustrative purposes only and may differ from the actual prizes.</p><strong>Lifessy Lucky Only for Friends and Relatives</strong></div></div>
        </Reveal>
      </div></section>

      <section className="closing-cta"><div className="closing-lines"/><Reveal><span className="eyebrow">YOUR DREAMS. YOUR REWARDS. YOUR JOURNEY.</span><h2>Twenty-four months.<br/><em>One journey with Lifessy.</em></h2><a className="button button-gold" href="#journey">Explore the month-wise plan <ArrowRight size={16}/></a><span className="closing-star">✳</span></Reveal></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/lifessy-logo.png" alt="Lifessy Corp logo" /></a><div className="footer-tagline">EMPOWERING DREAMS.<br/>BUILDING WEALTH.</div><div className="footer-nav">{nav.map(([label,href])=><a href={href} key={href}>{label}</a>)}</div><a className="footer-site" href="https://www.lifessy.in">WWW.LIFESSY.IN <ArrowUpRightIcon/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LIFESSY CORP</span><span>“Your Dreams. Your Rewards. Your Journey.”</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </>
}

function ArrowUpRightIcon(){return <ArrowRight size={15} className="arrow-up-right"/>}

export default App
