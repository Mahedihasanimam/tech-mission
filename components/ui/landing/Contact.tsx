import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-12 lg:py-24 bg-brand-primary text-white">
       <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold font-raleway">Get In Touch</h2>
          <p className="mt-4 text-lg text-blue-200">Hey! Let’s Talk</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 bg-white text-gray-800">
            <CardContent className="p-8">
              <form className="space-y-6">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" size="lg" className="w-full">Send Now</Button>
              </form>
            </CardContent>
          </Card>
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-4 rounded-lg"><Phone className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-xl">Call Anytime</h4>
                <p className="text-blue-200">+ 91 23678 27867</p>
                <p className="text-blue-200">+ 91 67678 92878</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-white/20 p-4 rounded-lg"><Mail className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-xl">Send Email</h4>
                <p className="text-blue-200">connect@techmission.com</p>
                <p className="text-blue-200">hello@techmission.com</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-white/20 p-4 rounded-lg"><MapPin className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-xl">Visit Us</h4>
                <p className="text-blue-200">20 Island Park Road, New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}