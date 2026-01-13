"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch(
  //       "https://formsubmit.co/ajax/fintaxionconsulting@gmail.com",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       setIsSubmitting(true); // Show success message
  //     } else {
  //       alert("Something went wrong. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     alert("Error submitting the form.");
  //   }

  //   setIsSubmitting(false);
  // };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/geekyvinayak@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({...values,_template: "table",}),
        }
      );

      if (response.ok) {

        setIsSubmitting(true); // Show success message
        setTimeout(() => {
          setIsSubmitting(false)
          setIsSuccess(true)
    
          // Reset success state after 3 seconds
          setTimeout(() => {
            setIsSuccess(false)
            form.reset()
          }, 3000)
    
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          })
        }, 1500)
      } else {
        toast({
          title: "Something went wrong!",
          description: " Please try again later.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong!",
        description: " Please try again later.",
      })
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "geekyvinayak@gmail.com",
      link: "mailto:geekyvinayak@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "Linkedin",
      value: "ivinayakpandey",
      link: "https://www.linkedin.com/in/ivinayakpandey/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "Github",
      value: "geekyvinayak",
      link: "https://github.com/geekyvinayak",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Ahmedabad Gujarat, IN",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-16" aria-labelledby="contact-heading">
      <div className="container px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} target="blank" className="text-sm text-muted-foreground hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="transition-all focus-within:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="transition-all focus-within:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Message subject"
                              {...field}
                              className="transition-all focus-within:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px] transition-all focus-within:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <AnimatePresence mode="wait">
                      {isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="w-full p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md text-center"
                        >
                          Message sent successfully!
                        </motion.div>
                      ) : (
                        <motion.div
                          key="button"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <motion.span
                                  className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                />
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <Send className="h-4 w-4" />
                                Send Message
                              </span>
                            )}
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
