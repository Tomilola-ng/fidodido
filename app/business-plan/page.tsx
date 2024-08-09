import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan - FIDO",
  description: "Get a Comprehensive Business Plan for your Startup",
  openGraph: {
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEhF4OQWGJua1ddk0WCVIjnstFWOHDUicMkDtVujmOgTpmrxrkqavkskXCRSNP3b1wBv-t0ZOxC-JSbtrC3kNcCQWYzQhNhP3zq0pBTEU5SsDPHIc0zMBEzNTbaB5AlYaeo_Sr01laTUKa3fYSKY_t6sxLU6D-jUMoqhfTZOY57hma4XSsaaKwTJfxQTEQ",
    ],
  },
};

export default function BusinessPlanPage() {
  return (
    <section className="maxContainer flexCenter flex-col gap-y-4 pSm my-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdd-s1ykMtzH2Bf3ywX-j6Q44hWp9UQyV7EvVAq-c3CkpEDCw/viewform?embedded=true"
        width="640"
        height="1024"
      >
        BUSINESS PLAN - FIDO
      </iframe>
    </section>
  );
}
