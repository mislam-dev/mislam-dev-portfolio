import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/links";

// 2. Contact Social
export const ContactSocial = () => (
  <div className="w-full lg:px-3 h-full flex lg:justify-center items-center">
    <div>
      <h4 className="lg:hidden text-xl mb-2 text-left">Links</h4>
      <div className="lg:space-y-2 gap-2 lg:gap-0 grid grid-cols-3 sm:grid-cols-5 md:grid-flow-col lg:grid-cols-1 lg:grid-flow-row">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-foreground/80 hover:text-primary transition-colors duration-200 block"
            aria-label={link.label}
            title={link.label}
          >
            <Button variant="outline" className="w-full">
              <p className="flex items-center">{link.label}</p>
            </Button>
          </a>
        ))}
      </div>
    </div>
  </div>
);
// 2. Contact Social
export const ContactSocial2 = () => (
  <div className="w-full px-3 h-full flex justify-center items-center">
    <div>
      <h4 className="hidden text-xl mb-2 text-center">Links</h4>
      <div className="space-y-2">
        {SOCIAL_LINKS.slice(Math.floor(SOCIAL_LINKS.length / 2)).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-foreground/80 hover:text-primary transition-colors duration-200 block"
            aria-label={link.label}
            title={link.label}
          >
            <Button variant="outline" className="w-full">
              <p className="flex items-center">{link.label}</p>
            </Button>
          </a>
        ))}
      </div>
    </div>
  </div>
);
