import { Linkedin, Mail, MapPin, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ResearchLayout, { PlaceholderAction } from "@/components/ResearchLayout";
import { CitationAction, NextPage, PageIntro, PaperCard, SectionLabel } from "@/components/ResearchPrimitives";

export default function About() {
  return <ResearchLayout><div className="wide-wrap page-wrap"><PageIntro index="08" eyebrow="About the project" title="A thesis built between an engineering lab and a cardiology department." description="CC—LoRA was completed as part of the Computer Engineering degree at Universitat de Barcelona, in direct clinical collaboration with Hospital Sant Pau."><div className="intro-meta"><span>GRADE: 9.8 / 10</span><span>BARCELONA</span><span>RESEARCH CONTINUED POST-DEFENSE</span></div></PageIntro>
    <section className="page-section" data-testid="about-profile-section"><div className="about-grid"><PaperCard className="profile-card" testId="about-profile-card"><div className="profile-avatar"><UserRound size={25} /></div><span className="profile-kicker">AI RESEARCHER</span><h2>Deepak Janapa</h2><p>Computer Science<br />Universitat de Barcelona</p><div className="profile-location"><MapPin size={15} />Barcelona, Spain</div><div className="profile-rule" /><div className="profile-roles"><span>Deep learning</span><span>Cardiac imaging</span><span>Clinical ML</span></div></PaperCard><div className="about-copy"><SectionLabel index="08.1">Context & collaboration</SectionLabel><h2>Designed to be read by both engineers and clinicians.</h2><p>The project was supervised by <strong>Dr. Polyxeni Gkontra</strong>, with clinical collaboration from cardiologists <strong>Dr. Martín Descalzo</strong> and <strong>Dr. Matías</strong> at Hospital Sant Pau.</p><p>Research continued after the defense toward a planned journal publication, with co-authorship for the participating clinicians. This showcase is the concise version: enough method to be credible, enough context to be useful, and enough restraint to keep the clinical question visible.</p><div className="about-actions"><Button
  type="button"
  variant="outline"
  data-testid="about-thesis-button"
  onClick={() => {
    window.open("/assets/thesis.pdf", "_blank");
  }}
>
  Thesis PDF
</Button><PlaceholderAction label="GitHub repository" testId="about-github-placeholder" /><PlaceholderAction label="LinkedIn / contact" testId="about-linkedin-placeholder" /></div></div></div><PaperCard className="research-figure-card about-photo-card" testId="about-advisor-photo-card"><figure><img className="research-image advisor-image" src="/assets/IMG-20260626-WA0038.jpg" alt="Deepak with research collaborators at Universitat de Barcelona" loading="lazy" /><figcaption><span>FIG. 08A</span><strong>Research in collaboration</strong><small>Deepak with Dr. Polyxeni Gkontra.</small></figcaption></figure></PaperCard></section>
    <section className="page-section" data-testid="about-collaboration-section"><SectionLabel index="08.2">The collaboration</SectionLabel><div className="collaboration-grid"><PaperCard testId="about-hospital-card"><div className="collab-mark"><span>SP</span></div><div><span className="profile-kicker">CLINICAL PARTNER</span><h3>Hospital Sant Pau</h3><p>Cardiology · patient cohort · clinical framing</p></div></PaperCard><PaperCard testId="about-university-card"><div className="collab-mark teal-mark"><span>UB</span></div><div><span className="profile-kicker">ACADEMIC HOME</span><h3>Universitat de Barcelona</h3><p>Computer Engineering · thesis defense · research supervision</p></div></PaperCard></div></section>
    <section className="page-section" data-testid="about-citation-section"><PaperCard className="citation-card" testId="about-citation-card"><div><SectionLabel index="08.3">Cite this work</SectionLabel><h2>Keep the research attached to its context.</h2><p className="citation-text">Deepak. “Clinically-Conditioned Adaptation of Cardiac MRI Foundation Models.” Bachelor's thesis, Universitat de Barcelona, 2026.</p></div><div className="citation-actions"><CitationAction /><Button
  type="button"
  variant="outline"
  data-testid="about-email-button"
  onClick={async () => {
    try {
      await navigator.clipboard.writeText("janapadeepak345@gmail.com");
      toast.success("Email copied", {
        description: "janapadeepak345@gmail.com",
      });
    } catch {
      toast.error("Could not copy email");
    }
  }}
>
  Email
</Button><div className="contact-icons"><Button
  type="button"
  variant="outline"
  data-testid="about-linkedin-button"
  onClick={() => {
    window.open(
      "https://www.linkedin.com/in/deepakjanapa",
      "_blank",
      "noopener,noreferrer"
    );
  }}
>
  LinkedIn
</Button></div></div></PaperCard></section>
    <NextPage to="/" label="Back to the overview" testId="about-next-overview-link" /></div></ResearchLayout>;
}
