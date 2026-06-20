import { SidebarTracker } from './src/components/Tracker';

export default {
  logo: <span>SDE Prep Platform</span>,
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
