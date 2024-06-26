import FooterDecoration from "@/components/Footer/FooterDecoration";
import DiscordIcon from "@/components/ui/icons/discord";
import GithubIcon from "@/components/ui/icons/github";
import TwitterIcon from "@/components/ui/icons/twitter";
import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  TWITTER_URL,
} from "@/lib/contants";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("");

  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary-500/10 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-8 max-w-[360px] lg:mb-16">
                <Link href="/public" className="mb-8 inline-block">
                  <Image
                    src="/logo-light.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-gray-600 dark:text-body-color">
                  {t("metadata.description")}
                </p>
                <div className="flex items-center">
                  <a
                    href={TWITTER_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6 hover:text-primary-500"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      width="18"
                      height="14"
                      className="fill-[#6b7280] dark:fill-[#CED3F6] hover:fill-primary-500"
                    />
                  </a>
                  <a
                    href={EMAIL_URL}
                    aria-label="social-link"
                    className="mr-6 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MailIcon
                      width="20"
                      height="16"
                      className="text-[#6b7280] dark:text-[#CED3F6] hover:text-primary-500"
                    />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6"
                    rel="noreferrer"
                  >
                    <GithubIcon
                      width="20"
                      height="16"
                      className="text-[#6b7280] dark:text-[#CED3F6] hover:text-primary-500"
                    />
                  </a>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6"
                    rel="noreferrer"
                  >
                    <DiscordIcon
                      width="20"
                      height="19"
                      className="fill-[#6b7280] dark:fill-[#CED3F6] hover:fill-primary-500"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="#partners"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      Partners{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      Why{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      Team{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Other
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://doc.thebadge.xyz/"
                      target="_blank"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                      rel="noreferrer"
                    >
                      {" "}
                      Docs{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      Blogs{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="mb-4 inline-block text-base font-medium text-gray-600 dark:text-body-color hover:text-primary-500 dark:hover:text-primary-500"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full bottom-0">
            <p className="mb-10 text-base text-black dark:text-white">
              ©{new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
        <FooterDecoration />
      </footer>
    </>
  );
};

export default Footer;
