"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
// import home from '@iconify-icons/mdi-light/home';
import { ReactNode } from "react";

type SocialMenu = {
  name: string;
  link: string;
  icon: string;
};

export const FloatingSocials = () => {
  const socials: SocialMenu[] = [
    {
      name: "Behance",
      link: "https://behance.net/aagbator",
      icon: "akar-icons:behance-fill",
    },
    {
      name: "Youtube",
      link: "",
      icon: "mdi:youtube",
    },
    {
      name: "Instagram",
      link: "",
      icon: "basil:instagram-solid",
    },
    {
      name: "Linkedin",
      link: "",
      icon: "ri:linkedin-fill",
    },
    {
      name: "Github",
      link: "",
      icon: "mdi:github",
    },
  ];

  return (
    <section className="hidden sm:flex absolute right-5 top-1/3  flex-col space-y-4">
      {socials.map(({ icon, link }, i) => (
        <Link key={i} href={link} className="text-gray-900">
          <Icon className="text-gray-900" width={30} height={30} icon={icon} />
        </Link>
      ))}
    </section>
  );
};
