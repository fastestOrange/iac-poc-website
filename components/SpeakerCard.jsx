import Image from "next/image";

const SpeakerCard = ({ person }) => {
  console.log("person", person);
  const { firstName, lastName, professionalTitle, bio } = person;

  return (
    <div className="card">
      <div class="card-image">
        <figure class="image is-2x1">
          <Image src="/" layout="fill" objectFit="contain" />
        </figure>
      </div>
      <p class="card is-centered">
        {firstName} {lastName}
      </p>

      <div>{professionalTitle}</div>
    </div>
  );
};

export default SpeakerCard;
