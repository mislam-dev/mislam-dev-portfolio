import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, opportunities, or
              partnerships. Feel free to reach out to me using the contact form
              or through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a
                    href="mailto:monirul@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mmislam027@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1963 636430
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">
                    Jashore, Khulna, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
