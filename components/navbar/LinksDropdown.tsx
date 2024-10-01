import { navLink } from "@/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  
} from "@nextui-org/react";

export const LinksDropdown = ({
  items,
  label,
}: {
  items: navLink[];
  label: string;
}) => {
  return (
    <Dropdown showArrow>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-default-500 dark:text-default-800 font-normal text-base"
          variant="light"
        >
          {label}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        variant="flat"
        color="primary"
        classNames={{
          list: "grid grid-cols-2 gap-2 p-2",
        }}
        itemClasses={{
          base: "gap-4",
        }}
        items={items}
      >
        {(item) => (
          <DropdownItem
            className="w-60"
            description={item.description}
            key={item.href}
            href={item.href}
          >
            {item.title}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
