// based on actions/issues

"use server";
import { db } from "@/db";
import { contacts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { revalidateTag } from "next/cache";

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
  error: string;
};

// export async function createContact(
//   data: ContactData
// ): Promise<ActionResponse> {

// }
