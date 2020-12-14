import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var genres = {
    Romance: [
      {
        name: "The Fault in our Stars",
        rating: "4.20/5",
        author: "by John Green",
        description:
          "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten."
      },
      {
        name: "Pride and Prejudice",
        rating: "4.26/5",
        author: "by Jane Austen",
        description:
          "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England."
      },
      {
        name: "The Notebook",
        rating: "4.11/5",
        author: "by Nicholas Sparks",
        description:
          "Like a puzzle within a puzzle, the story of Noah and Allie is just the beginning. As it unfolds, their tale miraculously becomes something different, with much higher stakes. The result is a deeply moving portrait of love itself, the tender moments and the fundamental changes that affect us all. It is a story of miracles and emotions that will stay with you forever. "
      },
      {
        name: "Beautiful Disaster",
        rating: "4.09/5",
        author: "by Jamie McGuire",
        description:
          "The new Abby Abernathy is a good girl. She doesnt drink or swear, and she has the appropriate number of cardigans in her wardrobe. Abby believes she has enough distance from the darkness of her past, but when she arrives at college with her best friend, her path to a new beginning is quickly challenged by Eastern University's Walking One-Night Stand."
      }
    ],
    Mystery: [
      {
        name: "And Then There Were None",
        rating: "4.26/5",
        author: "by Agatha Christie",
        description:
          "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder."
      },
      {
        name: "The Big Sleep",
        rating: "3.98/5",
        author: "by Raymond Chandler",
        description:
          "Down these mean streets a man must go who is not himself mean, who is neither tarnished nor afraid....He is the hero; he is everything. He must be a complete man and a common man and yet an unusual man."
      },
      {
        name: "The Silence of the Lambs",
        rating: "4.20/5",
        author: "by Thomas Harris",
        description:
          "Hannibal Lecter. The ultimate villain of modern fiction. Read the five-million-copy bestseller that scared the world silent. The Silence of the Lambs. A young FBI trainee. An evil genius locked away for unspeakable crimes. A plunge into the darkest chambers of a psychopath's mind--in the deadly search for a serial killer."
      }
    ],
    Horror: [
      {
        name: "Lost Roads",
        rating: "4.27/5",
        author: "by Jonathan Maberry",
        description:
          "Simon & Schuster has bought Jonathan Maberry's Rot & Ruin: Broken Lands, which will push reset on his YA series Rot & Ruin, about teenagers surviving the zombie apocalypse. In Broken Lands and its sequel, Lost Roads, Maberry introduces a new cast of characters and puts a new spin on the walking dead by exploring bizarre mutations, new human threats, and a nightmare landscape of nature gone wild and weird."
      },
      {
        name: "Gideon Falls",
        rating: "4.11/5",
        author: "by Jeff Lemire",
        description:
          "After the mind-bending destruction of the Black Barn, our heroes find themselves spread across the multiverse of Gideon Falls that it contained within! While Angie struggles to survive in a 1984 version, Clara is alone in an old west version and Father Fred is a man out of place in the cyberpunk Gideon Falls. And where Norton landed is anyone's guess... And while these worlds all seem far apart, the Laughing Man is always closer than you think! "
      }
    ],

    Thriller: [
      {
        name: "The Dirty South",
        rating: "4.36/5",
        author: "by John Connolly",
        description:
          "It is 1997, and someone is slaughtering young women in Burdon County, Arkansas. But no one in the Dirty South wants to admit it. In an Arkansas jail cell sits a former NYPD detective, stricken by grief. He is mourning the death of his wife and child, and searching in vain for their killer. Obsessed with avenging his lost family, his life is about to take a shocking turn. Witness the dawning of a conscience. Witness the birth of a hunter. Witness the becoming of Charlie Parker. "
      }
    ]
  };
  const [genreClicked, setGenreClicked] = useState("Romance");
  var genresWeKnow = Object.keys(genres);

  function genreClickHandler(genre) {
    setGenreClicked(genre);
  }
  return (
    <div style={{ backgroundColor: "black" }} className="App">
      <h1 style={{ color: "#ef82d7", marginTop: "1.5rem" }}>
        Novels from my Wishlist
      </h1>

      {genresWeKnow.map((genre) => {
        return (
          <button
            onClick={() => genreClickHandler(genre)}
            key={genre}
            style={{
              borderRadius: "1rem",
              margin: "1rem ",
              padding: "1rem",
              backgroundColor: "#60f799",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          >
            <span>{genre}</span>
          </button>
        );
      })}

      <ul>
        {genres[genreClicked].map((novel) => {
          return (
            <li
              key={novel.name}
              style={{
                textDecoration: "none",
                listStyle: "none",
                padding: "1rem",
                color: "white",
                border: ".2rem solid #ef82d7",
                margin: "1rem",
                fontWeight: "bolder",
                borderRadius: "1.2rem"
              }}
            >
              <div style={{ textAlign: "right", marginBottom: "0.5rem" }}>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {novel.rating}
              </div>
              <div style={{ fontSize: "larger", textAlign: "left" }}>
                <span role="img" aria-label="star">
                  🔖
                </span>
                {novel.name}
                <div
                  style={{
                    fontSize: "small",
                    fontWeight: "bold",
                    color: "#ef82d7",
                    marginLeft: "1rem"
                  }}
                >
                  <span> -</span>
                  {novel.author}
                </div>
              </div>

              <div
                style={{
                  wordWrap: "break-word",
                  marginTop: "1rem",
                  textAlign: "justify"
                }}
              >
                {novel.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
