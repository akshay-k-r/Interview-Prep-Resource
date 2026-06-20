import { SidebarTracker } from './src/components/Tracker';

export default {
  logo: (
    <>
      <img 
        src="/favicon-32x32.png" 
        alt="SDE Prep Platform Logo" 
        style={{ width: '32px', height: '32px', marginRight: '8px' }} 
      />
      <span style={{ fontWeight: 600 }}>SDE Prep Platform</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
