import { SidebarTracker } from './src/components/Tracker';

export default {
  logo: (
    <>
      <style>
        {`
          .logo-light { display: block; width: 32px; height: 32px; margin-right: 8px; }
          .logo-dark { display: none; width: 32px; height: 32px; margin-right: 8px; }
          html.dark .logo-light { display: none; }
          html.dark .logo-dark { display: block; }
        `}
      </style>
      <img src="/favicon-light-32x32.png" alt="SDE Prep Platform Logo" className="logo-light" />
      <img src="/favicon-dark-32x32.png" alt="SDE Prep Platform Logo" className="logo-dark" />
      <span style={{ fontWeight: 600 }}>SDE Prep Platform</span>
    </>
  ),
  head: (
    <>
      {/* Light Mode Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon-light.ico" media="(prefers-color-scheme: light)" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-light-32x32.png" media="(prefers-color-scheme: light)" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-light-192x192.png" media="(prefers-color-scheme: light)" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-light.png" media="(prefers-color-scheme: light)" />
      
      {/* Dark Mode Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-dark-32x32.png" media="(prefers-color-scheme: dark)" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-dark-192x192.png" media="(prefers-color-scheme: dark)" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-dark.png" media="(prefers-color-scheme: dark)" />
    </>
  ),
  project: { link: 'https://github.com/akshay-k-r/Interview-Prep-Resource' },
  docsRepositoryBase: 'https://github.com/akshay-k-r/Interview-Prep-Resource',
  footer: { text: 'SDE Prep Platform' },
  main: ({ children }) => {
    return (
      <>
        <SidebarTracker />
        {children}
      </>
    );
  }
};
