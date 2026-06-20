import { SidebarTracker } from "./src/components/Tracker";

export default {
  logo: (
    <>
      <style>{`
        .logo-light {
          display: block;
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }

        .logo-dark {
          display: none;
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }

        html.dark .logo-light {
          display: none;
        }

        html.dark .logo-dark {
          display: block;
        }
      `}</style>

      <img
        src="/favicon-light-32x32.png"
        alt="Interview Prep Resource"
        className="logo-light"
      />

      <img
        src="/favicon-dark-32x32.png"
        alt="Interview Prep Resource"
        className="logo-dark"
      />

      <span style={{ fontWeight: 700 }}>
        Interview Prep Resource
      </span>
    </>
  ),

  project: {
    link: "https://github.com/akshay-k-r/Interview-Prep-Resource",
  },

  docsRepositoryBase:
    "https://github.com/akshay-k-r/Interview-Prep-Resource/tree/main",

  editLink: {
    text: "Edit this page on GitHub →",
  },

  feedback: {
    content: "Found an issue? Report it here →",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s | Interview Prep Resource",
    };
  },

  head: (
    <>
      {/* Primary SEO */}
      <meta
        name="description"
        content="A comprehensive interview preparation platform covering System Design, HLD, LLD, Design Patterns, DSA, Concurrency, Operating Systems, Computer Networks, Databases, and Behavioral interviews."
      />

      <meta
        name="keywords"
        content="System Design, HLD, LLD, Design Patterns, DSA, SDE Interview, Software Engineer, Low Level Design, High Level Design, Interview Preparation"
      />

      <meta
        name="author"
        content="Akshay Kumar"
      />

      <meta
        name="theme-color"
        content="#0f172a"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Interview Prep Resource"
      />

      <meta
        property="og:description"
        content="Comprehensive interview preparation platform for Software Engineers."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content="/og-image.png"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="Interview Prep Resource"
      />

      <meta
        name="twitter:description"
        content="Comprehensive interview preparation platform for Software Engineers."
      />

      <meta
        name="twitter:image"
        content="/og-image.png"
      />

      {/* Light Icons */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon-light.ico"
        media="(prefers-color-scheme: light)"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-light-32x32.png"
        media="(prefers-color-scheme: light)"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-light-192x192.png"
        media="(prefers-color-scheme: light)"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-light.png"
        media="(prefers-color-scheme: light)"
      />

      {/* Dark Icons */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon-dark.ico"
        media="(prefers-color-scheme: dark)"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-dark-32x32.png"
        media="(prefers-color-scheme: dark)"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-dark-192x192.png"
        media="(prefers-color-scheme: dark)"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-dark.png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  ),

  main: ({ children }) => (
    <>
      <SidebarTracker />
      {children}
    </>
  ),
  footer: {
    component: (
        <footer
          style={{
            borderTop: "1px solid var(--nextra-border)",
            padding: "2rem 0 1.5rem",
          }}
        > <hr/>
          <div
            style={{
              maxWidth: "1200px",
              margin: "10px auto",
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "2.5rem",
              padding: "0 1rem",
            }}
          >
            {/* Brand */}
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.35rem",
                  fontWeight: 700,
                }}
              >
                Interview Prep Resource
              </h2>

              <p
                style={{
                  marginTop: "1rem",
                  lineHeight: 1.8,
                  opacity: 0.75,
                }}
              >
                A comprehensive learning platform for Software Engineers
                preparing for coding interviews, System Design,
                Low-Level Design, Design Patterns, and leadership rounds.
              </p>
            </div>

            {/* Community */}
            <div>
              <h3 style={{ marginBottom: "1rem", fontWeight: 500 }}>Community</h3>

              <div style={{ display: "grid", gap: ".65rem" }}>
                <a href="/about" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  About
                </a>
                <a
                  href="https://github.com/akshay-k-r/Interview-Prep-Resource"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/akshay-kumar-0137a5148/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/akshay-k-r/Interview-Prep-Resource/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  Report Issue
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--nextra-border)",
              textAlign: "center",
              opacity: 0.7,
              lineHeight: 1.8,
            }}
          >
            <div>
              © {new Date().getFullYear()} &nbsp;
              <a
                  href="https://www.linkedin.com/in/akshay-kumar-0137a5148/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Akshay Kumar
              </a>
            </div>

            <div>
              Built with ❤️ using Next.js • Nextra • MDX
            </div>

            <div>
              Open Source under the MIT License
            </div>
          </div>
        </footer>
      ),
    },
  };