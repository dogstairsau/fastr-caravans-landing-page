"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, Facebook, Instagram, ArrowRight, X, Menu } from "lucide-react";

const VEHICLE_TYPES = [
  {
    key: "car",
    label: "CAR",
    sub: "",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/07/Group-1.png",
    url: "https://fastrfinance.com.au/car-loan-form/",
  },
  {
    key: "caravan",
    label: "CARAVAN",
    sub: "(Campervans, Trailers)",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/07/Group-1-1.png",
    url: "https://fastrfinance.com.au/caravan-loan-form/",
  },
  {
    key: "boat",
    label: "BOAT",
    sub: "(Jetski, Outboards motors)",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/07/Group-2.png",
    url: "https://fastrfinance.com.au/boat-loan-form/",
  },
  {
    key: "business",
    label: "BUSINESS ASSET",
    sub: "(Cars, Machinery, Equipment)",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/07/Group-9943.png",
    url: "https://fastrfinance.com.au/commercial-loan-form/",
  },
  {
    key: "other",
    label: "Other Asset",
    sub: "(Trailers, custom builds, motorbikes, solar panels and batteries etc)",
    img: "https://fastrfinance.com.au/wp-content/uploads/2025/11/truck-resized-1.webp",
    url: "https://fastrfinance.com.au/general-finance-loan-form/",
  },
];

const WHY_PILLARS = [
  {
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/cloud-computing-1-1.png",
    title: "Fastr Technology",
    body:
      "Instantly compares 30+ lenders to find the most suitable car loan for your personal circumstances. We only show you loans you qualify for, ranked by the lowest repayment.",
  },
  {
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/rating-3.png",
    title: "Real people, real service",
    body:
      "Our loan experts pride themselves in understanding your needs and the solution best suited to your circumstances.",
  },
  {
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/shield-2.png",
    title: "Lifetime support",
    body:
      "We're here for you throughout the application process, life of your loan, and whenever you need assistance.",
  },
  {
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/credit-card-1-1.png",
    title: "No credit score impact",
    body: "View our extensive range of loan options without a hit to your credit score.",
  },
  {
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/smartphone-2-1.png",
    title: "Financing your way",
    body: "Secure your new loan anywhere with the ease of your computer, phone or tablet!",
  },
];

const LENDERS = [
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/ammf.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/PLENTI-finace.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/wbc.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/anz.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/boq.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/wisr.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/Firstmac-1024x512-1.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/latitide.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/image-7.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/mac.png",
];

const STEPS = [
  {
    num: "01",
    title: "Get matched & compare lenders",
    body:
      "Simply let us know a little bit about what you need and our Fastr matching technology will instantly match and compare 30+ lenders to find the best personalised loan options for you. All in less than 1 minute!",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-1.png",
  },
  {
    num: "02",
    title: "Apply easily",
    body:
      "Once you have selected your ideal option, easily apply online or choose to speak with a dedicated expert.",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-2.png",
  },
  {
    num: "03",
    title: "Get approved",
    body: "Your dedicated loan expert will get you approved with your preferred lender.",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-3.png",
  },
  {
    num: "04",
    title: "Sign your contract",
    body: "Sign your contract from the comfort of your home.",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-4.png",
  },
  {
    num: "05",
    title: "Get your new vehicle!",
    body: "We'll organise your funds to be transferred in time for you to get your new vehicle.",
    img: "https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-5.png",
  },
];

const FAQS = [
  {
    q: "What is Fastr?",
    a: "We are a fintech platform that helps customers fight back on the traditional vehicle finance process — providing fully transparent options with unmatched customer service. Our technology finds you the best tailored loan solutions, and our people will ensure a smooth application process.",
  },
  {
    q: "What is a vehicle loan?",
    a: "A vehicle loan is when a finance company lends you the money to purchase a vehicle and retains security over it for the life of the loan. Vehicle loans can be arranged for both personal use (such as a consumer loan) or business. We help you navigate over 30 Australian lenders so that you can find the best rate based on your personal situation. We work with lenders all day everyday, so you don't have to.",
  },
  {
    q: "What are the benefits of a vehicle loan?",
    a: "By taking out a loan to finance your next vehicle purchase you can reduce your upfront cash outlay to save money or spend it on other things in life. If you're a business, a car loan may improve your cash flow, as well as potentially allowing you to claim a tax deduction for the vehicle.",
  },
  {
    q: "Will my application affect my credit score?",
    a: "No. Getting your rates with Fastr doesn't impact your credit score. To get your initial options our Fastr system does a 'soft' credit check that does not affect your credit score. Once you give the go ahead our loan experts will assess your application and ensure your application goes to the most suitable lender, only then will a credit enquiry appear on your file.",
  },
  {
    q: "Can I trust you?",
    a: "Don't just take our word for it… Check out our excellent Google reviews! Along with that we are an Authorised Credit Representative under an Australian Credit Licence and as such are governed by ASIC to follow strict compliance rules.",
  },
];

