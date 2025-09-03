import React from "react";
import { SectionWrapper } from "./section-wrapper";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const links = [
  {
    href: "mailto:contact@vivianb.dev",
    icon: <MdEmail className="hover:text-primary" />,
    external: false,
  },
  {
    href: "https://github.com/vbruchon",
    icon: <SiGithub className="hover:text-black dark:hover:text-white " />,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/vivian-bruchon-89441a230/",
    icon: <SiLinkedin className="hover:text-[#0A66C2]" />,
    external: true,
  },
];

type ContactProps = {
  content: {
    title: string;
    text: string;
  };
};

export const Contact = ({ content }: ContactProps) => {
  return (
    <SectionWrapper title={content.title} id="contact">
      <p className="text-center text-muted-foreground">{content.text}</p>
      <div className="flex gap-8 justify-center mt-6">
        {links.map(({ href, icon, external }, index) => (
          <Link
            key={index}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-4xl text-muted-foreground transition-colors duration-300"
          >
            {icon}
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};
