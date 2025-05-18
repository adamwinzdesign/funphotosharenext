// example of emailJS form: https://github.com/adamwinzdesign/single_page_developer_portfolio/blob/main/components/Contact/Contact.js
// https://www.emailjs.com/docs/examples/reactjs/
// https://ui.shadcn.com/docs/components/form

// modeled after app/issues/new/page.tsx, really just houses the NewIssue/NewContactForm component

import Link from "next/link";
import { Suspense } from "react";

const ContactPage = () => {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1>I would love to hear from you!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <NewContactForm /> */}
      </Suspense>
    </div>
  );
};

export default ContactPage;
