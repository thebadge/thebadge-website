import { useTranslations } from "next-intl";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import featuresData from "@/components/Features/Agro/featuresData";
import Image from "next/image";

const Features = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section id="benefits" className="container relative">
        <div className="flex flex-col gap-6 py-10">
          <h2 className="text-5xl mb:text-6xl lg:text-7xl">User Benefits</h2>

          <ScrollArea orientation="horizontal">
            <div className="flex space-x-6 pb-4">
              {featuresData.map((benefits) => (
                <div
                  key={benefits.id}
                  className="w-[300px] flex flex-col gap-4 p-2 md:p-4 rounded-md border bg-offWhite"
                >
                  <h4 className="h-[2lh] text-lg mb:text-xl lg:text-2xl text-primary-800">
                    {benefits.title}
                  </h4>
                  <figure className="shrink-0">
                    <div className="overflow-hidden bg-lightGreen rounded-md">
                      <Image
                        src={benefits.image}
                        alt={`Photo to describe the ${benefits.title}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                  </figure>
                  <p className="text-primary-800">{benefits.paragraph}</p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </>
  );
};

export default Features;
