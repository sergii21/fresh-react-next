"use client";

import { useActionState } from "react";
import Input from "../shared/input";
import SubmitButton from "../shared/submitButton";

function inputFormAction(prevState, formData: FormData) {
  const name: string = formData.get("name") as string;

  const errors: string[] | null = [];

  if (!name.trim()?.length) {
    errors.push("Product name can't be empty");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        name,
      },
    };
  }

  console.log({ name });
}

export default function InputForm() {
  const [formState, formAction] = useActionState(inputFormAction, {
    errors: [],
    enteredValues: { name: "" },
  });

  return (
    <form action={formAction}>
      <Input
        type="text"
        name="name"
        defaultValue={formState?.enteredValues.name}
      ></Input>
      {formState?.errors && (
        <ul>
          {formState?.errors.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      <SubmitButton>Save</SubmitButton>
    </form>
  );
}
