// example of emailJS form: https://github.com/adamwinzdesign/single_page_developer_portfolio/blob/main/components/Contact/Contact.js
// https://www.emailjs.com/docs/examples/reactjs/
// https://ui.shadcn.com/docs/components/form

import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Form, FormLabel, FormItem } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactPage = () => {
  return <h1>Contact Page! Not protected!</h1>;
};

export default contactPage;
