"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  contactFormSchema,
  ContactFormSchemaType,
} from "../../../app/[lang]/contact/contact.schema";
import { sendContactEmail } from "../../../app/[lang]/contact/contact.action";
import { toast } from "sonner";

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

type ContactFormProps = {
  content: {
    form: {
      labels: Record<string, string>;
      placeholders: Record<string, string>;
      button: {
        submit: string;
        sending: string;
      };
    };
    toast: {
      success: string;
      error: string;
    };
  };
};

export function ContactForm({ content }: ContactFormProps) {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormSchemaType) => {
    setIsSending(true);
    try {
      await sendContactEmail(values);
      toast.success(content.toast.success);
      form.reset();
    } catch {
      toast.error(content.toast.error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="relative z-10">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {(["name", "email", "subject", "message"] as const).map(
                  (fieldName) => {
                    const isTextarea = fieldName === "message";

                    return (
                      <FormField
                        key={fieldName}
                        control={form.control}
                        name={fieldName}
                        render={({ field }) => (
                          <motion.div
                            variants={fieldVariants}
                            transition={{ duration: 0.3 }}
                          >
                            <FormItem className="flex flex-col gap-3">
                              <FormLabel>
                                {content.form.labels[fieldName]}
                              </FormLabel>
                              <FormControl>
                                {isTextarea ? (
                                  <Textarea
                                    {...field}
                                    placeholder={
                                      content.form.placeholders[fieldName]
                                    }
                                    aria-label={content.form.labels[fieldName]}
                                  />
                                ) : (
                                  <Input
                                    {...field}
                                    placeholder={
                                      content.form.placeholders[fieldName]
                                    }
                                    aria-label={content.form.labels[fieldName]}
                                  />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </motion.div>
                        )}
                      />
                    );
                  }
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-end"
                >
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="hover:scale-105 transition-transform duration-200"
                    aria-label="Submit contact form"
                  >
                    {isSending
                      ? content.form.button.sending
                      : content.form.button.submit}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
