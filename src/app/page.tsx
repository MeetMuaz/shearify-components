import Image from "next/image";
import Link from "next/link";
import Slider from "@mui/material/Slider";
import FAQ from "./components/Faq";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email to create a new password.",
  },
  {
    question: "What are the system requirements for your software?",
    answer:
      "Our software is compatible with Windows, macOS, and Linux operating systems. Please check the product documentation for specific system requirements and compatibility details.",
  },
  {
    question: "Can I upgrade my subscription plan?",
    answer:
      "Yes, you can upgrade your subscription plan at any time. Log in to your account, navigate to the subscription settings, and choose the desired upgrade option. Any applicable fees will be prorated based on your current subscription.",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "Our customer support team is available from Monday to Friday, 9:00 AM to 5:00 PM (local time). For urgent issues outside of these hours, you can leave a message, and we will get back to you as soon as possible during the next business day.",
  },
];

export default function Home() {
  const style = { backgroundImage: "url('/call.webp')" };

  return (
    <div className="px-5 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-7xl text-[#de9005] font-bold">
            Sherify it.
          </h1>
          <p className="text-lg md:text-4xl text-[#000000] mt-2 md:mt-5 font-semibold">
            You could earn.
          </p>
          <h1 className="text-6xl md:text-8xl text-[#000000] mt-2 md:mt-5 font-bold">
            $90
          </h1>

          {/* Benefits Section */}
          <div className="mt-5 md:mt-10">
            <p className="text-base md:text-lg font-semibold mt-2">
              <span className="underline underline-offset-1">1 booking</span> at
              an estimate 20 dollars
            </p>
            <p className="text-base md:text-lg font-semibold mt-2">
              <span className="underline underline-offset-1">
                {" "}
                1 subscription
              </span>{" "}
              at an estimate 20 dollars
            </p>
            <p className="text-base md:text-lg font-semibold mt-2">
              <span className="underline underline-offset-1">
                {" "}
                1 membership
              </span>{" "}
              at an estimate 20 dollars
            </p>
            <p className="text-base md:text-lg font-semibold mt-2">
              <span className="underline underline-offset-1">
                {" "}
                1 family offer
              </span>{" "}
              at an estimate 20 dollars
            </p>
          </div>

          {/* Slider Section */}
          <div className="mt-5 md:mt-10">
            <Slider
              value={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{ color: "black" }}
            />
            <p className="text-base md:text-lg font-normal mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              unde.
            </p>
          </div>
        </div>
        {/* Placeholder for the second column on larger screens */}
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            alt="mobile phone"
            src="/phone1.webp"
            width={300}
            height={300}
          />
          <Image
            className="hidden lg:block"
            alt="mobile phone"
            src="/phone2.webp"
            width={300}
            height={300}
          />
        </div>
      </header>

      {/* drop-down section */}
      <section className="mt-14 md:mt-28 mb-14 md:mb-28">
        <h1 className="text-2xl md:text-5xl text-[#000000] font-bold text-center">
          Question people ask.
        </h1>
        <div className="max-w-xl mx-auto mt-8">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* footer section */}
      <section className="mt-14 md:mt-28 mb-14 md:mb-28">
        <div
          className="h-96 px-5 rounded bg-cover bg-center bg-gray-100"
          style={style}
        />
        <div className="text-container mt-4 md:mt-6 lg:mt-8 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl text-[#000000] font-bold">
            Still have questions?
          </h1>
          <p className="text-base md:text-lg text-[#000000] font-normal mt-3 md:mt-5 lg:mt-7 mb-3 md:mb-5 lg:mb-7">
            Get answers from an experienced Superhost near you.
          </p>
          <Link href="https://instagram.com">
            <span className="border border-black hover:bg-black button rounded text-black hover:text-white px-4 py-2 md:px-6 md:py-3 cursor-pointer">
              Chat us on Instagram
            </span>
          </Link>
        </div>
      </section>

      {/* CTO Section */}
      {/* <section className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
    <div className="flex flex-col justify-between">
      <div className="mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          One-to-One Guidance from a Superhost
        </h1>
        <p className="mt-3 text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          labore minima quod nesciunt nostrum deserunt. Cum nam eaque ullam!
        </p>
      </div>
      
      <div className="mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          One-to-One Guidance from a Superhost
        </h1>
        <p className="mt-3 text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          labore minima quod nesciunt nostrum deserunt. Cum nam eaque ullam!
        </p>
      </div>
      
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          One-to-One Guidance from a Superhost
        </h1>
        <p className="mt-3 text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          labore minima quod nesciunt nostrum deserunt. Cum nam eaque ullam!
        </p>
      </div>
    </div>

    <div>
      
    </div>
  </section> */}
    </div>
  );
}
