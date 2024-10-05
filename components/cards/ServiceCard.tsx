"use client";
import { Button } from "@nextui-org/react";
// import { HiOutlineChevronRight } from "react-icons/hi";
// import { CardContainer, CardItem } from "../ui/3d-card";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useRouter } from "next/navigation";

export const ServiceCard = ({
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

  const router = useRouter();

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-default-100 rounded-2xl p-6 flex flex-col justify-between">
        <CardItem
          translateZ="100"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <Button variant="flat" size="lg" isIconOnly color="primary">
            {icon}
          </Button>
        </CardItem>
        <div>
        <CardItem
          as="h3"
          translateZ="60"
          className="text-lg font-semibold"
        >
         {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         {description}
        </CardItem>
        </div>
        <div className="flex justify-end items-center">
          
          <CardItem
            translateZ="100"
            as={Button}
            onPress={() => router.push(href)}
            className="bg-black dark:bg-white text-white dark:text-black"
          >
            Más información <span className="ml-2">→</span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

{
  /* <Card shadow="none" className="bg-default-100 basis-1/3 p-4">
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
</Card> */
}