export default function HomepageCaravan() {
  const [amount, setAmount] = useState("");
  const [amount2, setAmount2] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAmount, setModalAmount] = useState("");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openModal = (val: string) => {
    setModalAmount(val);
    setModalOpen(true);
  };

  const pickVehicle = (vehicleUrl: string) => {
    const url = new URL(vehicleUrl);
    if (modalAmount) url.searchParams.set("loan_amount", modalAmount);
    window.location.href = url.toString();
  };

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileNavOpen]);

  return (
    <>
      {/* Header — transparent over hero, solid white once scrolled */}
      <header className={`hc-header${headerScrolled ? " hc-header--scrolled" : ""}`}>
        <div className="hc-header-row">
          <a href="https://fastrfinance.com.au/" className="hc-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fastr-logo-dark.svg" alt="Fastr Finance" />
          </a>
          <nav className="hc-nav">
            <a href="https://fastrfinance.com.au/">Home</a>
            <div className="hc-nav__item hc-nav__group">
              <button type="button" className="hc-nav__trigger">
                Loan Types <span className="hc-nav__chevron" aria-hidden />
              </button>
              <div className="hc-nav__dropdown" role="menu">
                <a href="https://fastrfinance.com.au/homepage-car/" role="menuitem">Car Loans</a>
                <a href="https://fastrfinance.com.au/homepage-boat/" role="menuitem">Boat Loans</a>
                <a href="/homepage-caravan" role="menuitem">Caravan Loans</a>
                <a href="https://fastrfinance.com.au/homepage-truck/" role="menuitem">Commercial Loans</a>
              </div>
            </div>
            <div className="hc-nav__item hc-nav__group">
              <button type="button" className="hc-nav__trigger">
                Resources <span className="hc-nav__chevron" aria-hidden />
              </button>
              <div className="hc-nav__dropdown" role="menu">
                <a href="https://fastrfinance.com.au/our-calculators/" role="menuitem">Our Calculators</a>
                <a href="https://fastrfinance.com.au/blog/" role="menuitem">Blog</a>
              </div>
            </div>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="tel:1300604183" className="hc-header__phone">
            <Phone size={18} strokeWidth={2.5} />
            1300 604 183
          </a>
          <button
            type="button"
            className="hc-burger"
            aria-label="Open menu"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`hc-mobilenav${mobileNavOpen ? " open" : ""}`}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className="hc-mobilenav__scrim"
          onClick={() => setMobileNavOpen(false)}
        />
        <aside className="hc-mobilenav__panel" role="dialog" aria-label="Site menu">
          <div className="hc-mobilenav__head">
            <a href="https://fastrfinance.com.au/" className="hc-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fastr-logo-dark.svg" alt="Fastr Finance" />
            </a>
            <button
              type="button"
              className="hc-mobilenav__close"
              aria-label="Close menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <X size={28} strokeWidth={2.5} />
            </button>
          </div>
          <nav className="hc-mobilenav__list">
            <a href="https://fastrfinance.com.au/" onClick={() => setMobileNavOpen(false)}>Home</a>
            <div className="hc-mobilenav__group">
              <span className="hc-mobilenav__group-label">Loan Types</span>
              <a href="https://fastrfinance.com.au/homepage-car/" onClick={() => setMobileNavOpen(false)}>Car Loans</a>
              <a href="https://fastrfinance.com.au/homepage-boat/" onClick={() => setMobileNavOpen(false)}>Boat Loans</a>
              <a href="/homepage-caravan" onClick={() => setMobileNavOpen(false)}>Caravan Loans</a>
              <a href="https://fastrfinance.com.au/homepage-truck/" onClick={() => setMobileNavOpen(false)}>Commercial Loans</a>
            </div>
            <div className="hc-mobilenav__group">
              <span className="hc-mobilenav__group-label">Resources</span>
              <a href="https://fastrfinance.com.au/calculators/" onClick={() => setMobileNavOpen(false)}>Our Calculators</a>
              <a href="https://fastrfinance.com.au/blog/" onClick={() => setMobileNavOpen(false)}>Blog</a>
            </div>
            <a href="#how-it-works" onClick={() => setMobileNavOpen(false)}>How it works</a>
            <a href="#faq" onClick={() => setMobileNavOpen(false)}>FAQ</a>
          </nav>
          <a href="tel:1300604183" className="hc-mobilenav__phone">
            <Phone size={18} strokeWidth={2.5} />
            1300 604 183
          </a>
        </aside>
      </div>

      {/* Hero banner */}
      <section className="hc-banner">
        {/* Full-bleed illustrated background */}
        <div className="hc-banner-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/homepage-caravan-hero-bg.webp" alt="" />
        </div>
        {/* Caravan photo, positioned right */}
        <div className="hc-banner-caravan" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/homepage-caravan-photo.webp" alt="" />
        </div>
        <div className="hc-banner-inner">
          <div>
            <h1 className="hc-banner-title">
              Hassle Free Caravan Loans, <span className="bold">Fastr.</span>
            </h1>
            <ul className="hc-banner-list">
              <li>Fastr Technology instantly compares 30+ lenders to show your cheapest repayment options!</li>
              <li>Australia&rsquo;s trusted online vehicle finance experts.</li>
            </ul>
            <form
              id="apply"
              onSubmit={(e) => {
                e.preventDefault();
                openModal(amount);
              }}
              className="hc-banner-form"
            >
              <input
                type="number"
                placeholder="How much do you need?"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-label="Loan amount"
              />
              <button type="submit" className="hc-btn-red">
                Get My Options
              </button>
            </form>
            <div className="hc-google-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://fastrfinance.com.au/wp-content/uploads/2025/07/branding-google-badge_50-1.png"
                alt="Google"
              />
              <div className="badge-text">
                <strong>Fastr&rsquo;s Google Review</strong>
                <span className="reviews">5 stars from 251 reviews</span>
                <span className="stars">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA — Get in touch */}
      <section className="hc-section-cta">
        <div className="hc-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fastrfinance.com.au/wp-content/uploads/2024/01/Mail-sent-rafiki-1.png"
            alt=""
          />
          <h2>
            <b>Get In Touch With the Fastr Team</b>
          </h2>
          <a href="#apply" className="hc-btn-red">
            Enquire Now
          </a>
        </div>
      </section>

      {/* Photo content 1 — Leisure Finance Experts */}
      <section className="hc-photo-content hc-photo-content--accent">
        <div className="hc-container hc-photo-content__inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-8.png"
            alt="Leisure finance"
          />
          <div className="hc-photo-content__text">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fastr-mark.png" alt="" aria-hidden className="hc-photo-content__mark" />
            <h2 className="hc-photo-content__title">Leisure Finance Experts</h2>
            <p className="hc-photo-content__body">
              Start your adventure this weekend with our Fastr low rate loan options for caravans, motorhomes, camper
              trailers and toy haulers.
            </p>
            <div className="hc-photo-content__cta">
              <a href="#apply" className="hc-btn-red">
                Get Started
              </a>
              <a href="tel:1300604183" className="hc-link-phone hc-link-phone--coral">
                <Phone size={18} strokeWidth={2.5} /> 1300 604 183
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Column item — Why You'll Love Fastr */}
      <section className="hc-column-item">
        <div className="hc-container">
          <div className="hc-column-item__head">
            <h2>Why You&rsquo;ll Love Fastr</h2>
            <p>Through technology and transparency, we bring you a Fastr Finance journey you can trust.</p>
          </div>
          <div className="hc-column-item__grid">
            {WHY_PILLARS.map((p) => (
              <div key={p.title} className="hc-column-item__box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content logo — Our 30+ lending partners */}
      <section className="hc-content-logo">
        <div className="hc-container hc-content-logo__inner">
          <div>
            <h2 className="hc-content-logo__title">
              Our 30+ <br />
              <span className="bold">lending partners</span>
            </h2>
            <p className="hc-content-logo__body">
              Our relationship with 30+ lenders means that you get the most competitive rates which saves you time and
              money.
            </p>
          </div>
          <div className="hc-content-logo__list">
            {LENDERS.map((src) => (
              <div key={src} className="hc-content-logo__cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps — 5 Steps to Fastr Finance */}
      <section className="hc-steps" id="how-it-works">
        <div className="hc-container">
          <div className="hc-steps__head">
            <h2>5 Steps to Fastr Finance</h2>
            <p>Our online application process takes only a few minutes to complete and we only ask for information we need</p>
          </div>
          {STEPS.map((s, idx) => (
            <div key={s.num} className={`hc-steps__item${idx % 2 === 1 ? " reverse" : ""}`}>
              <div className="hc-steps__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt="" />
              </div>
              <div className="hc-steps__dot" aria-hidden />
              <div className="hc-steps__content">
                <span className="hc-steps__num">{s.num}</span>
                <h3 className="hc-steps__title">{s.title}</h3>
                <div>
                  <p>{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review rating */}
      <section className="hc-review">
        <div className="hc-container hc-review__inner">
          <span className="hc-review__quote-icon" aria-hidden>&ldquo;</span>
          <h2 className="hc-review__title">What people say about Fastr</h2>
          <p className="hc-review__sub">We are happy when our customers are too</p>
          <div className="hc-review__badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://fastrfinance.com.au/wp-content/uploads/2025/07/branding-google-badge_50-1.png"
              alt="Google"
            />
            <div className="hc-review__badge-text">
              <strong>Fastr&rsquo;s Google Review</strong>
              <span className="reviews">5 stars from 251 reviews</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contentbox — how much do you need */}
      <section className="hc-contentbox">
        <div className="hc-container">
          <div className="hc-contentbox__card">
            <h2>How much money do you need?</h2>
            <div className="hc-contentbox__right">
              <form
                className="hc-contentbox__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  openModal(amount2);
                }}
              >
                <label className="hc-contentbox__field">
                  <span className="hc-contentbox__currency" aria-hidden>$</span>
                  <input
                    type="number"
                    placeholder="20,000"
                    value={amount2}
                    onChange={(e) => setAmount2(e.target.value)}
                    aria-label="Loan amount"
                  />
                </label>
                <button type="submit" className="hc-btn-red">
                  Get My Options
                </button>
              </form>
              <p className="hc-contentbox__note">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/fastr-mark.png" alt="" className="hc-contentbox__note-mark" aria-hidden />
                Viewing your options wont affect your credit score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Columnbox — vehicle types */}
      <section className="hc-columnbox">
        <div className="hc-container">
          <h2>Let us help you finance your next:</h2>
          <div className="hc-columnbox__list">
            <a href="https://fastrfinance.com.au/homepage-car/" className="hc-columnbox__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://fastrfinance.com.au/wp-content/uploads/2021/06/car.png" alt="" />
              <h3>Cars &amp; Utes</h3>
              <p>
                Whether you need a car loan for personal use or for business use, we assist in finding your most suited
                option. Fastr.
              </p>
              <span className="link-more">Learn More →</span>
            </a>
            <a href="https://fastrfinance.com.au/homepage-boat/" className="hc-columnbox__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://fastrfinance.com.au/wp-content/uploads/2021/06/ship-1.png" alt="" />
              <h3>Boats/Jetskis</h3>
              <p>
                Don&rsquo;t get stuck waiting and watching this summer. Your great boating experience starts with a
                flexible and affordable boat loan. By using our top tier lenders, we can ensure that all of your
                expectations are met.
              </p>
              <span className="link-more">Learn More →</span>
            </a>
            <a href="https://fastrfinance.com.au/homepage-caravan/" className="hc-columnbox__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://fastrfinance.com.au/wp-content/uploads/2021/06/Group-139.png" alt="" />
              <h3>Caravans &amp; RVs</h3>
              <p>
                Your next aussie adventure could be closer than you think. Caravan finance is more exciting than ever.
                We have an abundance of finance solutions to make your dream road trips a reality. We have industry
                partners to help make your purchase easier too.
              </p>
              <span className="link-more">Learn More →</span>
            </a>
            <a href="https://fastrfinance.com.au/business-finance/" className="hc-columnbox__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://fastrfinance.com.au/wp-content/uploads/2021/06/pick-up-truck-1.png" alt="" />
              <h3>Trucks, Excavators, Yellow goods</h3>
              <p>
                Assets to grow your business are of vital importance. Whether it&rsquo;s a piece of equipment or a fleet
                of vehicles, we are here to help you grow your business with a Fastr Equipment loan. Low rates and low
                doc products available.
              </p>
              <span className="link-more">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Photo content 2 — Get obligation free advice */}
      <section className="hc-photo-content">
        <div className="hc-container hc-photo-content__inner reverse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-6.png"
            alt="Get expert advice"
          />
          <div>
            <h2 className="hc-photo-content__title">Get obligation free expert advice on your next car loan!</h2>
            <div className="hc-photo-content__cta">
              <a href="#apply" className="hc-btn-red">
                Get it now
              </a>
              <a href="tel:1300604183" className="hc-link-phone">
                <Phone size={16} /> 1300 604 183
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hc-faq" id="faq">
        <div className="hc-container hc-faq__inner">
          <div className="hc-faq__main">
            <span className="hc-faq__watermark" aria-hidden>?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Got more questions, please don&rsquo;t hesitate to contact us.</p>
          </div>
          <div className="hc-faq__list">
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                className={`hc-faq__item${openFaq === i ? " open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3>
                  {f.q}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/fastr-mark.png" alt="" className="hc-faq__item-icon" aria-hidden />
                </h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer banner */}
      <section className="hc-footer-banner">
        <div className="hc-footer-banner__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://fastrfinance.com.au/wp-content/uploads/2025/12/Rectangle-9.webp" alt="" />
        </div>
        <div className="hc-container">
          <div className="hc-footer-banner__content">
            <h2>Are you ready for your next adventure?</h2>
            <p>Get a car you love, at a payment you can afford.</p>
            <a href="#apply" className="hc-btn-ghost">
              See my options
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hc-footer">
        <div className="hc-container">
          <div className="hc-footer__top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fastr-logo.svg" alt="Fastr Finance" className="logo" />
            <p>
              Fastr Finance Pty Ltd (ABN 70 635 779 707) is an authorised credit representative (ACR #530028) of
              Fintelligence Pty Ltd (Australian Credit Licence #511803).
            </p>
          </div>
          <div className="hc-footer-grid">
            <div className="hc-footer__newsletter">
              <h4>Subscribe to Our Newsletter</h4>
              <form className="hc-footer__email" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address" aria-label="Email address" />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </form>
              <div className="hc-footer__social">
                <a href="https://facebook.com/fastrfinance" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="https://instagram.com/fastrfinance" aria-label="Instagram"><Instagram size={16} /></a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/homepage-caravan">Caravan Loans</a></li>
                <li><a href="https://fastrfinance.com.au/homepage-car/">Car Loans</a></li>
                <li><a href="https://fastrfinance.com.au/homepage-boat/">Boat Loans</a></li>
                <li><a href="https://fastrfinance.com.au/homepage-truck/">Commercial Loans</a></li>
              </ul>
            </div>
            <div>
              <h4>More Info</h4>
              <ul>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal Terms</h4>
              <ul>
                <li>
                  <a
                    href="https://fastrfinance.com.au/wp-content/uploads/2021/09/Credit-Guide-Quote-emplate-fintelligence_ACR-version-FASTR-Finance.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Credit Guide
                  </a>
                </li>
                <li>
                  <a href="https://fintelligence.com.au/legal/complaints/" target="_blank" rel="noopener noreferrer">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="https://fintelligence.com.au/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hc-footer__contact">
            <a href="mailto:hello@fastrfinance.com.au"><Mail size={16} /> hello@fastrfinance.com.au</a>
            <a href="tel:1300604183"><Phone size={16} /> 1300 604 183</a>
          </div>
        </div>
      </footer>

      {/* Vehicle type modal */}
      {modalOpen && (
        <div
          className="hc-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Select vehicle or asset type"
          onClick={() => setModalOpen(false)}
        >
          <div className="hc-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="hc-modal__close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <h2 className="hc-modal__title">What type of vehicle/asset is the loan for?</h2>
            <div className="hc-modal__grid">
              {VEHICLE_TYPES.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  className="hc-modal__card"
                  onClick={() => pickVehicle(v.url)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.img} alt="" />
                  <span className="hc-modal__card-label">{v.label}</span>
                  {v.sub && <span className="hc-modal__card-sub">{v.sub}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
