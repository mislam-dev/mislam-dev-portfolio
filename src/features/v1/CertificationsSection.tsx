import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Certification, certifications } from "@/data/certificates";

import { Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Props {
  cert: Certification;
}
export function CertificationCard({ cert }: Props) {
  return (
    <Card className="group flex flex-col overflow-hidden border-muted/60 transition-all hover:shadow-md">
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-background/80 text-foreground backdrop-blur-md border-none shadow-sm">
            {cert.category}
          </Badge>
        </div>
      </div>

      {/* Header */}
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="h-4 w-4 text-blue-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {cert.issuer}
          </span>
        </div>
        <CardTitle className="text-lg font-bold leading-tight line-clamp-1">
          {cert.title}
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4 pt-0 grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {cert.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cert.tags.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-[10px] px-2 py-0"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-4 bg-muted/5">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
          <Calendar className="h-3.5 w-3.5" />
          <span>Issued {cert.issueDate}</span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="mt-3 h-8 text-xs gap-2"
          asChild
        >
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
