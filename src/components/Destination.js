import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/6.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Bora Bora"
        text="The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon. In fact, author James Michener, who wrote Tales of the South Pacific,called Bora Bora the most beautiful island in the world. The 18th-century British explorer James Cook even coined it as the Pearl of the Pacific. The very definition of a tropical getaway, blissful Bora Bora abounds with luxurious resorts, sunny skies, warm waters and friendly locals"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Historic Sanctuary of Machu Picchu"
        text="Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
