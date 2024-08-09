import Image from "next/image";

import myImg from "/public/flyer.webp";

export default function JoinOurTeamPage() {
  return (
    <section className="maxContainer flexCenter flex-col gap-y-4 pSm my-4">
      <Image
        src={myImg}
        alt="we are hiring flyer post"
        className="max-w-[600px] rounded-lg"
      />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdg6T7vQLVL2KToDyqv-D68Vh141dMzV8e8-gtYt3t8XLZ97g/viewform?embedded=true"
        width="640"
        height="1800"
      >
        FIDO
      </iframe>
    </section>
  );
}
