import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

export const FunctionCard = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card shadow="none" className="bg-default-100 basis-1/3 p-4">
      <CardHeader className="flex flex-col gap-2 items-start">
        <Button size="lg" isIconOnly color="primary">
          {icon}
        </Button>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <Link href={href} className="text-primary flex items-center gap-2 link">
          Más información
          <HiOutlineChevronRight className="link-icon transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};
