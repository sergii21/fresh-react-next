import { PlusIcon } from "@heroicons/react/24/solid";
import IconButton from "./iconButton";

export default function addButton() {
  return (
    <IconButton className="bg-primaryForeground">
      <PlusIcon className="text-primaryBackground size-10"></PlusIcon>
    </IconButton>
  );
}