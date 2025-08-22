"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export function Contact() {
  const { register, handleSubmit, formState, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // In a real application, you would send the form data to your backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24">


      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Interested in working together? Send me a message and I'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg border bg-card p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  {...register("email", { required: true })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  {...register("message", { required: true })}
                  className="min-h-32 bg-background"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-full"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <>
                      Message Sent
                      <Mail className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
