import { Card, CardBody } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <Card>
        <CardBody className="grid md:grid-cols-2 gap-10 shadow-lg rounded-xl p-4 md:p-8">
          <section className="flex flex-col gap-4">{children}</section>
          <section></section>
        </CardBody>
      </Card>
    </div>
  );
}
