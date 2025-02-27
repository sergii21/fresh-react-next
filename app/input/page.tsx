"use client";

import { useState } from "react";
import PageHeader from "../UI/pageHeader";
import PageLayout from "../UI/pageLayout";
import InputForm from "./inputForm";

export default function InputPage() {
  const [addFormOpened, setAddFormOpened] = useState(false);

  function handleSetAddFormOpened() {
    setAddFormOpened(!addFormOpened);
  }

  return (
    <>
      <PageHeader handleSetAddFormOpened={handleSetAddFormOpened}></PageHeader>
      <PageLayout>
        <InputForm addFormOpened={addFormOpened}></InputForm>
      </PageLayout>
    </>
  );
}
