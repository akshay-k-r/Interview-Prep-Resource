import { SidebarTracker } from './src/components/Tracker';

export default {
  logo: <span>SDE Prep Platform</span>,
  project: { link: 'https://github.com/your-username/sde-prep' },
  docsRepositoryBase: 'https://github.com/your-username/sde-prep',
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
