const SectionTitle = ({
  title,
  paragraph,
  subParagraph,
  width,
  center,
  mb,
}: {
  title: string;
  paragraph?: string;
  subParagraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`flex-1 wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-body-color md:text-lg mt-4">
          {subParagraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
