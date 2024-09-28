import { Card, CardBody } from "@nextui-org/react";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <Card>
        <CardBody className="grid md:grid-cols-2 gap-10 shadow-lg rounded-xl p-4 md:p-8">
          {children}
          <section></section>
        </CardBody>
      </Card>
    </div>
  );
}
