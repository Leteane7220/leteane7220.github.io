import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  Award,
  Box,
  Cloud,
  Code,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Tintswalo Gift Leteane | Data Engineering & Information Systems Student",
      },
      {
        name: "description",
        content:
          "Portfolio of Tintswalo Gift Leteane, a Data Engineering & Information Systems student at the University of Johannesburg specializing in data pipelines, cloud infrastructure, and leadership.",
      },
      {
        property: "og:title",
        content: "Tintswalo Gift Leteane | Data Engineering & Information Systems Student",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Tintswalo Gift Leteane, a Data Engineering & Information Systems student at the University of Johannesburg specializing in data pipelines, cloud infrastructure, and leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Languages & Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["Python", "SQL (MS SQL Server)", "Data Aggregation"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS Glue", "AWS Lambda", "AWS Athena", "AWS EMR", "Data Lakes"],
  },
  {
    title: "Tools & Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Enterprise Architecture", "System Design"],
  },
];

const projects = [
  {
    title: "Weather Data Pipeline",
    description:
      "A Python script that taps into external web APIs to automate weather data ingestion, transformation, and storage for downstream analytics.",
    tags: ["Python", "APIs", "Data Ingestion"],
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Logistics & Inventory Tracking System",
    description:
      "An infrastructure proposal for tracking corridor assets across South Africa, designed to improve visibility and operational efficiency in logistics networks.",
    tags: ["System Design", "Enterprise Architecture", "Inventory Tracking"],
    icon: <Box className="h-6 w-6" />,
  },
  {
    title: "Blockchain Credential Verification",
    description:
      "A proof-of-concept SQL and AWS pipeline for indexing smart contracts and verifying credential authenticity on-chain.",
    tags: ["SQL", "AWS", "Blockchain", "Smart Contracts"],
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

const leadership = [
  {
    title: "Residence Academic Advisor",
    organization: "University of Johannesburg",
    description:
      "Mentored fellow students, facilitated academic support sessions, and helped build a collaborative learning environment in residence life.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Community Engagement Volunteer",
    organization: "UJ Community Engagement Volunteer Programme",
    description:
      "Contributed to outreach initiatives that connect campus resources with surrounding communities and promote inclusive education.",
    icon: <Award className="h-6 w-6" />,
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus("success");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            T.G. Leteane
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-3 border-t border-border/50 bg-background px-4 py-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              University of Johannesburg
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Tintswalo Gift{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leteane
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Data Engineering & Information Systems Student building scalable data pipelines,
            cloud infrastructure, and systems that turn raw information into insight.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              <Code className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              I am currently pursuing my studies in Data Engineering and Information Systems at
              the{" "}
              <span className="font-semibold text-foreground">University of Johannesburg</span>,
              where I am developing a deep interest in the systems that move and transform data
              at scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Data Pipeline Infrastructure
              </h3>
              <p className="text-sm text-muted-foreground">
                Designing ingestion, transformation, and storage workflows that prepare data for
                analytics and decision-making.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Cloud Environments</h3>
              <p className="text-sm text-muted-foreground">
                Hands-on experience with AWS services including Glue, Lambda, Athena, and EMR to
                build serverless and scalable data platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Residence Academic Advisor
              </h3>
              <p className="text-sm text-muted-foreground">
                Serving as a peer academic mentor in residence, fostering collaborative learning
                and supporting student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-muted/30 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technical Skills
            </h2>
            <p className="text-muted-foreground">
              A growing toolkit focused on data engineering, cloud infrastructure, and systems
              architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  {group.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Selected work that demonstrates data pipelines, systems thinking, and cloud
              infrastructure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  {project.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-muted/30 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership & Community
            </h2>
            <p className="text-muted-foreground">
              Beyond the classroom, I invest in peer learning and community engagement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-1 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{item.organization}</p>
                <p className="flex-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get In Touch
              </h2>
              <p className="text-muted-foreground">
                Have a question, opportunity, or just want to connect? Send a message.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
              >
                Send Message
              </button>
              {formStatus === "success" && (
                <p className="text-center text-sm font-medium text-accent">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-foreground">Tintswalo Gift Leteane</p>
              <p className="text-sm text-muted-foreground">
                Data Engineering & Information Systems Student
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tintswalo Gift Leteane. Built with care.
          </div>
        </div>
      </footer>
    </div>
  );
}
