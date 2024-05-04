import Image from "next/image";
import bgImg from "/public/bg-desktop.webp";

export default function AboutUsPage() {
  return (
    <main role="main" className="py-8 max-w-screen-md mx-auto pSm">
      <Image src={bgImg} alt="fido-office" className="rounded-md w-full" />
      <h1 className="text-4xl font-bold my-6">About Fido</h1>
      <p className="text-lg mb-6">
        Welcome to Fido, your trusted partner in growth. We are a company
        dedicated to helping African startups thrive in the global market. Our
        mission is to provide comprehensive support that goes beyond funding,
        extending to key areas such as hiring, outsourcing, accounting, web
        development, and social media management.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
      <p className="text-lg mb-6">
        Founded by a team of passionate individuals with a rich background in
        business and technology, Fido was born out of the need for a more
        holistic approach to startup support. We understood that while funding
        is crucial, it is just one piece of the puzzle. Startups also need the
        right talent, efficient operations, and a strong online presence to
        succeed.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-lg mb-6">
        At Fido, we offer a wide range of services tailored to the unique needs
        of African startups. These include:
      </p>
      <ul className="list-disc ml-8 mb-6">
        <li className="text-lg mb-2">
          Hiring: We help you find and attract the right talent to drive your
          startup forward.
        </li>
        <li className="text-lg mb-2">
          Outsourcing: We connect you with reliable service providers to handle
          non-core business functions, allowing you to focus on what you do
          best.
        </li>
        <li className="text-lg mb-2">
          Accounting: Our experts handle your financial reporting and compliance
          needs, ensuring your startup is always in good standing.
        </li>
        <li className="text-lg mb-2">
          Web Development: We build high-quality, scalable websites that reflect
          your brand and engage your audience.
        </li>
        <li className="text-lg mb-2">
          Social Media Management: We help you build and maintain a strong
          online presence, engaging with your audience and expanding your reach.
        </li>
      </ul>
      <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
      <p className="text-lg mb-6">
        At Fido, we are committed to the success of African startups. We believe
        in the potential of African entrepreneurship and are dedicated to
        helping startups overcome the challenges they face. We are more than
        just a service provider; we are your business associate, your partner in
        growth.
      </p>
      <h2 className="text-3xl font-bold mb-4">Join Us</h2>
      <p className="text-lg mb-6">
        If you are an African startup looking for comprehensive support to help
        you grow, we would love to hear from you. Together, we can build a
        brighter future for African entrepreneurship.
      </p>
    </main>
  );
}
