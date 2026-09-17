import { useState, type ReactNode } from "react";
import { ChevronDown, Copy, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-intro" data-testid={`page-intro-${index.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="page-intro-kicker"><span className="section-index">{index}</span><span data-testid="page-intro-eyebrow">{eyebrow}</span></div>
      <h1 data-testid="page-title">{title}</h1>
      <p data-testid="page-description">{description}</p>
      {children}
    </div>
  );
}

export function MetricStrip({ items }: { items: { value: string; label: string; note?: string }[] }) {
  return (
    <div className="metric-strip" data-testid="metric-strip">
      {items.map((item) => (
        <div className="metric-item" key={item.label} data-testid={`metric-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
          <strong>{item.value}</strong><span>{item.label}</span>{item.note && <small>{item.note}</small>}
        </div>
      ))}
    </div>
  );
}

export function PaperCard({ children, className = "", testId = "paper-card" }: { children: ReactNode; className?: string; testId?: string }) {
  return <article className={`paper-card ${className}`} data-testid={testId}>{children}</article>;
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label" data-testid={`section-label-${index.toLowerCase().replace(/\s/g, "-")}`}><span>{index}</span><strong>{children}</strong></div>;
}

export function Callout({ children, tone = "teal", testId = "callout" }: { children: ReactNode; tone?: "teal" | "terracotta"; testId?: string }) {
  return <div className={`callout callout-${tone}`} data-testid={testId}>{children}</div>;
}

export function DetailDisclosure({ title, children, testId }: { title: string; children: ReactNode; testId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`detail-disclosure${open ? " is-open" : ""}`} data-testid={`${testId}-container`}>
      <button type="button" onClick={() => setOpen((value) => !value)} className="detail-trigger" data-testid={`${testId}-toggle`} aria-expanded={open}>
        <span>{title}</span><ChevronDown size={17} />
      </button>
      {open && <div className="detail-content" data-testid={`${testId}-content`}>{children}</div>}
    </div>
  );
}

export function NextPage({ to, label, testId }: { to: string; label: string; testId: string }) {
  return <Link to={to} className="next-page" data-testid={testId}><span>{label}</span><ArrowUpRight size={17} /></Link>;
}

export function CitationAction() {
  const citation = "@thesis{deepak2026cclora, title={Clinically-Conditioned Adaptation of Cardiac MRI Foundation Models}, author={Deepak}, school={Universitat de Barcelona}, year={2026}}";
  const copy = async () => {
    await navigator.clipboard?.writeText(citation);
    toast.success("Citation copied", { description: "BibTeX is ready to paste into your references." });
  };
  return <Button type="button" variant="outline" onClick={copy} data-testid="copy-citation-button"><Copy size={15} /></Button>;
}

export function ComparisonBars() {
  const bars = [
    { name: "CC—LoRA", value: 91.03, color: "var(--teal)" },
    { name: "Image-only LoRA", value: 74.13, color: "var(--teal-soft)" },
    { name: "Full fine-tuning", value: 73.48, color: "var(--slate)" },
  ];
  return (
    <div className="bar-chart" data-testid="comparison-bar-chart">
      <div className="chart-axis-labels"><span>4-class AUC</span><span>100%</span></div>
      {bars.map((bar) => <div className="bar-row" key={bar.name} data-testid={`bar-${bar.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><span>{bar.name}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${bar.value}%`, background: bar.color }} /></div><b>{bar.value.toFixed(1)}%</b></div>)}
      <div className="chart-footnote"><span>0</span><span>50</span><span>100</span></div>
    </div>
  );
}

export function CohortBars() {
  const cohort = [{ name: "HCMP", count: 165 }, { name: "Hypertensive HCM", count: 66 }, { name: "Normal", count: 37 }, { name: "Amyloidosis", count: 24 }];
  return <div className="cohort-chart" data-testid="cohort-composition-chart">{cohort.map((item) => <div className="cohort-row" key={item.name}><span>{item.name}</span><div className="cohort-track"><div style={{ width: `${(item.count / 165) * 100}%` }} /></div><b>{item.count}</b></div>)}</div>;
}

export function DonutFigure() {
  return <div className="donut-figure" data-testid="parameter-efficiency-figure"><div className="donut-ring"><div><strong>0.26%</strong><span>trained</span></div></div><p>of the 89.5M-parameter backbone</p></div>;
}