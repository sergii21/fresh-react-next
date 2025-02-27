import { useFormStatus } from "react-dom"
import Button from "./button";

export default function SubmitButton({children}: React.PropsWithChildren) {
    const {pending} = useFormStatus();
    return (
      <Button className="min-w-36">
        {pending ? "Submitting..." : children}
      </Button>
      // <Button className="min-w-36" disabled={pending}>{pending ? 'Submitting...' : children}</Button>
    );
}