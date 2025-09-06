import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { getDictionary } from "@/locales/dictionnaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const contactDict = await getDictionary(lang, "contact-page");
  return (
    <div className="flex flex-col gap-8 justify-center">
      <h1 className="text-3xl font-bold">{contactDict.title}</h1>
      <p className="text-muted-foreground ">{contactDict.introText}</p>
      <div className="max-w-2xl mx-auto w-full space-y-4">
        <ContactForm content={contactDict} />
      </div>

      <ContactInfo replyNote={contactDict.replyNote} />
    </div>
  );
}
