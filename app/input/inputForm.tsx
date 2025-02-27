"use client";

import { useActionState } from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/buttons/submitButton";
import InputError from "../UI/inputError";
import ImageUpload from "../UI/imageUpload";
import H1 from "../UI/h1";

type InputFormType = { name: string, manufacturer: string, dueDate: string, quantity: string };

async function inputFormAction(prevState, formData: FormData) {
  const { name, manufacturer, dueDate, quantity } =
    Object.fromEntries(formData) as InputFormType;

  const errors: string[] | null = [];

  if (!name.trim()?.length) {
    errors.push("Product name can't be empty");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        name,
        manufacturer,
        dueDate,
        quantity,
      },
    };
  }

  console.log({ name, manufacturer, dueDate, quantity });
}

export default function InputForm({addFormOpened}: {addFormOpened: boolean}) {
  const enteredValues: InputFormType = {
    name: "",
    manufacturer: "",
    dueDate: "",
    quantity: ""
  }
  const [formState, formAction] = useActionState(inputFormAction, {
    errors: [],
    enteredValues,
  });

  const form = (
  <>
        <H1>Enter product details</H1>

  <form action={formAction}>
  <Input
    type="text"
    name="name"
    placeholder="Name"
    defaultValue={formState?.enteredValues.name}
  ></Input>
  <Input
    type="text"
    name="manufacturer"
    placeholder="Manufacturer"
    defaultValue={formState?.enteredValues.manufacturer}
  ></Input>
  <Input
    type="date"
    name="dueDate"
    placeholder="Due date"
    defaultValue={formState?.enteredValues.dueDate}
  ></Input>
  <Input
    type="number"
    name="quantity"
    placeholder="Quantity"
    defaultValue={formState?.enteredValues.quantity}
  ></Input>
  <ImageUpload className="mb-10"></ImageUpload>
  {formState?.errors && (
    <ul>
      {formState?.errors.map((e) => (
        <InputError key={e}>{e}</InputError>
      ))}
    </ul>
  )}
  <SubmitButton>Save</SubmitButton>
</form>
</>);

  return (
    <>
   {addFormOpened ? form : null}
    </>
  );
}
