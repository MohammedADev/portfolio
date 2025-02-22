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
            <h1 className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
              Contact
            </h1>

            <p className="text-lg text-white/80">
              Let's discuss your next project or collaboration opportunity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                  <Mail className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-white/60">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-white/60">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="border-white/10 bg-white/5 focus:border-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="border-white/10 bg-white/5 focus:border-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] border-white/10 bg-white/5 focus:border-cyan-500"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
