import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout currentSection="contact">
      <div className="min-h-screen p-8 md:p-16">
        <div className="mx-auto grid max-w-6xl animate-slide-up gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
              Contact
            </h1>

            <p className="text-lg text-muted-foreground">
              Let's discuss your next project or collaboration opportunity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    work@mohammedabdelaziz.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-muted-foreground">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="border-border bg-card/5"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="border-border bg-card/5"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] border-border bg-card/5"
                />
              </div>

              <Button className="group relative w-full overflow-hidden bg-primary text-background shadow-lg transition-transform hover:scale-[0.98] hover:shadow-primary/25 active:scale-95">
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(var(--secondary),0.3),transparent_70%)]" />
                </div>
                <span className="absolute inset-0 flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
