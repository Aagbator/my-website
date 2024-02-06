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
      link: "https://www.youtube.com/channel/UCi10T744ctNQK85_OaQFihg",
      icon: "mdi:youtube",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/anthonyagbator",
      icon: "basil:instagram-solid",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/anthony-agbator",
      icon: "ri:linkedin-fill",
    },
    {
      name: "Github",
      link: "https://github.com/aagbator",
      icon: "mdi:github",
    },
  ];

  return (
    <section className="hidden sm:flex absolute right-5 top-[30vh]  flex-col space-y-4">
      {socials.map(({ icon, link }, i) => (
        <Link target="_blank" key={i} href={link} className="text-gray-900">
          <Icon className="text-gray-900" width={30} height={30} icon={icon} />
        </Link>
      ))}
    </section>
  );
};
