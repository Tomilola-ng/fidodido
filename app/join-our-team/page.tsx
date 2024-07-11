import Image from "next/image";

import myImg from "/public/flyer.webp";

export default function JoinOurTeamPage() {
  return (
    <section className="maxContainer flexCenter">
      <Image src={myImg} alt="we are hiring flyer post" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdg6T7vQLVL2KToDyqv-D68Vh141dMzV8e8-gtYt3t8XLZ97g/viewform?embedded=true"
        width="640"
        height="1624"
      >
        FIDO
      </iframe>
    </section>
  );
}
