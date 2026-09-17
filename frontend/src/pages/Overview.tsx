import { ArrowDown, ArrowUpRight, FlaskConical, Quote } from "lucide-react";
import ResearchLayout, { PlaceholderAction } from "@/components/ResearchLayout";
import { Callout, CitationAction, CohortBars, MetricStrip, NextPage, PaperCard, SectionLabel } from "@/components/ResearchPrimitives";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Overview() {
  return <ResearchLayout>
    <section className="overview-hero" data-testid="overview-hero">
      <div className="hero-copy">
        <div className="eyebrow-line" data-testid="overview-eyebrow"><span className="live-dot" />Bachelor's thesis · Computer Science · Universitat de Barcelona</div>
        <h1 data-testid="overview-title">Teaching cardiac MRI to read <em>the patient,</em> not just the image.</h1>
        <p className="hero-lede" data-testid="overview-lede">CC-LoRA is a parameter-efficient adaptation method that conditions a pretrained cardiac MRI foundation model on clinical context-pushing four-class hypertrophy differential diagnosis to <strong>91.03% AUC</strong>.</p>
        <div className="hero-byline" data-testid="overview-byline"><span>Deepak Janapa</span><i>·</i><span>Supervised by Dr. Polyxeni Gkontra</span><i>·</i><span>Hospital Sant Pau collaboration</span></div>
        <div className="hero-actions" data-testid="overview-actions"><Link to="/results" className="button-primary" data-testid="overview-results-link">Read the results <ArrowUpRight size={16} /></Link><Button
  type="button"
  variant="outline"
  data-testid="about-thesis-button"
  onClick={() => {
    window.open("/assets/thesis.pdf", "_blank");
  }}
>
  Thesis PDF
</Button><CitationAction /></div>
      </div>
      <div className="hero-figure" data-testid="overview-architecture-figure">
        <div className="figure-index">FIG. 01 / MODEL OVERVIEW</div>
        <div className="network-figure">
          <div className="network-column"><span className="node-label">INPUT</span><div className="figure-node node-image"><span>CMR</span><small>cine MRI</small></div><div className="figure-node node-clinical"><span>CLINICAL</span><small>25 features</small></div></div>
          <div className="network-lines"><span /><span /><span /></div>
          <div className="network-column center-column"><span className="node-label">ADAPT</span><div className="figure-node node-lora"><strong>LoRA</strong><small>r = 4 · α = 8</small></div><div className="film-chip">FiLM conditioning</div></div>
          <div className="network-lines"><span /><span /></div>
          <div className="network-column"><span className="node-label">OUTPUT</span><div className="figure-node node-output"><strong>4—CLASS</strong><small>LVH diagnosis</small></div></div>
        </div>
        <div className="figure-caption" data-testid="overview-figure-caption"><span>89.5M frozen weights</span><span>~230 patients / fold</span><span>0.258% trainable</span></div>
      </div>
    </section>
    <section className="section-block overview-metrics" data-testid="overview-metrics-section"><div className="wide-wrap"><MetricStrip items={[{ value: "91.0%", label: "4-class AUC", note: "CC—LoRA" }, { value: "+17pt", label: "over image-only LoRA", note: "same evaluation" }, { value: "0.26%", label: "parameters trained", note: "≈ 220K weights" }, { value: "292", label: "patient cohort", note: "Hospital Sant Pau" }]} /></div></section>
    <section className="section-block" data-testid="overview-abstract-section"><div className="wide-wrap overview-grid"><div className="section-copy"><SectionLabel index="01">Research abstract</SectionLabel><h2>A thickened ventricle is a phenotype, not a diagnosis.</h2><p>Genetic hypertrophic cardiomyopathy, hypertensive heart disease, and amyloidosis can look nearly identical on cardiac MRI. This thesis asks whether a foundation model trained to see images can become more clinically discriminative when a small, stable adapter lets it read the patient's context too.</p><p>Rather than retraining the 89.5M-parameter CineMA backbone, CC—LoRA adds low-rank adapters to transformer blocks 7–12 and modulates them with a 32-dimensional clinical embedding. The result is a model that is cheaper to train, more stable on a small cohort, and measurably better at the difficult differential.</p><Link to="/problem" className="text-link" data-testid="overview-problem-link">Why this problem matters <ArrowUpRight size={15} /></Link></div><PaperCard className="cohort-teaser" testId="overview-cohort-card"><div className="card-topline"><span>COHORT / N = 292</span><span className="mono-tag">4 CLASSES</span></div><h3>Who is in the study?</h3><CohortBars /><div className="cohort-total"><span>25 clinical features</span><span>5-fold evaluation</span></div><Link to="/data" className="text-link" data-testid="overview-data-link">Explore the data <ArrowUpRight size={15} /></Link></PaperCard></div></section>
    <section className="section-block tinted-block" data-testid="overview-claim-section"><div className="wide-wrap"><Callout testId="overview-claim-callout"><Quote size={22} /><div><span className="callout-kicker">The central finding</span><p>Clinical conditioning does not need to be large to be useful. It needs to arrive at the right layer, with the right capacity budget, and be evaluated against the hard cases.</p></div></Callout></div></section>
    <section className="section-block" data-testid="overview-navigation-section"><div className="wide-wrap"><div className="section-heading-row"><div><SectionLabel index="02">Read the study</SectionLabel><h2>From clinical question to defensible result.</h2></div><span className="heading-note">8 sections · 6 min read</span></div><div className="route-grid">{[{ path: "/problem", no: "02", title: "The problem", text: "Why imaging alone blurs distinct diseases." }, { path: "/method", no: "03", title: "The method", text: "How FiLM-modulated LoRA injects context." }, { path: "/data", no: "04", title: "The data", text: "292 patients, 25 features, one hospital." }, { path: "/results", no: "05", title: "The results", text: "91.03% AUC with 0.258% trained." }].map((item) => <Link to={item.path} key={item.path} className="route-card" data-testid={`overview-route-${item.no}`}><span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={17} /></Link>)}</div></div></section>
    <section className="next-section" data-testid="overview-next-section"><div className="wide-wrap"><NextPage to="/problem" label="01 / The problem" testId="overview-next-problem-link" /></div></section>
  </ResearchLayout>;
}