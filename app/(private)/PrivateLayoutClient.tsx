'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Footer } from "@/components/footer";

const ProfileHeader = dynamic(() => import('@/components/ProfileHeader/ProfileHeader'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Sidebar = dynamic(() => import('@/components/Sidebar/Sidebar'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

export default function PrivateLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProfileHeader />
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
