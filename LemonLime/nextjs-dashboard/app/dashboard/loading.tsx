import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() { 
  return <DashboardSkeleton />; 

  /**
  return <div>Loading... loading.tsx is a special Next.js file 
  built on top of Suspense, it allows you to create fallback 
  UI to show as a replacement while page content loads.Since SideNav
   while the dynamic content is loading.</div>;
  */
}