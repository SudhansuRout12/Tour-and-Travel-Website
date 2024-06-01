import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/2.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destnations using google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="The Indonesian archipelago has been a valuable region for trade since at least the seventh century when the Srivijaya and later Majapahit Kingdoms traded with entities from mainland China and the Indian subcontinent. Local rulers gradually absorbed foreign influences from the early centuries, and Hindu and Buddhist kingdoms flourished. Sunni traders and Sufi scholars later brought Islam, and European powers fought one another to monopolise trade in the Spice Islands of Maluku during the Age of Discovery. Following three and a half centuries of Dutch colonialism, Indonesia secured its independence after World War II. Indonesia's history has since been turbulent, with challenges posed by natural disasters, corruption, separatism, a democratisation process, and periods of rapid economic growth."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a country in Southeast Asia, on the Malay Peninsula, as well as on northern Borneo. The country is one of Asia's tiger economies, having seen great economic and human development during the last several decades. While the capital Kuala Lumpur is a cosmopolitan city, deep jungles cover vast swaths of the land, and the offshore islands are home to pristine beaches and some of the world's best scuba diving sites. Malaysia is also a foodie's paradise, with its diverse ethnic groups contributing to an incredibly rich culinary heritage."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="The White and Blue city keeps a historical center registered in the UNESCO, and is home to the Vieux-Tours, a patrimonial site. The garden city has a green heritage and an urban landscape strongly influenced by its natural space. The historic city that is nicknamed Le Petit Paris and its region by its history and culture has always been a land of birth or host to many personalities, international sporting events, and is a university city with more than 30,000 students in 2019. Tours is a popular culinary city with specialties such as: rillettes, rillons, Touraine vineyards, AOC Sainte-Maure-de-Touraine cheeses and nougats. The city is also the end-point of the annual Paris–Tours cycle race."
        />
      </div>
    </div>
  );
}
export default Trip;
