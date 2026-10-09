import type { Metadata } from "next";
import Link from "next/link";
import "./landing.css";

export const metadata: Metadata = {
  title: "Clara AI — A clearer view of endoscopy images",
  description:
    "Clara AI combines conversational medical information with AI-assisted polyp segmentation for endoscopy images. Explore the research-stage platform.",
  openGraph: {
    title: "Clara AI — A clearer view of endoscopy images",
    description:
      "Explore Clara AI's conversational experience and AI-assisted polyp segmentation workflow.",
    type: "website",
  },
};

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`clara-brand${light ? " clara-brand-light" : ""}`} href="/" aria-label="Clara AI home">
      <span className="clara-brand-mark" aria-hidden="true"><span /><span /></span>
      <span>clara<span className="clara-brand-ai">ai</span></span>
    </Link>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true" className="clara-arrow">↗</span>;
}

function ScanIllustration() {
  return (
    <div className="clara-scan" aria-label="Abstract illustration of an image analysis interface" role="img">
      <div className="clara-scan-orbit clara-scan-orbit-one" />
      <div className="clara-scan-orbit clara-scan-orbit-two" />
      <div className="clara-scan-orbit clara-scan-orbit-three" />
      <div className="clara-scan-focus" />
      <div className="clara-scan-corner clara-scan-corner-tl" />
      <div className="clara-scan-corner clara-scan-corner-tr" />
      <div className="clara-scan-corner clara-scan-corner-bl" />
      <div className="clara-scan-corner clara-scan-corner-br" />
      <span className="clara-scan-tag">REGION OF INTEREST</span>
    </div>
  );
}

const capabilities = [
  { number: "01", icon: "◌", title: "See the area of interest", text: "Upload an endoscopy image and receive an overlay highlighting a model-identified polyp region." },
  { number: "02", icon: "✳", title: "Ask in plain language", text: "Explore medical topics through a conversational interface that keeps the discussion in one place." },
  { number: "03", icon: "⌁", title: "Continue the conversation", text: "Return to previous chats and build on earlier questions, images, and answers." },
];

export default function Home() {
  return (
    <main className="clara-landing">
      <header className="clara-header">
        <div className="clara-container clara-header-inner">
          <Brand />
          <nav className="clara-nav" aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#about">About</a>
          </nav>
          <Link className="clara-header-cta" href="/login">Open Clara <ArrowIcon /></Link>
        </div>
      </header>

      <section className="clara-hero clara-container" aria-labelledby="clara-hero-title">
        <div className="clara-hero-copy">
          <div className="clara-eyebrow"><span className="clara-eyebrow-dot" /> AI FOR A CLOSER LOOK</div>
          <h1 id="clara-hero-title">A clearer view.<br /><em>A better question.</em></h1>
          <p className="clara-hero-lede">Clara brings endoscopy image analysis and conversational medical information into one thoughtful workspace.</p>
          <div className="clara-hero-actions">
            <Link className="clara-button clara-button-primary" href="/signup">Explore Clara <ArrowIcon /></Link>
            <a className="clara-text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <p className="clara-hero-note">Built to support exploration and research. Not a medical diagnosis.</p>
        </div>

        <div className="clara-hero-visual" aria-label="Illustration of the Clara AI product experience">
          <div className="clara-visual-halo" />
          <div className="clara-product-card">
            <div className="clara-product-top"><span className="clara-product-symbol">✳</span><span>CLARA / IMAGE ANALYSIS</span><span className="clara-product-dots">•••</span></div>
            <div className="clara-product-body">
              <div className="clara-product-heading"><span>Image workspace</span><span className="clara-live"><i /> AI-assisted</span></div>
              <ScanIllustration />
              <div className="clara-product-result"><span className="clara-result-icon">⌕</span><div><strong>Visual overlay</strong><span>Model-highlighted area for review</span></div><span className="clara-result-check">↗</span></div>
            </div>
          </div>
          <div className="clara-visual-caption"><span className="clara-caption-line" /> CONCEPTUAL PRODUCT PREVIEW</div>
        </div>
      </section>

      <div className="clara-divider clara-container"><span>IMAGE + CONVERSATION</span><span>ONE CONNECTED EXPERIENCE</span></div>

      <section id="how-it-works" className="clara-workflow clara-container" aria-labelledby="clara-workflow-title">
        <div className="clara-section-intro"><span className="clara-section-kicker">THE WORKFLOW</span><h2 id="clara-workflow-title">From image to <em>insightful inquiry.</em></h2><p>Clara connects visual analysis with a place to ask, learn, and keep exploring.</p></div>
        <div className="clara-steps">
          <div className="clara-step"><span className="clara-step-number">01 / UPLOAD</span><div className="clara-step-icon" aria-hidden="true">＋</div><h3>Bring an image</h3><p>Start with an endoscopy image in a conversation.</p></div>
          <div className="clara-step"><span className="clara-step-number">02 / REVIEW</span><div className="clara-step-icon" aria-hidden="true">◎</div><h3>Review the overlay</h3><p>See the region identified by Clara’s segmentation model.</p></div>
          <div className="clara-step"><span className="clara-step-number">03 / EXPLORE</span><div className="clara-step-icon" aria-hidden="true">✳</div><h3>Keep asking</h3><p>Use the chat to explore related medical questions.</p></div>
        </div>
      </section>

      <section id="capabilities" className="clara-capabilities" aria-labelledby="clara-capabilities-title">
        <div className="clara-container clara-capabilities-inner">
          <div className="clara-capabilities-heading"><div><span className="clara-section-kicker">WHAT CLARA DOES</span><h2 id="clara-capabilities-title">Designed for <em>curiosity.</em><br />Built around clarity.</h2></div><p>A focused set of tools for exploring images and information together.</p></div>
          <div className="clara-capability-grid">{capabilities.map((item) => <article className="clara-capability" key={item.number}><div className="clara-capability-top"><span>{item.number}</span><span className="clara-capability-icon" aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section id="about" className="clara-about clara-container" aria-labelledby="clara-about-title">
        <div className="clara-about-graphic" aria-hidden="true"><div className="clara-about-circle clara-about-circle-one" /><div className="clara-about-circle clara-about-circle-two" /><span>clarity<br /><i>in context.</i></span></div>
        <div className="clara-about-copy"><span className="clara-section-kicker">WHY WE&apos;RE BUILDING</span><h2 id="clara-about-title">Complex information deserves a more approachable interface.</h2><p>Medical images can be difficult to interpret, and questions often come after the first answer. Clara is an early-stage effort to make image exploration and medical information easier to navigate in one place.</p><p>We’re building responsibly, with a clear boundary: model output is for informational and research use and needs qualified clinical review.</p><Link className="clara-text-link" href="/signup">Get started with Clara <ArrowIcon /></Link></div>
      </section>

      <section className="clara-final-cta"><div className="clara-container clara-final-inner"><div><span className="clara-section-kicker">BEGIN WITH A QUESTION</span><h2>See what a clearer<br /><em>conversation can reveal.</em></h2></div><Link className="clara-button clara-button-light" href="/signup">Explore Clara <ArrowIcon /></Link></div></section>

      <footer className="clara-footer"><div className="clara-container clara-footer-inner"><div><Brand light /><p>AI-assisted image exploration and medical information.</p></div><div className="clara-footer-links"><Link href="/login">Sign in</Link><Link href="/signup">Create account</Link></div></div><div className="clara-container clara-footer-bottom"><span>© {new Date().getFullYear()} Clara AI</span><span>Research-stage tool. Not for diagnosis or treatment decisions.</span></div></footer>
    </main>
  );
}
