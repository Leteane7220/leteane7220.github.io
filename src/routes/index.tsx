import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Server,
  Workflow,
  Cpu,
  HardDrive,
  Box,
  ShieldCheck,
  CloudRain,
  Truck,
  Link2,
  GraduationCap,
  Users,
  Mail,
  Github,
  Linkedin,
  Menu,
  ArrowDown,
  ExternalLink,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tintswalo Gift Leteane | Data Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Tintswalo Gift Leteane — Data Engineering & Information Systems student at the University of Johannesburg, building data pipelines and cloud solutions.",
      },
      { property: "og:title", content: "Tintswalo Gift Leteane | Data Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Data Engineering & Information Systems student at the University of Johannesburg. Explore projects in Python, SQL, AWS, and cloud data pipelines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const skillCategories = [
  {
    title: "Languages & Databases",
    icon: Code2,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "SQL (MS SQL Server)", icon: Database },
      { name: "Data Aggregation", icon: Layers },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS Glue", icon: Workflow },
      { name: "AWS Lambda", icon: Server },
      { name: "AWS Athena", icon: Database },
      { name: "AWS EMR", icon: Cpu },
      { name: "Data Lakes", icon: HardDrive },
    ],
  },
  {
    title: "Tools & Architecture",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Enterprise Architecture", icon: Box },
      { name: "System Design", icon: Layers },
    ],
  },
];

const projects = [
  {
    title: "Weather Data Pipeline",
    description:
      "A Python-based ingestion pipeline that consumes external weather APIs, normalises the payload, and stores structured data for downstream analytics.",
    icon: CloudRain,
    tags: ["Python", "REST APIs", "Data Ingestion"],
  },
  {
    title: "Logistics & Inventory Tracking System",
    description:
      "An infrastructure proposal for tracking corridor assets across South Africa, focusing on scalable data models and reliable inventory flows.",
    icon: Truck,
    tags: ["System Design", "Data Modelling", "Enterprise Architecture"],
  },
  {
    title: "Blockchain Credential Verification",
    description:
      "A SQL and AWS proof-of-concept pipeline that indexes smart-contract events to verify academic credentials on-chain.",
    icon: ShieldCheck,
    tags: ["SQL", "AWS", "Blockchain Indexing"],
  },
];

const leadershipRoles = [
  {
    title: "Residence Academic Advisor",
    organisation: "University of Johannesburg",
    description:
      "Mentored residence students through academic planning and study strategies, fostering a supportive learning environment and improved student success.",
    icon: GraduationCap,
  },
  {
    title: "Community Engagement Volunteer",
    organisation: "UJ Community Engagement Volunteer Programme",
    description:
      "Contributed to outreach initiatives that bridge campus resources with local communities, building teamwork and social impact skills.",
    icon: Users,
  },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container-tight flex h-16 items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          TGL<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              className="ml-2"
              onClick={() => scrollToSection("#contact")}
            >
              Contact
            </Button>
          </li>
        </ul>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-lg">
                Menu
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--color-glow)_0%,transparent_50%)] opacity-60" />

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          University of Johannesburg
        </div>

        <h1 className="mt-8 max-w-4xl font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Tintswalo Gift{" "}
          <span className="gradient-text">Leteane</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Data Engineering & Information Systems Student crafting reliable data pipelines,
          cloud infrastructure, and intelligent systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="gap-2"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("#contact")}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I am a Data Engineering & Information Systems student at the{" "}
                <span className="text-foreground">University of Johannesburg</span>, passionate
                about turning raw data into structured, actionable insight.
              </p>
              <p>
                My academic journey has centred on building resilient{" "}
                <span className="text-foreground">data pipeline infrastructure</span>, working
                across cloud environments — especially{" "}
                <span className="text-foreground">AWS</span> — and designing systems that scale
                from prototype to production.
              </p>
              <p>
                Beyond the code, I serve as a{" "}
                <span className="text-foreground">Residence Academic Advisor</span>, supporting
                fellow students with academic planning and creating an environment where learning
                thrives.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-accent/20 blur-2xl" />
            <Card className="relative border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-secondary p-5">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                      Education
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      University of Johannesburg
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Data Engineering & Information Systems
                    </p>
                  </div>
                  <div className="rounded-xl bg-secondary p-5">
                    <Cloud className="h-8 w-8 text-cyan-accent" />
                    <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                      Cloud Focus
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      AWS Glue, Lambda, Athena, EMR
                    </p>
                    <p className="text-sm text-muted-foreground">Data Lakes & Pipelines</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-5 sm:col-span-2">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                      Leadership
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Residence Academic Advisor — mentoring students, organising academic support,
                      and driving student success initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground">
            A growing toolkit focused on data engineering, cloud infrastructure, and system design.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="card-hover border-border bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 font-heading text-xl text-card-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                    >
                      <skill.icon className="h-4 w-4 text-cyan-accent" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hands-on work across data pipelines, enterprise architecture, and cloud indexing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="card-hover flex flex-col border-border bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-cyan-accent/20 text-primary">
                  <project.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-5 font-heading text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Leadership & Community
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contributing beyond the classroom through mentorship and community engagement.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leadershipRoles.map((role) => (
            <Card
              key={role.title}
              className="card-hover border-border bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <role.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-5 font-heading text-xl text-card-foreground">
                  {role.title}
                </CardTitle>
                <CardDescription className="font-medium text-muted-foreground">
                  {role.organisation}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:tintswalo.leteane@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you want to discuss data engineering, cloud architecture, or collaboration
              opportunities, I would love to hear from you.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/tintswalo-leteane"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-card-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Tintswalo Leteane</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-card-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">@tintswalo-leteane</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <Card className="border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-card-foreground">
                    Message ready to send
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Your default email client should now be open with the message pre-filled.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-tight flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tintswalo Gift Leteane. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/tintswalo-leteane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:tintswalo.leteane@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
