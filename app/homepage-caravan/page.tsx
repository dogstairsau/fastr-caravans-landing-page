"use client";

import { useState } from "react";
import { Phone, Plus } from "lucide-react";

const FORM_URL = "https://fastrfinance.com.au/form/classic";

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
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/Liberty-1.png",
  "https://fastrfinance.com.au/wp-content/uploads/2021/06/Money3.png",
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (val: string) => {
    const url = new URL(FORM_URL);
    if (val) url.searchParams.set("loan_amount", val);
    url.searchParams.set("asset_type", "caravan");
    window.location.href = url.toString();
  };

  return (
    <>
      {/* Header — transparent, sits on top of the mint hero */}
      <header className="hc-header">
        <div className="hc-header-row">
          <a href="https://fastrfinance.com.au/" className="hc-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fastr-logo-dark.svg" alt="Fastr Finance" />
          </a>
          <nav className="hc-nav">
            <a href="https://fastrfinance.com.au/">Home</a>
            <span className="hc-nav__item">
              Loan Types <span className="hc-nav__chevron" aria-hidden />
            </span>
            <span className="hc-nav__item">
              Resources <span className="hc-nav__chevron" aria-hidden />
            </span>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

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
                submit(amount);
              }}
              className="hc-banner-form"
            >
              <input
                type="number"
                placeholder="How much would you like to borrow?"
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
      <section className="hc-photo-content">
        <div className="hc-container hc-photo-content__inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fastrfinance.com.au/wp-content/uploads/2021/06/Frame-8.png"
            alt="Leisure finance"
          />
          <div>
            <h2 className="hc-photo-content__title">Leisure Finance Experts</h2>
            <p className="hc-photo-content__body">
              Start your adventure this weekend with our Fastr low rate loan options for caravans, motorhomes, camper
              trailers and toy haulers.
            </p>
            <div className="hc-photo-content__cta">
              <a href="#apply" className="hc-btn-red">
                Get Started
              </a>
              <a href="tel:1300604183" className="hc-link-phone">
                <Phone size={16} /> 1300 604 183
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
        <div className="hc-container">
          <div className="hc-review__quote-icon">&ldquo;</div>
          <h2>What people say about Fastr</h2>
          <p>We are happy when our customers are too</p>
          <div className="hc-review__badge">
            <span className="label">Fastr&rsquo;s Google Review</span>
            <span className="stars">★★★★★</span>
            <span className="rating">5.0 on Google</span>
          </div>
        </div>
      </section>

      {/* Contentbox — how much do you need */}
      <section className="hc-contentbox">
        <div className="hc-container hc-contentbox__inner">
          <h2>How much money do you need?</h2>
          <form
            className="hc-contentbox__form"
            onSubmit={(e) => {
              e.preventDefault();
              submit(amount2);
            }}
          >
            <input
              type="number"
              placeholder="20,000"
              value={amount2}
              onChange={(e) => setAmount2(e.target.value)}
              aria-label="Loan amount"
            />
            <button type="submit" className="hc-btn-red">
              Get My Options
            </button>
          </form>
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
                We have an abundance of finance solutions to make your dream road trips a reality.
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://fastrfinance.com.au/wp-content/uploads/2021/06/Section-Title.png" alt="" />
            <h2>Frequently Asked Questions</h2>
            <p>Got more questions, please don&rsquo;t hesitate to contact us.</p>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                className={`hc-faq__item${openFaq === i ? " open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3>
                  {f.q}
                  <Plus className="hc-faq__item-icon" />
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
        <div className="hc-container hc-footer-banner__content">
          <h2>Are you ready for your next adventure?</h2>
          <p>Get a car you love, at a payment you can afford.</p>
          <a href="#apply" className="hc-btn-red">
            See my options
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="hc-footer">
        <div className="hc-container">
          <div className="hc-footer-grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://fastrfinance.com.au/wp-content/uploads/2021/07/fastr.png"
                alt="Fastr Finance"
                className="logo"
              />
              <p style={{ marginBottom: 16 }}>
                Australia&rsquo;s trusted online vehicle finance experts. Hassle-free caravan, car, boat and equipment
                finance.
              </p>
              <p>
                <a href="tel:1300604183" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Phone size={14} /> 1300 604 183
                </a>
              </p>
            </div>
            <div>
              <h4>Lending</h4>
              <ul>
                <li><a href="https://fastrfinance.com.au/caravan-loans/">Caravan Loans</a></li>
                <li><a href="https://fastrfinance.com.au/car-loans/">Car Loans</a></li>
                <li><a href="https://fastrfinance.com.au/boat-loans/">Boat Loans</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="https://fastrfinance.com.au/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://fastrfinance.com.au/credit-guide/">Credit Guide</a></li>
                <li><a href="https://fastrfinance.com.au/complaints-policy/">Complaints Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="hc-footer__bottom">
            Fastr Finance Pty Ltd (ABN 70 635 779 707) is an authorised credit representative (ACR #530028) of
            Fintelligence Pty Ltd (Australian Credit Licence #511803). © Fastr Finance {new Date().getFullYear()}.
          </div>
        </div>
      </footer>
    </>
  );
}
