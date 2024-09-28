import { Card, CardBody } from "@nextui-org/react";
import { ShareholderCard } from "./ShareholderCard";

export const Footer = () => {
  return (
    <div className="px-5 mt-10">
      <Card
        as="footer"
        className="rounded-2xl p-0 md:p-6 lg:p-10 bg-default-200/90 dark:bg-default-100 "
        shadow="none"
      >
        <CardBody>
          <ShareholderCard />
        </CardBody>
      </Card>
    </div>
  );
};
