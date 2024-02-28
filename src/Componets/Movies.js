import React from "react";

const data = [
  {
    id: "101",
    name: "Avengers: Endgame",
    poster:
      "https://cellularnews.com/wp-content/uploads/2020/04/08-avengers-endgame-movie-poster-wallpaper-325x485.png",
    rating: 4.7,
    summary:
      "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    language: "english",
  },
  {
    id: "102",
    name: "Thor: Ragnarok",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    rating: 4.6,
    summary:
      "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
    trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
    language: "hindi",
  },
  {
    id: "103",
    name: "Iron Man",
    poster: "https://images2.vudu.com/poster2/141479-338",
    rating: 4.7,
    summary:
      "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
    trailer: "https://www.youtube.com/embed/8ugaeA-nMTc",
    language: "english",
  },
  {
    id: "104",
    name: "The Incredible Hulk",
    poster: "https://flxt.tmsimg.com/assets/p176337_p_v10_ag.jpg",
    rating: 4.1,
    summary:
      "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).",
    trailer: "https://www.youtube.com/embed/xbqNb2PFKKA",
    language: "english",
  },
  {
    id: "105",
    name: "Avatar",
    poster: "https://movieposters2.com/images/670910-b.jpg",
    rating: 4.5,
    summary:
      "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    language: "english",
  },
  {
    id: "106",
    name: "Spider-Man: Far from Home",
    poster: "https://i.redd.it/l8z673yg8em51.jpg",
    rating: 4.3,
    summary:
      "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
    trailer: "https://www.youtube.com/embed/VJfBMtAmvbw",
    language: "japanese",
  },
  {
    id: "107",
    name: "King Kong",
    poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
    rating: 4.5,
    summary:
      "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
    trailer: "https://www.youtube.com/embed/1TSidCNA7mQ",
    language: "english",
  },
  {
    id: "108",
    name: "Guardians of the Galaxy",
    poster:
      "https://popculturethoughts83.files.wordpress.com/2019/06/guardians-of-the-galaxy.jpg",
    rating: 4.7,
    summary:
      "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
    trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
    language: "english",
  },
];

export default function Movies() {
  
  const Movie = data.map((item) => {
    return (
      <div className="card" key={item.id}>
        <img src={item.poster} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <div className="content">
            <h5 className="card-title">{item.name}</h5>
            <h5>⭐️{item.rating}</h5>
          </div>
          <p className="card-text">{item.summary}</p>
        </div>
        <a href={item.trailer} className="btn btn-primary">
          Watch Trailer
        </a>
      </div>
    );
  });

  return <div className="allCard">{Movie}</div>
}
