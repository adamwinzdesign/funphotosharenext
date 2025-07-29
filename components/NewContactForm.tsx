// initially modeled after the IssueForm.tsx file in the course.  Ran into issue because the course did not use react-hook-form, which is now used by ShadCN.
// Attempting to modify for use with react-hook-form, per
// https://react-hook-form.com/get-started

"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Contact } from "@/db/schema";
import { Button } from "./ui/button";
import { Form, FormError, FormGroup, FormLabel, FormInput } from "./ui/form";
import { ActionResponse, createContact } from "@/app/actions/contacts";

interface ContactFormProps {
  contact?: Contact;
}

const NewContactForm = ({ contact }: ContactFormProps) => {};

export default NewContactForm;
