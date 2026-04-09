interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
  services?: string[];
}

const projects: Project[] = [
  {
    name: "Stackable",
    description:
      "A personal collection tracker for books, board games, and everything you collect. Track, organize, and rediscover your treasures.",
    tags: ["TypeScript", "Next.js", "Supabase"],
    href: "https://www.trystackable.com",
  },
  {
    name: "Homelab",
    description:
      "Self-hosted infrastructure running on Proxmox on a Dell PowerEdge R720xd. A curated stack of open-source services for media, automation, networking, and home control.",
    tags: ["Proxmox", "Self-hosted"],
    services: [
      "Pi-hole",
      "Plex",
      "n8n",
      "Home Assistant",
      "Tailscale",
      "Ghost",
      "Mealie",
      "OMV",
      "SWAG",
    ],
  },
  {
    name: "Plants",
    description:
      "A plant care tracker for managing the plants at home. Log care history, track growth, and never miss a watering.",
    tags: ["TypeScript", "Next.js"],
    href: "https://plants.cforsythe.me",
    status: "in progress",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-5 h-5"}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-5 h-5"}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <div className="group h-full flex flex-col gap-4 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/[0.04] transition-all duration-300">
      <div className="flex items-start justify-between">
        <h3 className="font-mono text-base font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0 ml-2">
          {project.status && (
            <span className="text-[10px] font-mono text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              {project.status}
            </span>
          )}
          {project.href && (
            <span className="text-gray-600 group-hover:text-cyan-400 transition-colors">
              <ExternalLinkIcon />
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed flex-1">
        {project.description}
      </p>

      {project.services && (
        <div className="flex flex-wrap gap-1.5">
          {project.services.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono text-cyan-500/70 bg-cyan-500/[0.06] border border-cyan-500/[0.15] px-2 py-0.5 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-cyan-400">~/cforsythe</span>
          <div className="flex items-center gap-5">
            <a
              href="https://blog.cforsythe.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-500 hover:text-gray-200 transition-colors"
            >
              blog
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-500 hover:text-gray-200 transition-colors"
            >
              resume
            </a>
            <a
              href="https://github.com/cforsythe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ccforsythe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:cforsythe.cs@gmail.com"
              className="text-gray-500 hover:text-gray-200 transition-colors"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 py-28">
        <p className="font-mono text-sm text-gray-600 mb-5 tracking-wide">$ whoami</p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight text-gray-100 mb-6">
          Christopher Forsythe
          <span className="cursor" />
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-md leading-relaxed mb-10">
          Software engineer. Homelab enthusiast. Plant parent.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/cforsythe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ccforsythe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:cforsythe.cs@gmail.com"
            className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
          >
            <MailIcon className="w-4 h-4" />
            Email
          </a>
        </div>
      </section>

      {/* Currently */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <p className="font-mono text-sm text-gray-600 mb-6 tracking-wide">$ cat now.txt</p>
        <div className="flex flex-col gap-3">
          {[
            { label: "work", value: "Wrapping up a CMS procurement at Yelp and beginning the integration into our placements platform." },
            { label: "building", value: "Working toward a public launch of Stackable, a personal collection tracker for books and board games." },
            { label: "tinkering", value: "Continuing to tune and modify my 3D printers and expand my homelab on a Dell PowerEdge R720xd." },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-4 items-baseline">
              <span className="font-mono text-xs text-cyan-500/70 w-16 shrink-0">{label}</span>
              <span className="text-sm text-gray-500 leading-relaxed">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <p className="font-mono text-sm text-gray-600 mb-6 tracking-wide">$ cat about.txt</p>
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl space-y-4 text-gray-400 leading-relaxed">
            <p>
              Software engineer and tech lead at Yelp, where I&apos;ve been since 2019. The
              first few years were spent as a backend IC, and the last few leading a full-stack
              team. I started on Mercury, Yelp&apos;s notifications platform, where I helped
              expand it from push-only to support SMS and email,
              implemented intelligent copy selection using a multi-armed bandit approach that
              lifted push CTR by 5%, and re-architected the underlying queuing layer from Kafka
              to Amazon SQS to make the platform self-healing.
            </p>
            <p>
              Working alongside some sharp engineers early on pushed me to pursue a tech lead
              role, which I transitioned into in 2022. Since then I&apos;ve led a team owning a
              page that drives millions in annual revenue, built a provider-agnostic CMS
              integration layer to better support marketing needs, and recently led a full CMS
              evaluation across five vendors (gathering requirements, running demos, managing
              a shortlist POC, and coordinating scoring across stakeholders) that is currently
              pending executive approval.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "+5%", label: "push notification CTR lift via multi-armed bandit" },
              { stat: "5", label: "vendors evaluated in full CMS procurement process" },
              { stat: "TL", label: "tech lead since 2022, Yelp" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="flex flex-col gap-1 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              >
                <span className="font-mono text-2xl font-bold text-cyan-400">{stat}</span>
                <span className="text-sm text-gray-500 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <p className="font-mono text-sm text-gray-600 mb-6 tracking-wide">$ ls projects/</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <p className="font-mono text-sm text-gray-600 mb-6 tracking-wide">$ cat interests.txt</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* 3D Printing */}
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <h3 className="font-mono text-base font-semibold text-gray-200">3D Printing</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Started with a Creality Ender 5 and spent a lot of time learning how it worked:
              researching mods, swapping parts, and tuning. More interested in understanding the
              machines than just printing with them. Built a Prusa MK3S+ from a kit.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Ender 5 (modded)", "Prusa MK3S+"].map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-mono text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Cars */}
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <h3 className="font-mono text-base font-semibold text-gray-200">Cars</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Daily a modded 2019 Subaru STI. Also have a 2001 Mazda Protege, my first car,
              gifted by my aunt. Pulled the engine myself and worked with a mechanic to rebuild
              it. Had to tackle a broken diff in the transmission when I first got it too.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["2019 Subaru STI", "2001 Mazda Protege"].map((c) => (
                <span
                  key={c}
                  className="text-[11px] font-mono text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Also into */}
        <div className="flex flex-wrap items-center gap-3 px-1">
          <span className="font-mono text-xs text-gray-600">also into</span>
          <span className="font-mono text-xs text-gray-600">→</span>
          {["Reading", "Gaming", "Plants"].map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-gray-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-28">
        <p className="font-mono text-sm text-gray-600 mb-6 tracking-wide">$ contact --open</p>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-sm max-w-md leading-relaxed mb-6">
            Open to interesting conversations, collaborations, or opportunities. Best reached by email.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:cforsythe.cs@gmail.com"
              className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <MailIcon className="w-4 h-4" />
              cforsythe.cs@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ccforsythe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <DownloadIcon className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs text-gray-700">
            Christopher Forsythe · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
