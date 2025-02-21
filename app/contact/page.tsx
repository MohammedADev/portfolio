import Layout from "@/components/layout"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <Layout currentSection="contact">
      <div className="min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 animate-slide-up">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              Contact
            </h1>

            <p className="text-lg text-white/80">Let's discuss your next project or collaboration opportunity.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-white/60">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
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
                  className="bg-white/5 border-white/10 focus:border-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 focus:border-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="bg-white/5 border-white/10 focus:border-cyan-500 min-h-[150px]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

