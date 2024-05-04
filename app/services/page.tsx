/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import bgImg from "/public/bg-desktop.webp";

const ServicesPage = () => {
  return (
    <main role="main" className="py-8 maxContainer pSm mb-8">
      <Image src={bgImg} alt="fido-office" className="rounded-md w-full" />

      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-10">
        At Fido, we offer a wide range of services tailored to the unique needs
        of African startups. Our goal is to provide comprehensive support that
        helps you grow and succeed.
      </p>
      <div className="h-8 w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/happy-business-woman-showing-hand_23-2148336832.jpg"
            alt="Service 1"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2 w-full text-center md:text-left">
            Hiring
          </h2>
          <p className="text-center md:text-left">
            We help you find and attract the right talent to drive your startup
            forward. Our hiring services are designed to meet the unique needs
            of African startups, ensuring you have the right team to grow and
            succeed.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-woman-holding-tablet_23-2148938361.jpg"
            alt="Service 2"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2 w-full text-center md:text-left">
            Outsourcing
          </h2>
          <p className="text-center md:text-left">
            We connect you with reliable service providers to handle non-core
            business functions. This allows you to focus on what you do best,
            while we take care of the rest.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/woman-having-online-meeting-work_23-2148940759.jpg"
            alt="Service 3"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2 w-full text-center md:text-left">
            Accounting
          </h2>
          <p className="text-center md:text-left">
            Our experts handle your financial reporting and compliance needs. We
            ensure your startup is always in good standing, giving you peace of
            mind.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/group-people-holding-laptop-template_23-2147993408.jpg"
            alt="Service 4"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2 w-full text-center md:text-left">
            Web Development
          </h2>
          <p className="text-center md:text-left">
            We build high-quality, scalable websites that reflect your brand and
            engage your audience. Our web development services are designed to
            meet the unique needs of African startups.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/african-american-woman-checking-social-media-phone_53876-105397.jpg"
            alt="Service 5"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2 w-full text-center md:text-left">
            Social Media Management
          </h2>
          <p className="text-center md:text-left">
            We help you build and maintain a strong online presence. Our social
            media management services engage with your audience and expand your
            reach.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
