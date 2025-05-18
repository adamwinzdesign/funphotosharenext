"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Contact } from "@/db/schema";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { ActionResponse, createContact } from "@/app/actions/contacts";

interface ContactFormProps {
  contact?: Contact;
}

const initialState: ActionResponse = {
  success: false,
  message: "",
  errors: undefined,
};

const NewContactForm = ({ contact }: ContactFormProps) => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(async (prevState: ActionResponse, formData: FormData) => {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await createContact(data);

      if (result.success) {
        router.refresh();
      }
      return result;
    } catch (error) {
      return {
        success: false,
        message: (error as Error).message || "An error has occurred",
      };
    }
  }, initialState);

  return <Form action={formAction}></Form>;
};

export default NewContactForm;
