// based on actions/issues

"use server";
import { db } from "@/db";
import { contacts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { revalidateTag } from "next/cache";

import emailjs from "@emailjs/browser";

// define zod schema for contact validation
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(30, "Name must be 30 characters or fewer."),

  email: z.string().email({ message: "Please enter a valid email address." }),

  message: z
    .string()
    .min(5, "Messages must be at least 5 characters.")
    .max(300, "Messages must be 300 characters or fewer."),
});

export type ContactData = z.infer<typeof ContactSchema>;

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

export async function createContact(
  data: ContactData
): Promise<ActionResponse> {
  try {
    // optionally, check for signed in user here.  Currently /contact is not a protected route
    // validate with zod
    const validationResult = ContactSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    // create contact in db with validated data
    const validatedData = validationResult.data;
    await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });

    // refresh cache
    revalidateTag("contacts");

    return {
      success: true,
      message: "Contact sent successfully.",
    };
  } catch (error) {
    console.error("Error creating contact: ", error);
    return {
      success: false,
      message: "An error occurred creating a contact",
      error: "Failed to create contact",
    };
  }
}
