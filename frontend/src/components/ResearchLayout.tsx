import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const navItems = [
  { label: "Overview", path: "/", testId: "nav-link-overview" },
  { label: "Problem", path: "/problem", testId: "nav-link-problem" },
  { label: "Method", path: "/method", testId: "nav-link-method" },
  { label: "Data", path: "/data", testId: "nav-link-data" },
  { label: "Results", path: "/results", testId: "nav-link-results" },
  { label: "Rigor", path: "/rigor", testId: "nav-link-rigor" },
  { label: "Findings", path: "/findings", testId: "nav-link-findings" },
  { label: "About", path: "/about", testId: "nav-link-about" },
];

export function PlaceholderAction({
  label,
  testId,
  variant = "outline",
}: {
  label: string;
  testId: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
}) {
  return (
    <Button
      type="button"
      variant={variant}
      data-testid={testId}
      onClick={() => toast.info(`${label} `, { description: "No function" })}
    >
      {label}
    </Button>
  );
}

export default function ResearchLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="research-app" data-testid="research-app">
      <header className="journal-header" data-testid="journal-header">
        <div className="journal-header-inner">
          <Link to="/" className="wordmark" data-testid="brand-home-link">
            <span className="wordmark-mark" aria-hidden="true"><BookOpen size={17} strokeWidth={1.8} /></span>
            <span data-testid="brand-name">CC - LoRA</span>
            <span className="wordmark-divider" aria-hidden="true">/</span>
            <span className="wordmark-subtitle" data-testid="brand-context">thesis study</span>
          </Link>
          <nav className="journal-nav" aria-label="Research sections" data-testid="main-navigation">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`journal-nav-link${active ? " is-active" : ""}`}
                  data-testid={item.testId}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-actions" data-testid="header-actions">
            <span className="publication-status" data-testid="publication-status">THESIS · 2025/26</span>
            <button
              type="button"
              className="theme-button"
              onClick={() => setDark((value) => !value)}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              data-testid="theme-toggle-button"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>
      <div className="reading-progress" aria-hidden="true" />
      <main className="page-content" data-testid="page-content">{children}</main>
      <footer className="journal-footer" data-testid="journal-footer">
        <div className="footer-inner">
          <div data-testid="footer-credit"><strong>CC - LoRA</strong><span>Clinically-conditioned adaptation of cardiac MRI foundation models</span></div>
          <div className="footer-meta" data-testid="footer-meta"><span>Deepak Janapa</span><span>Universitat de Barcelona</span><span>Hospital Sant Pau</span></div>
        </div>
      </footer>
    </div>
  );
}