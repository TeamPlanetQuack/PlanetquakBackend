const { client } = require("./client");

const planetData = [
  {
    name: "Mercury",
    name_origin: "Mercury is named after the Roman God of swift travel, as it is the fastest moving planet in the night sky.",
    radius: 2440.00,
    orbit: "88 Earth Days",
    rotation: "59 Hours",
    sun_distance: "58 million km",
    type: "rocky",
    moon_num: 0,
    facts: ["Mercury has almost no atmosphere. It gets blown away by solar wind. Instead, it has a very thin exosphere.", "Mercury is covered in craters, like our moon. This is because it doesn't have an atmosphere to break up meteors and protect the surface from the barrage of impacts.", "Mercury orbits the fastest of all the planets around the sun at 47 km/second. "]

  },
  {
    name: "Venus",
      name_origin: "Venus is named after the Roman Goddess of love and beauty due to it being the brightest object in the sky aside from the Sun and the Moon.",
      radius: 6050.00,
      orbit: "225 Earth Days",
      rotation: "243 Earth Days",
      sun_distance: "108 million km",
      type: "rocky",
      moon_num: 0,
      facts: ["Venus has an atmosphere thick with greenhouse gases, such as carbon dioxide. Venus is the hottest planet. Even though Mercury is closer to the sun, Venus has an atmosphere that holds on to the heat from the sun making it the most hot.", "Venus's surface is covered in active volcanoes.", "Venus is the only planet that rotates counterclockwise around its own axis. This means that sunset and sunrise would be opposite of what we see on Earth. The sun would rise in the west and set in the east. It also rotates very slowly making a day on Venus longer than a year on Venus."]
  },
  {
    name: "Earth",
    name_origin: "Earth is a Germanic word meaning “the ground”. It is the only planet that is not named after a Greek or Roman God.",
    radius: 6371,
    orbit: "365 Earth Days",
    rotation: "24 Hours",
    sun_distance: "150 million km",
    type: "rocky",
    moon_num: 1,
    facts: ["Earth resides within the “habitable zone” of the Sun. This is the perfect distance from the Sun in which the temperatures are just right for liquid water to exist on the surface.", "Earth is the only planet in our solar system with liquid water on the surface. This is what makes it the most unique and capable of sustaining life.", "Earth is tilted on its axis at 23.4 degrees. This tilt results in different parts of Earth getting more direct sunlight at different times of the year. The effect that this has is the seasons: Summer, Autumn, Winter, Spring."]
  },
  {
    name: "Mars",
    name_origin: "Mars is named after the Roman God of war.",
    radius: 3390.00,
    orbit: "687 Earth Days",
    rotation: "24.6 Hours",
    sun_distance: "228 million km",
    type: "rocky",
    moon_num: 2,
    facts: ["Mars is colloquially known as the Red Planet due to its red appearance. It gets its red color from the oxidation of iron in its soil. ", "Mars has the largest volcano in our solar system called Olympus Mons. ", "Mars used to have liquid water. This is evidenced by the existence of ancient river valleys and floodplains, deltas, lakebeds, and sedimentary rock and mineral deposits. Today, all of Mars's water is frozen at its polar ice caps. "]
  },
  {
    name: "Jupiter",
    name_origin: "Jupiter is named after the Roman King of the Gods and God of the sky and thunder. This is appropriate as it is the largest planet. ",
    radius: 71495,
    orbit: "4333 Earth Days",
    rotation: "9.93 Hours",
    sun_distance: "740 million km",
    type: "gas",
    moon_num: 80,
    facts: ["Jupiter is the fastest rotating planet; the surface is moving at about 30 times the speed of Earth's surface. Due to its fast rotation, it has the shortest day of all the planets.", "Jupiter's surface is marked by the Great Red Spot, a giant storm that has been blowing for over 300 years. The bands of different colors around Jupiter are clouds separated by jet streams, often spawning large cyclonic and anticyclonic storms that can last long periods of time.", "Jupiter has rings, like the other Jovian planets, held in by its massive gravitational pull. Jupiter's rings are very faint and hard to observe."]
  },
  {
    name: "Saturn",
    name_origin: "Saturn is named after the Roman God of agriculture and wealth.",
    radius: 58232,
    orbit: "10,585 Earth Days",
    rotation: "10.7 Hours",
    sun_distance: "1,468 million km",
    type: "gas",
    moon_num: 83,
    facts: ["Saturn is most well known for its rings. All of the Jovian (Gas Giant) planets have rings, but Saturn's are the most stunning. The rings are made up of chunks of rock and ice of various sizes, thought to have come from pieces of comets, asteroids, or broken up moons, all held in by Saturn's gravitational pull. ", "Saturn has the lowest density of all of the planets in our solar system. Its average density is lower than the density of water, so it would float if there were an ocean big enough to contain it.", "Two of Saturn's moons, Enceladus and Titan, are being studied for their potential to sustain life. Enceladus is a frozen ocean moon, but there is liquid beneath the frozen surface. Samples of this liquid water have found many of the chemical ingredients needed for life. Titan is the only place in the solar system (besides Earth) that has liquid water in the form of rivers, lakes, and seas on its surface."]
  },
  {
    name: "Uranus",
    name_origin: "Uranus is named after the Greek God of the sky. ",
    radius: 25362,
    orbit: "30,660 Earth Days",
    rotation: "17 Hours and 14 Minutes",
    sun_distance: "3,050 million km",
    type: "gas",
    moon_num: 27,
    facts: ["Uranus spins around its axis at a 90-degree angle from its orbital plane. This makes it appear to spin on its side. It is thought that an impact with another planet or moon may have knocked it into this unique rotation.", "Uranus gets its blue color from methane gas in the atmosphere.", "Because of Uranus's unique spin, day and night are not necessarily light and dark. Seasons more closely mimic the light vs dark of day and night. The side of Uranus not facing the sun is experiencing winter in darkness for 21 Earth years. On the side facing the sun, it is summer and it is light during both the 'day' and the 'night'. During the spring and fall equinoxes, the planet is experiencing normal day-night cycles."]
  },
  {
    name: "Neptune",
    name_origin: "Neptune is named after the Roman God of the sea.",
    radius: 24622,
    orbit: "60,225 Earth Days",
    rotation: "16 Hours",
    sun_distance: "4,474 million km",
    type: "gas",
    moon_num: 27,
    facts: ["Neptune was actually predicted mathematically before it was seen and discovered. ", "Neptune is the windiest planet in our solar system. The wind on Neptune is 3 times stronger than the wind on Jupiter which rotates fastest in our solar system and sustains century long storms, and 9 times stronger than the wind on Earth. We don't really know why Neptune's winds are so strong.", "The dwarf planet Pluto (previously considered a planet before it was reclassified) is sometimes closer to Earth than Neptune is. In the past, our 8th planet Neptune was technically sometimes our 9th planet."]
  }
]

const moonData = [
{
  planet_id:3,
  moon_name:"Moon",
  discovered:"Earth's only natural satellite is simply called the Moon because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610.",
  history: "In Latin, the Moon is called Luna, which is the main adjective for all things Moon-related: lunar.",
  moon_radius:1737.5
},
{
  planet_id:4,
      moon_name:"Phobos",
      discovered:"Phobos was discovered on Aug. 17, 1877 by Asaph Hall.",
      history: "Ares is the Greek counterpart of the Roman god, Mars. Phobos is one of Ares sons and means fear.",
      moon_radius:11.1
},
{
  planet_id:4,
  moon_name:"Deimos",
  discovered:"Deimos was discovered on Aug. 11, 1877 by Asaph Hall.",
  history: "Ares is the Greek counterpart of the Roman god, Mars. Deimos is one of Ares sons and means dread.",
  moon_radius:6.2
},
{
  planet_id:5,
  moon_name:"Adrastea",
  discovered:"Adrastea was discovered in July 1979 by the Voyager science team.",
  history: "Adrastea is named after the Cretian nymph who took care of Zeus for his mother Rhea. Rhea entrusted her child to Adrastea to save him from her husband Cronus who would eat his children in order to maintain his rule.​",
  moon_radius:8.2
},
{
  planet_id:5,
      moon_name:"Aitne",
      discovered:"Aitne was discovered on 9 December 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
      history: "Originally called S/2001 J11, Aitne was named for a Sicilian nymph said to have been raped by the Roman god Jupiter, while he was in the form of a vulture. The name derives from the Greek for 'I burn', and is associated with Sicily's volcano, Mount Etna.​",
      moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Amalthea",
  discovered:"Amalthea was discovered Sept. 9, 1892 by Edward Emerson Barnard.",
  history: "Originally designated Jupiter V, Camille Flammarion suggested the name Amalthea for this moon. Amalthea is named for a naiad who nursed the newborn Jupiter. Amalthea is often depicted with a goat, whose milk is said to have fed the infant Jupiter.​",
  moon_radius:83.45
},
{
  planet_id:5,
  moon_name:"Anake",
  discovered:"Ananke was discovered on Sept. 28, 1951 by Seth Barnes Nicholson on a photograph made with the 100-inch (2.5 m) Hooker telescope at the Mount Wilson Observatory in California.",
  history: "Ananke was named for the mother of Adrastea by Zeus, the Greek equivalent of the Roman god Jupiter. In other accounts, Adrastea is described as a nymph of Crete who was one of the nursemaids of the infant Zeus. Ananke is the personification of fate or necessity in ancient Greek literature, who rewards or punishes people for their deeds.​​",
  moon_radius:14
},
{
  planet_id:5,
  moon_name:"Aoede",
  discovered:"Aoede was discovered Feb. 8, 2003 by Scott S. Sheppard, David C. Jewitt, Jan T. Kleyna, Yanga R. Fernandez, and Henry H. Hsieh at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J7, Aoede was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Aoede means song.",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Arche",
  discovered:"Arche was discovered Oct. 31, 2002, by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2002 J1, Arche was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means 'beginning.'",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Autonoe",
  discovered:"Autonoe was discovered Dec. 10, 2001 by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J1, Autonoe was named for the mother of the Graces by Jupiter, according to some authors.",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Callirrhoe",
  discovered:"Callirrhoe was discovered Oct. 19, 1999 via the 36-inch telescope on Kitt Peak, in the course of observations by the Spacewatch program of the University of Arizona. It was initially thought to be an asteroid, but calculations of its orbit by the Minor Planet Center at the Smithsonian Astrophysical Observatory revealed it to be a satellite of Jupiter.",
  history: "This object was originally called asteroid 1999 UX18 and then renamed S/1999 J1 upon discovery that it is a satellite of Jupiter. Ultimately, it was named 'Callirrhoe' after the daughter of the river god, Achelous, who persuaded Zeus (the Greek equivalent of the Roman god Jupiter) to instantly change her young sons into grown men so they could avenge the murder of their father.",
  moon_radius:4.3
},
{
  planet_id:5,
  moon_name:"Callisto",
  discovered:"Callisto was discovered Jan. 7, 1610, by Italian scientist Galileo Galilei along with Jupiter’s three other largest moons: Ganymede, Europa and Io.",
  history: "Callisto is named for a woman turned into a bear by Zeus in Greek mythology. Zeus is identical to the Roman god Jupiter.",
  moon_radius:2410.3
},
{
  planet_id:5,
  moon_name:"Carme",
  discovered:"Carme was discovered on July 30, 1938 by Seth Barnes Nicholson with the 100-inch (2.5 m) Hooker telescope at the Mount Wilson Observatory in California.",
  history: "Carme is named for the mother of Britomartis by the Roman god Jupiter (or Zeus in the Greek version of the myth), who became a goddess of Crete.",
  moon_radius:23
},
{
  planet_id:5,
  moon_name:"Carpo",
  discovered:"Carpo was discovered on Feb. 26, 2003 by Scott S. Sheppard and others from the University of Hawaii's Institute for Astronomy using the 12-ft. (3.6-m) Canada-France-Hawaii telescope at the Mauna Kea Observatory in Hawaii.",
  history: "Originally designated S/2003 J20, Carpo was named for one of the three Athenian goddesses of the flowers of spring and the fruits of summer and autumn. An annual festival in their honor was called the Horaea. According to Hesoid, a group of goddesses collectively called the Horae (with different names, which did not include Carpo) were daughters of Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Chaldene",
  discovered:"Chaldene was discovered Nov. 23, 2000 by Scott S. Sheppard, David C. Jewitt, Yange R. Fernandez, and Eugene Magnier at an observatory on Mauna Kea in Hawaii.",
  history: "Originally called S/2000 J10, Chaldene was named for the mother of Solymos by Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1.9
},
{
  planet_id:5,
  moon_name:"Cyllene",
  discovered:"Cyllene was discovered Feb. 9, 2003 by Scott S. Sheppard and his team from the University of Hawaii at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J13, Cyllene was named for a nymph in Greek mythology who was a daughter of Zeus, the Greek equivalent of the Roman god Jupiter. She is associated with a mountain in Arcadia on which, legend has it, the blackbirds become white and are impossible to shoot during the daytime.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Dia",
  discovered:"Dia was discovered in 2000 by S.S. Sheppard, D.C. Jewitt, Y. Fernandez, and G. Magnier using the University of Hawaii's 2.2 m (88 inch) telescope atop Mauna Kea. The moon was then lost in Jupiter's bright glare for several years. Dia was rediscovered in images obtained by the Magellan Telescope in 2010 and 2011.",
  history: "Dia is a Greek name meaning 'she who belongs to Zeus'(who became Jupiter in Roman mythology). Dia was the divine daughter of the seashore. The tiny moon was originally called S/2000 J11 because it is a satellite that was discovered in 2000, and was the 11th satellite of Jupiter to be found that year.​​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Eirene",
  discovered:"Eirene was discovered in February 2003 by Scott Sander Sheppard at the Mauna Kea Observatory in Hawaii, and originally designated S/2003 J5.",
  history: "In mythology, Eirene is the goddess of peace and the daughter of Zeus and Themis.​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Elara",
  discovered:"Elara was discovered on Jan. 5, 1905 by Charles Dillon Perrine in photographs taken with the Crossley 36-inch (0.9 meter) reflector of the Lick Observatory on Mount Hamilton at the University of California, San Jose..",
  history: "Elara is named for one of the lovers of Zeus, the Greek equivalent of the Roman god Jupiter. In Greek mythology, Zeus hid her from his wife, Hera, by placing Elara deep beneath the Earth, where she gave birth to their son, a giant called Tityas​",
  moon_radius:43
},
{
  planet_id:5,
  moon_name:"Erinome",
  discovered:"Erinome was discovered on Nov. 23, 2000, by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J4, Erinome was named for a chaste young woman in Roman mythology whom Venus causes to fall in love with Jupiter. She loses her virginity to Adonis, however, after Venus throws a fog on her. This displeases the goddess Diana, who turns Erinome into a peacock. Adonis, realizing he has assaulted a love of Jupiter, flees into the woods, but is driven out by Mercury. Just as Adonis is about to defeat Mercury in a violent fight, Jupiter throws a lightning bolt and kills him.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Ersa",
  discovered:"This tiny moon of Jupiter was first spotted in 2017 and originally designated S/2018 J1. The discovery announcement was made in July 2018.",
  history: "In mythology, Ersa is the sister of Pandia and, as such, also the daughter of Zeus and the Moon goddess Selene. Ersa is the goddess of dew.​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Euanthe",
  discovered:"Euanthe was discovered on Dec. 11, 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J7, Euanthe was given one of the names in Greek mythology for the mother of the Graces by Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Eukelade",
  discovered:"Eukelade was discovered on Feb. 6, 2003, by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J1, Eukelade was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means 'well sounding.'​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Eupheme",
  discovered:"Eupheme was discovered Mar. 4, 2003 by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii, and originally designated S/2003 J3.",
  history: "In mythology, Eupheme is the spirit of praise and good omen, the granddaughter of Zeus, and the sister of Philophrosyne.​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Euporie",
  discovered:"Euporie was discovered on Dec. 11, 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J10, Euporie was named for one of the Horae (seasons), who were daughters of the Roman god Jupiter, and a Titaness named Themis. Euporie means plenty.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Europa",
  discovered:"Italian astronomer Galileo Galilei's discovery of Europa in January, 1610, transformed the way we look at the cosmos. Galileo found Europa and Jupiter's three other large moons- Ganymede, Callisto and Io- with his homemade telescope. The discovery showed conclusively that Earth was not the center of all motion in the universe, which profoundly affected humanity's view of our place in the cosmos.",
  history: "Europa is named for a woman who, in Greek mythology, was abducted by the god Zeus – Jupiter in Roman mythology.​",
  moon_radius:1560.8
},
{
  planet_id:5,
  moon_name:"Eurydome",
  discovered:"Eurydome was discovered on Dec. 9, 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J4, Eurydome was named for a character in Greek mythology who, according to some sources, was the mother of the Graces by Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Ganymede",
  discovered:"Ganymede was discovered by Italian astronomer Galileo Galilei on Jan. 7, 1610. The discovery, along with his discovery of three other large moons around Jupiter, was the first time a moon was discovered orbiting a planet other than Earth.",
  history: "In mythology, Ganymede ('GAN uh meed') was a beautiful young boy who was carried to Olympus by Zeus (the Greek equivalent of the Roman god Jupiter) disguised as an eagle. Ganymede became the cupbearer of the Olympian gods.​",
  moon_radius:2631.2
},
{
  planet_id:5,
  moon_name:"Harpalyke",
  discovered:"Harpalyke was discovered Nov. 23, 2000 by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J5, Harpalyke was named for a woman in Greek mythology who was transformed into a night bird called Chalcis. According to one version of the story, this transformation happened after she had intercourse with Zeus, the Greek equivalent of the Roman god Jupiter. In another version, she had incestuous relations with her father. In revenge, she killed her younger brother or her son (depending on the account), carved him up, cooked the meat and served it to her father, who ultimately kills himself.​",
  moon_radius:2.2
},
{
  planet_id:5,
  moon_name:"Hegemone",
  discovered:"Hegemone was discovered on Feb. 8, 2003 by Scott S. Sheppard, David C. Jewitt, Jan T. Kleyna, Yanga R. Fernandez, and Henry H. Hsieh at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J8, Hegemone was named for one of the Graces (according to the Athenians), who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. The name means 'female leader.'​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Helike",
  discovered:"Helike was discovered on Feb. 6, 2003 by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J6, Helike was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Helike is also the name of a nymph in Greek mythology who helped to nurse Zeus and was transferred to the stars as a reward. There, she became the constellation, the Great Bear.​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Hermippe",
  discovered:"Hermippe was discovered in Dec. 9, 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J3, Hermippe was named for one of the many lovers of Zeus, the Greek equivalent of the Roman god Jupiter. She bore him a son named Orchomenos.​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Herse",
  discovered:"Herse was discovered on Feb. 27, 2003 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, and Lynne Allen.",
  history: "Originally called S/2003 J17, Herse was named for a daughter of Selene (goddess of the moon) and Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Himalia",
  discovered:"Himalia was discovered on 3 December 1904 by Charles Dillon Perrine in photographs taken with the Crossley 36-inch (0.9 meter) reflector of the Lick Observatory on Mount Hamilton at the University of California, San Jose.",
  history: "Himalia was named for a nymph of the island of Rhodes in Greek mythology who was one of the lovers of Zeus (the Greek equivalent of the Roman god Jupiter). She bore him three sons: Spartaeus, Cronios and Cytus. ​",
  moon_radius:85
},
{
  planet_id:5,
  moon_name:"Io",
  discovered:"Io was discovered on Jan. 8, 1610 by Galileo Galilei. The discovery, along with three other Jovian moons, was the first time a moon was discovered orbiting a planet other than Earth.",
  history: "In mythology, Io is a mortal woman transformed into a cow during a marital dispute between the Greek god Zeus—Jupiter in Roman mythology—and his wife, Juno.​",
  moon_radius:1821.6
},
{
  planet_id:5,
  moon_name:"Iocaste",
  discovered:"Iocaste was discovered Nov. 23, 2000 by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J3, Iocaste was named for the mother of Agamedes by the Roman god, Jupiter.​",
  moon_radius:2.6
},
{
  planet_id:5,
  moon_name:"Isonoe",
  discovered:"Isonoe was discovered Nov. 23, 2000, by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J6, Isonoe was named for the mother of Orchomenus by Zeus, the Greek equivalent of the Roman god Jupiter. Isonoe was one of the 50 daughters of Danaus in Greek legend. ​",
  moon_radius:1.9
},
{
  planet_id:5,
  moon_name:"S/2010 J2 Jupiter LII",
  discovered:"This unnamed moon was discovered Sept. 8, 2010, at the Mauna Kea Observatories by Christian Veillet.",
  history: "Since its discovery is now confirmed, it is temporarily being called Jupiter LII, which means it is the 52nd confirmed moon discovered at Jupiter. It was originally called S/2010 J2 was so designated because it is a satellite (S) that was discovered in 2010, and was the 1st satellite of Jupiter (J) to be found that year​",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"S/2010 J1 Jupiter LI",
  discovered:"This unnamed moon was discovered Sept. 7, 2010, with the 200-inch (5.1-meter) Hale Telescope at Palomar Observatory by Robert Jacobson.",
  history: "Since its discovery is now confirmed, it is temporarily being called Jupiter LI, which means it is the 51st confirmed moon discovered at Jupiter. It was originally called S/2010 J1 was so designated because it is a satellite (S) that was discovered in 2010, and was the 1st satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Kale",
  discovered:"Kale was discovered Dec. 9, 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J8, Kale was named for one of the Graces, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Kallichore",
  discovered:"Kallichore was discovered on Feb. 6, 2003 by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J11, Kallichore was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means 'beautiful in dance.'​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Kalyke",
  discovered:"Kalyke was discovered on Nov. 23, 2000 by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J2, Kalyke was named for the mother of Endymion by Zeus (the Greek equivalent of the Roman god Jupiter) according to some accounts in Greek mythology.​",
  moon_radius:2.6
},
{
  planet_id:5,
  moon_name:"Kore",
  discovered:"Kore was discovered on Feb. 8, 2003 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J14, Kore was named for a character in Greek mythology who was the daughter of Zeus (the Greek equivalent of the Roman god Jupiter) and Demeter, the goddess of agriculture.​",
  moon_radius:1.0
},
{
  planet_id:5,
  moon_name:"Leda",
  discovered:"Leda was discovered on Sept. 14, 1974 by Charles Thomas Kowal on plates taken from Sept. 11 through 13, 1974 with the 122-cm Schmidt telescope at Mount Palomar.",
  history: "Leda was named for a woman in Greek mythology. According to one legend, she was seduced by Zeus (the Greek equivalent of the Roman god, Jupiter), who had taken the form of a swan. This pairing was depicted by a number of artists, including Leonardo da Vinci and Michelangelo. ​",
  moon_radius:10
},
{
  planet_id:5,
  moon_name:"Lysithea",
  discovered:"Lysithea was discovered on July 6, 1938 by Seth Barnes Nicholson with the 100-inch (2.5 m) Hooker telescope at the Mount Wilson Observatory.",
  history: "Lysithea was named for one of the lovers of the Roman god Jupiter, or the Greek equivalent, Zeus.​",
  moon_radius:18
},
{
  planet_id:5,
  moon_name:"Megaclite",
  discovered:"Megaclite was discovered on Nov. 25, 2000 by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene A. Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J8, Megaclite was named for one of the adulterous conquests of the Roman god Jupiter.​",
  moon_radius:2.7
},
{
  planet_id:5,
  moon_name:"Metis",
  discovered:"Metis was discovered in March 1979 by the Voyager science team.",
  history: "Originally designated S/1979 J 1, Metis is named for the first wife of Zeus who was swallowed by Zeus while pregnant with their first child.​",
  moon_radius:21.5
},
{
  planet_id:5,
  moon_name:"Mneme",
  discovered:"Mneme was discovered on Feb. 9, 2003 by Scott S. Sheppard and Brett Joseph Gladman at the Mauna Kea Observatory in Hawaii.",
  history: "Originally designated S/1979 J 1, Metis is named for the first wife of Zeus who was swallowed by Zeus while pregnant with their first child.​",
  moon_radius:21.5
},
{
  planet_id:5,
  moon_name:"Orthosie",
  discovered:"11 December 2001",
  history: "Originally called S/2001 J9, Orthosie was named for one of the Horae, who were daughters of Jupiter and Themis, a Titaness, in Roman mythology. Orthosie means luck.​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Pandia",
  discovered:"This tiny moon of Jupiter was first spotted in 2017 and originally designated S/2017 J4. The discovery announcement was made in July 2018.",
  history: "Pandia is the daughter of Zeus and the Moon goddess Selene. Pandia is the goddess of the full moon and the sister of Ersa.​",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Pasiphae",
  discovered:"Pasiphae was discovered on Jan. 27, 1908, by Philibert Jacques Melotte with the Greenwich Observatory's 30-inch Cassegrain telescope.",
  history: "Pasiphae was named for the wife of Minos, who was king of Crete.​",
  moon_radius:30
},
{
  planet_id:5,
  moon_name:"Pasithee",
  discovered:"Pasithee was discovered on Dec. 11, 2001, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J6, Pasithee was named for one of the Graces, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. ​",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Philophrosyne",
  discovered:"Philophrosyne was discovered in April 2003 by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii, and originally designated S/2003 J15.",
  history: "In mythology, Philophrosyne is the spirit of welcome and kindness and is the granddaughter of Zeus and sister of Eupheme.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Praxidike",
  discovered:"Praxidike was discovered on Nov. 23, 2000, by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J7, Praxidike was named for the Greek goddess of justice or punishment. She was the mother of Klesios, Harmonia and Arete by Zeus, the Greek equivalent of the Roman god Jupiter.",
  moon_radius:3.4
},
{
  planet_id:5,
  moon_name:"S/2003 J10",
  discovered:"S/2003 J10 was discovered in February 2003 by Scott Sander Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J10 was so designated because it is a satellite (S) that was discovered in 2003, and was the 10th satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J12",
  discovered:"S/2003 J12 was discovered between Feb. 6 and Mar. 7, 2003 by Scott S. Sheppard and others from the University of Hawaii's Institute for Astronomy at the Mauna Kea Observatory in Hawaii.",
  history: "The name 'S/2003 J12' means that it is a satellite (S) that was discovered in 2003 orbiting Jupiter (J), and that it was the 12th satellite of Jupiter discovered that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J16",
  discovered:"S/2003 J16 was discovered in April 2003 by Brett J. Gladman at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J16 was so designated because it is a satellite (S) that was discovered in 2003, and was the 16th satellite of Jupiter (J) to be found that year. ",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J18",
  discovered:"S/2003 J18 was discovered in April 2003 by Brett Joseph Gladman at the Mauna Kea Observatory, Hawaii.",
  history: "S/2003 J18 was so designated because it is a satellite (S) that was discovered in 2003, and was the 18th satellite of Jupiter (J) to be found that year.",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"S/2003 J19",
  discovered:"S/2003 J19 was discovered in February 2003 by Brett J. Gladman at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J19 was so designated because it is a satellite (S) that was discovered in 2003, and was the 19th satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J2",
  discovered:"S/2003 J2 was discovered in February or March 2003 at the Mauna Kea Observatory in Hawaii by Scott S. Sheppard, David C. Jewitt, Jan T. Kleyna, Yanga R. Fernandez, and Henry H. Hsieh.",
  history: "S/2003 J2 was so designated because it is a satellite (S) that was discovered in 2003, and was the 2nd satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J23",
  discovered:"S/2003 J23 was discovered in 2003 by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J23 was so designated because it is a satellite (S) that was discovered in 2003, and was the 23rd satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J24",
  discovered:"This unnamed moon was discovered in 2003 by S.S. Sheppard, D.C. Jewitt, J. Kleyna, B.J. Gladman, C. Veillet.",
  history: "S/2003 J24 was so designated because it is a satellite (S) that was discovered in 2003, and was the 24th satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J4",
  discovered:"S/2003 J4 was discovered in 2003 by Scott S. Sheppard, David C. Jewitt, Jan T. Kleyna, Yanga R. Fernandez, and Henry H. Hsieh at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J4 was so designated because it is a satellite (S) that was discovered in 2003, and was the 4th satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2003 J9",
  discovered:"S/2003 J9 was discovered in February 2003 by Scott Sander Sheppard Sheppard at the Mauna Kea Observatory in Hawaii.",
  history: "S/2003 J9 was so designated because it is a satellite (S) that was discovered in 2003, and was the 9th satellite of Jupiter (J) to be found that year.",
  moon_radius:0.5
},
{
  planet_id:5,
  moon_name:"S/2011 J1",
  discovered:"S/2011 J 1 S/2011 J 1 was discovered in 2011 by Scott S. Sheppard with digital images obtained with the Magellan-Baade 6.5 meter telescope at Las Campanas Observatory.",
  history: "S/2011 J1 was so designated because it is a satellite (S) that was discovered in 2011, and was the first satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2011 J2",
  discovered:"S/2011 J 2 was discovered in 2011 by Scott S. Sheppard with digital images obtained with the Magellan-Baade 6.5 meter telescope at Las Campanas Observatory.",
  history: "S/2011 J2 was so designated because it is a satellite (S) that was discovered in 2011, and was the second satellite of Jupiter (J) to be found that year. ",
  moon_radius:0.5
},
{
  planet_id:5,
  moon_name:"S/2016 J1",
  discovered:"This tiny, unnamed moon of Jupiter was first spotted in 2016 by Scott S. Sheppard with the Carnegie Institution for Science.",
  history: "S/2016 J1 was so designated because it is a satellite (S) that was discovered in 2016, and was the first satellite of Jupiter (J) to be found that year.",
  moon_radius:0.5
},
{
  planet_id:5,
  moon_name:"S/2017 J1",
  discovered:"This tiny moon of Jupiter was first spotted in 2016. The discovery announcement was made in June 2017.",
  history: "S/2017 J1 was so designated because it is a satellite (S) that was discovered in 2017, and was the first satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J2",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J2 was so designated because it is a satellite (S) that was discovered in 2017, and was the second satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J3",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J3 was so designated because it is a satellite (S) that was discovered in 2017, and was the third satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J5",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J5 was so designated because it is a satellite (S) that was discovered in 2017, and was the fifth satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J6",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J6 was so designated because it is a satellite (S) that was discovered in 2017, and was the sixth satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J7",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J7 was so designated because it is a satellite (S) that was discovered in 2017, and was the seventh satellite of Jupiter (J) to be found that year.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"S/2017 J8",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J8 was so designated because it is a satellite (S) that was discovered in 2017, and was the eigth satellite of Jupiter (J) to be found that year.",
  moon_radius:0.5
},
{
  planet_id:5,
  moon_name:"S/2017 J9",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018.",
  history: "S/2017 J9 was so designated because it is a satellite (S) that was discovered in 2017, and was the ninth satellite of Jupiter (J) to be found that year.",
  moon_radius:1.5
},
{
  planet_id:5,
  moon_name:"Sinope",
  discovered:"Sinope was discovered on July 21, 1914, by Seth Barnes Nicholson on photographic plates taken with the Lick Observatory's 36-inch (0.9 meter) telescope.",
  history: "Sinope was named for a nymph who outsmarted a smitten Zeus (the Greek equivalent of the Roman god Jupiter). Hoping to win her favor, he offered her anything she wanted and she replied that what she wanted was to remain a virgin. Sinope outsmarted Apollo in the same way.",
  moon_radius:19
},
{
  planet_id:5,
  moon_name:"Sponde",
  discovered:"Sponde was discovered Dec. 9, 2001, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J5, Sponde was named for one of the Horae, who were daughters of Themis and Zeus, the Greek equivalent of the Roman god, Jupiter.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Taygete",
  discovered:"Taygete was discovered Nov. 25, 2000, by Scott S. Sheppard, David C. Jewitt, Yanga R. Fernandez, and Eugene Magnier at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2000 J9, Taygete was named for one of the Pleiades, who were the seven daughters of Atlas.",
  moon_radius:2.5
},
{
  planet_id:5,
  moon_name:"Thebe",
  discovered:"Thebe was discovered in 1980 by the Voyager science team from images taken by Voyager 1.",
  history: "The satellite originally called S/1979 J2 was ultimately named 'Thebe,' a name associated with Jupiter — or his Greek equivalent, Zeus — in a variety of ways in different myths. In one, Thebe was a nymph who was a love of Zeus. In another, she was an Egyptian king's daughter and a love of Jupiter.",
  moon_radius:49
},
{
  planet_id:5,
  moon_name:"Thelxinoe",
  discovered:"Thelxinoe was discovered on Feb. 9, 2003, by Scott S. Sheppard and Brett J. Gladman at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2003 J22, Thelxinoe was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Thelxinoe means charm.",
  moon_radius:1
},
{
  planet_id:5,
  moon_name:"Themisto",
  discovered:"Themisto was initially discovered on Sept. 30, 1975, by Charles Thomas Kowal and Elizabeth Roemer. It was subsequently lost until 2000, when it was rediscovered by Scott S. Sheppard, David C. Jewitt, Yanga Roland Fernandez and Eugene A. Magnier as part of a systematic search for small irregular Jovian moons. ",
  history: "Themisto was originally called S/1975 J1 and then S/2000 J1 when it was rediscovered. Its current name comes from the Greek mythological character who was the mother of Ister by Zeus, the Greek equivalent of the Roman god Jupiter.",
  moon_radius:4
},
{
  planet_id:5,
  moon_name:"Thyone",
  discovered:"Thyone was discovered on Dec. 11, 2001, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2001 J2, Thyone was named for the mother (originally named Semele) of Dionysos by Zeus, the Greek equivalent of the Roman god Jupiter. ",
  moon_radius:2
},
{
  planet_id:5,
  moon_name:"Valetudo",
  discovered:"This tiny moon of Jupiter was first spotted in 2017. The discovery announcement was made in July 2018. ",
  history: "The name Valetudo has been proposed, after the Roman god Jupiter’s great-granddaughter, the goddess of health and hygiene.",
  moon_radius:0.5
},
//Saturns moons start here
  {
  planet_id:6,
  moon_name:"Aegaeon",
  discovered:"Scientists imaged the moonlet on Aug. 15, 2008, and then confirmed its presence by finding it in two earlier images. The moonlet is too small to be resolved by Cassini's cameras, so its size cannot be measured directly. However, Cassini scientists estimated the moonlet's size by comparing its brightness to another small Saturnian moon, Pallene.",
  history: "Originally designated S/2008 S1, Aegaeon is named for a fierce giant with many heads and arms who helped conquer the Titans.​",
  moon_radius:0.3
},
{
  planet_id:6,
  moon_name:"Aegir",
  discovered:"Aegir was discovered on Dec. 12, 2004 (one of 12 Saturnian moons found that day) by Scott S. Sheppard, David L. Jewitt, and Jan T. Kleyna using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S10, Aegir was named for a giant in Norse mythology who personified the ocean.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Albiorix",
  discovered:"Albiorix was discovered on Nov. 9, 2000 by Matthew J. Holman and Timothy B. Spahr, using the 6.5-m reflector telescope at the Fred Lawrence Whipple Observatory on Mt. Hopkins, near Amado, Ariz.",
  history: "Originally called S/2000 S11, Albiorix was named for a Gallic deity who may have been equivalent to the Roman god Mars.",
  moon_radius:16
},
{
  planet_id:6,
  moon_name:"Alvaldi",
  discovered:"Discovered in 2004",
  history: "a jötunn from Norse mythology",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Angrboda",
  discovered:"Discovered in 2004",
  history: "Angrboda is a Norse giantess, consort of Loki, and the mother of monsters.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Anthe",
  discovered:"The Cassini Imaging team discovered Anthe on May 30, 2007, although a check back revealed Anthe in Cassini images as early as June 2004. Anthe is the 60th confirmed moon of Saturn.",
  history: "The name Anthe comes from the name in Greek mythology of one of seven Alkyonides—daughters of the god (or Titan) Alkyoneus. Alkyoneus sprang from Gaea and the blood of Uranus. This blood was spilled when Uranus' son—and Alkyoneus' brother—Kronus castrated his father. Herakles (Hercules) killed Alkyoneus in the war between the gods of Mount Olympus and the Titans. Overcome by grief, the daughters threw themselves into the sea to die, but the goddess Amphitrite took pity on them and transformed them into halcyons or kingfishers.",
  moon_radius:0.9
},
{
  planet_id:6,
  moon_name:"Atlas",
  discovered:"Atlas was discovered in 1980 by R. Terrile and the Voyager 1 team from photographs taken during its encounter with Saturn.",
  history: "Originally designated S/1980 S28, this moon is named after Atlas, a Titan, and a son of Iapetus. Atlas was ordered by Zeus to uphold the vault of the sky after the defeat of the Titans. Atlas was so strong that he supported the weight of the Universe on his shoulders.",
  moon_radius:15.1
},
{
  planet_id:6,
  moon_name:"Bebhionn",
  discovered:"Bebhionn was discovered on Dec. 12, 2004 by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna, using the wide-field camera on the 8.2-m Subaru telescope on Mauna Kea, Hawaii, with orbital elements computed by Brian Marsden.",
  history: "Originally called S/2004 S11, Bebhionn was named for a beautiful giantess in Celtic mythology. In one story, she escapes from Maidens' Land—which was populated entirely by women except for the king and his three sons—only to be slain by her giant husband, who was the son of the king of the Isle of Men.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Beli",
  discovered:"discovered in 2004",
  history:"a jötunn from Norse mythology",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Bergelmir",
  discovered:"Bergelmir was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna, using wide-field camera on the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S15, Bergelmir was named for the frost giant who, with his wife, escaped drowning in the flood of Ymir's blood that ensued when Ymir was slain by Odin and his brothers in the Norse tale of creation.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Bestla",
  discovered:"Bestla was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna, using wide-field camera on the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S18, Bestla is named for a giantess and the mother of Odin, who is the supreme god in Norse mythology.​​",
  moon_radius:3.5
},
{
  planet_id:6,
  moon_name:"Calypso",
  discovered:"Calypso was discovered by D. Pascu, P.K. Seidelmann, W. Baum, and D. Currie in March 1980 using a ground-based telescope.",
  history: "Originally called S/1980 S25, Calypso is named for a nymph whose name means 'I hide.' A daughter of the Titans, Oceanus and Tethys, she lived alone on her island until she fell in love with the explorer Odysseus (called Ulysses by the Romans; his name means 'one who suffers'). Calypso helped Odysseus find his way home after his long voyage and dangerous adventures.​​",
  moon_radius:10.7
},
{
  planet_id:6,
  moon_name:"Daphnis",
  discovered:"Daphnis was discovered by the Cassini mission team on 1 May 2005. Prior to its discovery, scientists posited the existence of a moon in Daphnis' position due to the ripples observed along the edge of the Keeler Gap.",
  history: "Formerly known as S/2005 S1, Daphnis is named for a shepherd, and pipes player who is a pastoral poet in Greek mythology. Daphnis was the son of Hermes, the brother of Pan and a descendent of the Titans.​​",
  moon_radius:3.8
},
{
  planet_id:6,
  moon_name:"Dione",
  discovered:"Giovanni Cassini discovered Dione on March 21, 1684.",
  history: "The name Dione comes from the Greek goddess (or Titan) Dione, who by some accounts was the daughter of Tethys (who is Kronus' sister) and Oceanus, and whom Homer described as the mother of Aphrodite.​​",
  moon_radius:561.7
},
{
  planet_id:6,
  moon_name:"Eggther",
  discovered:"This moon was discovered on Dec. 12, 2004.",
  history: "It's also known as Saturn LIX (59). According to the International Astronomical Union (IAU) – in mythology, Eggther is a Norse giant and the watchman who announces the beginning of Ragnarok. Enceladus is Saturn's sixth largest moon, but it's one of the most scientifically compelling bodies in our solar system.​​",
  moon_radius:5
},
{
  planet_id:6,
  moon_name:"Enceladus",
  discovered:"British astronomer William Herschel spotted Enceladus orbiting Saturn on 28 August 1789.",
  history: "Enceladus is named after the giant Enceladus of Greek mythology. William Herschel's son John Herschel suggested the name in his 1847 publication Results of Astronomical Observation made at the Cape of Good Hope, in which he suggested names for the first seven Saturnian moons discovered. He chose these names in particular because Saturn, known in Greek mythology as Cronus, was the leader of the Titans.​",
  moon_radius:252.1
},
{
  planet_id:6,
  moon_name:"Epimetheus",
  discovered:"Audouin Dollfus observed a moon on Dec. 15, 1966, for which he proposed the name 'Janus.' On Dec. 18 of the same year, Richard Walker made a similar observation, now credited as the discovery of Epimetheus. At the time, astronomers believed that there was only one moon, unofficially known as 'Janus,' in the given orbit. Twelve years later, in October 1978, Stephen M. Larson and John W. Fountain realized that the 1966 observations were best explained by two distinct objects (Janus and Epimetheus) sharing very similar orbits. Voyager I confirmed this in 1980, and so Larson and Fountain officially share the discovery of Epimetheus with Walker.",
  history: "The name Epimetheus comes from the Greek god (or titan) Epimetheus (or hindsight) who was the brother of Prometheus (foresight). Together, they represented humanity. The craters on Epimetheus include Hilaeira (who was a priestess of Artemis and Athena) and Pollux (who was a warrior in The Illiad and who carried off Hilaeira). Astronomers also refer to Epimetheus as Saturn XI and as S/1980 S3.​​",
  moon_radius:58.1
},
{
  planet_id:6,
  moon_name:"Erriapus",
  discovered:"Erriapus was discovered on Sept. 23, 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns at the Mauna Kea Observatory on the island of Hawaii.",
  history: "Erriapus, originally designated S/2000 10, is named for a Gallic giant. It was named Erriapo in August 2003, but the name was changed from Erriapo to the nominative Erriapus per International Astronomical Union conventions in late 2007.​​",
  moon_radius:5
},
{
  planet_id:6,
  moon_name:"Farbauti",
  discovered:"Farbauti was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna, using wide-field camera on the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S9, Farbauti was named for a giant in Norse mythology who was the father of Loki, who was known as the disgrace of the gods.​​",
  moon_radius:2.5
},
{
  planet_id:6,
  moon_name:"Fenrir",
  discovered:"Fenrir was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S16, Fenrir was named for a monstrous wolf in Norse mythology who was the offspring of Loki, the disgrace of the gods, and Angrboda, a disagreeable giantess. The gods managed to bind Fenrir using a dwarf-manufactured fetter made of the sound of a cat's footfall, a woman's beard and other hard-to-find components. According to the mythology, Fenrir is destined to break free at doomsday (the time known as Ragnarok) and kill Odin, the supreme Norse god.​",
  moon_radius:2
},
{
  planet_id:6,
  moon_name:"Fornjot",
  discovered:"Fornjot was discovered on Dec. 12 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S8, Fornjot was named for the giant (also called Forniot) in Norse mythology who was father to the giants and commanded the wind, the sea and fire.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Geirrod",
  discovered:"Geirrod was discovered on Dec. 12, 2004.",
  history: "Geirrod was a norse giant killed by Thor",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Gerd",
  discovered:"Gerd was discovered in 2004.",
  history: "Gerd is a Norse giantess and a consort of Freyr",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Greip",
  discovered:"Greip was discovered on March 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2006 S4, Greip was named for one of the nine giantesses who gave birth to Heimdall, the guard of the rainbow bridge that links our world to Asgard, home of the Norse gods.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Gridr",
  discovered:"Gridr was discovered on Dec. 12, 2004.",
  history: "Gridr was a giantess and consort of Odin who warned Thor of Geirrod’s treachery; she equipped Thor with her belt, iron glove, and staff.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Gunnlod",
  discovered:"Gunnlod was discovered on Dec. 12, 2004.",
  history: "Gunnlod is the daughter of Suttungr and guarded the mead of poetry for him.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Hati",
  discovered:"Hati was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "Originally called S/2004 S14, Hati was named for a giant wolf in Norse mythology who pursues the Moon (that is, the Moon chariot and the boy who drives it—see Mundilfari for an explanation) across the sky. According to the mythology, Hati is destined to catch and devour them at the doomsday time known as Ragnarok.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Helene",
  discovered:"Helene was discovered on March 1, 1980 during the Earth ring-plane crossing by J. Lecacheux and others.",
  history: "Originally designated S/1980 S6, Helene is named after the granddaughter of Kronus and is the sister of Polydeuces. Helene was born out of an egg since Zeus took the shape of a swan when he raped her mother Leda. The account of this engendering is retold in the poem 'Leda and the Swan' by William Butler Yeats. This same figure in Greek mythology was the cause of the Trojan War.​",
  moon_radius:17.6
},
{
  planet_id:6,
  moon_name:"Hyperion",
  discovered:"William Lassell discovered Hyperion in 1848. That same year William Cranch Bond, with his son George Phillips Bond, independently discovered the moon. All three men are jointly credited with the discovery.",
  history: "The name Hyperion comes from the Greek god (or Titan) Hyperion (he who watches over). Hyperion, the son of Uranus and Gaia, is a brother of Kronus and the husband of Thea. The children of Hyperion and Thea include Helios (the sun), Eos (the dawn) and Selene (the Moon).​",
  moon_radius:135
},
{
  planet_id:6,
  moon_name:"Hyrrokkin",
  discovered:"Hyrrokkin was discovered on Dec. 12, 2004 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2004 S19, Hyrrokkin was named for giantess in Norse mythology who launched Baldur's enormous funeral ship with one mighty push when the gods, themselves, were unable to budge it​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Iapetus",
  discovered:"Giovanni Cassini discovered Iapetus on Oct. 25, 1671. However, to astronomers Iapetus appeared only as a dot whose brightness varied from brighter to fainter over the course of an orbit around Saturn. The Voyager I and Voyager II encounters in 1980 and 1981 validated Cassini's original observations and explanation with images showing the different reflectivity of Iapetus' hemispheres.",
  history: "The name Iapetus comes from the Greek god (or Titan) Iapetus, who is a son of Uranus and Gaia, a brother to Kronus and the father of Atlas and Prometheus. As the father of Prometheus, the ancient Greeks regarded Iapetus as the father of the human race.​",
  moon_radius:735.6
},
{
  planet_id:6,
  moon_name:"Ijiraq",
  discovered:"Ijiraq was discovered on Sept. 23, 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea, Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Siarnaq, Tarvos, Thrymr, Skathi, Mundilfari, Erriapus, and Suttungr.",
  history: "Originally called S/2000 S6, Ijiraq was named for a fictional character in the children's book, 'Hide and Sneak' by Michael Arvaarluk Kusugak. The moon's co-discoverer, John J. Kavelaars, was reading the book to his children when he was struck by the realization that the character, who helped children hide, would provide a fitting namesake for one of Saturn's elusive moons.​",
  moon_radius:6
},
{
  planet_id:6,
  moon_name:"Janus",
  discovered:"Audouin Dollfus observed a moon on Dec. 15, 1966, for which he proposed the name 'Janus.' On 18 December of the same year, Richard Walker made a similar observation, now credited as the discovery of Epimetheus. At the time, astronomers believed that there was only one moon, unofficially known as 'Janus,' in the given orbit. Twelve years later, in October 1978, Stephen M. Larson and John W. Fountain realized that the 1966 observations were best explained by two distinct objects (Janus and Epimetheus) sharing very similar orbits. Voyager I confirmed this in 1980.",
  history: "The name Janus comes from the Roman god of gates, doors, doorways, beginnings, and endings. He is usually represented as having one face to look forward and another to look back. The Romans may have partially adopted Janus from an Etruscan god, from the Greek god Hermes, or from both. His most apparent remnants in modern English are the month of January and the caretaker of doors and halls, the janitor.​",
  moon_radius:89.5
},
{
  planet_id:6,
  moon_name:"Jarnsaxa",
  discovered:"Jarnsaxa was discovered on March 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2006 S6, Jarnsaxa was named for one of the nine giantesses in Norse mythology who gave birth to Heimdall, the guard of the rainbow bridge that links our world to Asgard, home of the gods.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Kari",
  discovered:"Kari was discovered on March 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna, based on data obtained with the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii, during the months of January to April, 2006.",
  history: "Originally called S/2006 S2, Kari was named for a wind giant in Norse mythology",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Kiviuq",
  discovered:"Kiviuq was discovered on Aug. 7, 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns at the European Southern Observatory in La Silla, Chile. They discovered Ymir and Paaliaq at the same time.",
  history: "Originally called S/2000 S5, Kiviuq was named for the wandering hero of epic stories told by the Inuit people. The name was suggested by Michael Arvaarluk Kusugak, who wrote the children's books from which two other names were taken for Saturnian moons: Ijiraq and Paaliaq. He also suggested the legendary Inuit name Siarnaq, which was used for yet another of Saturn's moons",
  moon_radius:8
},
{
  planet_id:6,
  moon_name:"Loge",
  discovered:"Loge was discovered on March 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2006 S5, Loge was named for Logi, a god who was the personification of fire in Norse mythology. He beat the trickster god, Loki, in an eating contest when he consumed not only the same amount of meat as Loki, but also the bone and the trough which held the food",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Methone",
  discovered:"The Cassini Imaging Team discovered Methone on June 1, 2004. Methone and nearby Pallene were the first moons discovered in Cassini images.",
  history: "The name Methone comes from the name in Greek mythology of one of seven Alkyonides – daughters of the god (or Titan) Alkyoneus. Alkyoneus sprang from Gaea and the blood of Uranus. This blood was spilled when Uranus' son – and Alkyoneus' brother – Kronus castrated his father. Herakles (Hercules) killed Alkyoneus in the war between the gods of Mount Olympus and the Titans. Overcome by grief, the daughters threw themselves into the sea to die, but the goddess Amphitrite took pity on them and transformed them into halcyons or kingfishers.",
  moon_radius:1.6
},
{
  planet_id:6,
  moon_name:"Mimas",
  discovered:"Mimas was discovered on Sept. 17, 1789 by English astronomer William Herschel, using his 40-foot reflector telescope.",
  history: "The mythological Mimas was a giant who was killed by Mars in the war between the Titans and the gods of Olympus. Even after his death, Mimas' legs – which were serpents – hissed vengeance and sought to attack his killer.",
  moon_radius:198.2
},
{
  planet_id:6,
  moon_name:"Mundilfari",
  discovered:"Mundilfari was discovered in 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea in Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Tarvos, Ijiraq, Thrymr, Skathi, Siarnaq, Erriapus, and Suttungr.",
  history: "Originally called S/2000 S9, Mundilfari was named for the father of two beautiful children in Norse mythology, a son whom he named 'Moon' and a daughter whom he named 'Sun.'1 The gods were angered at what they considered his arrogance, so they placed the children in the sky and made the daughter drive the chariot of the sun and the son drive the chariot of the Moon. Each is chased by a wolf who is destined to catch and devour them at the doomsday time known as Ragnarok",
  moon_radius:3.5
},
{
  planet_id:6,
  moon_name:"Narvi",
  discovered:"Narvi was discovered on April 8, 2003 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna, from photos taken from Feb. 5 to 3 April 3.",
  history: "Originally called S/2003 S1, Narvi was named for a son of Loki in Norse mythology.",
  moon_radius:3.5
},
{
  planet_id:6,
  moon_name:"Paaliaq",
  discovered:"Paaliaq was discovered on Aug. 7, 2000, by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns at the European Southern Observatory in La Silla, Chile. They discovered Ymir and Kiviuq at the same time.",
  history: "Originally called S/2000 S2, Paaliaq was named for a fictional Inuit shaman in the book, 'The Curse of the Shaman,' by Michael Arvaarluk Kusugak and Vladyana Langer Krykorka. Kusugak is responsible for the names of four of the five known moons in the Inuit group. He wrote the book from which the name Ijiraq was taken, and he suggested the names Kiviuq and Siarnaq, which came from Inuit legend and mythology.",
  moon_radius:11
},
{
  planet_id:6,
  moon_name:"Pallene",
  discovered:"The Cassini imaging team discovered Pallene on June 1, 2004. Pallene and nearby Methone were the first moons discovered in Cassini images. After the discovery in 2004, scientists realized that Pallene had possibly been first photographed on August 23, 1981, by the space probe Voyager 2.",
  history: "The name Pallene comes from the name in Greek mythology of one of seven Alkyonides, daughters of the god (or Titan) Alkyoneus who was born of Gaia and the blood of Uranus. Herakles (Hercules) killed their father in the war between the gods of Mount Olympus and the titans. Overcome by grief, the seven daughters threw themselves into the sea to die, but the goddess Amphitrite took pity on them and transformed them into halcyons or kingfishers.",
  moon_radius:2.5
},
{
  planet_id:6,
  moon_name:"Pan",
  discovered:"Pan was discovered by M.R. Showalter in 1990 using images taken by the Voyager 2 spacecraft nine years earlier.",
  history: "Pan, a satyr (a creature resembling a man with the hind legs and hooves of a goat), is a Greek god of nature and the forest.",
  moon_radius:14.1
},
{
  planet_id:6,
  moon_name:"Pandora",
  discovered:"Pandora was discovered in October 1980 by the Voyager 1 science team.",
  history: "Originally called S/1980 S26, Pandora was renamed in 1985. In mythology, Pandora (pan-DOR-uh) was a work of art who was transformed into a human by the gods. Her curiosity was said to have loosed all manner of ills upon the world when she let evil creatures out of a locked box; however, she is also responsible for hope entering the world ('hope' had been the last 'creature' in the box).",
  moon_radius:40.7
},
{
  planet_id:6,
  moon_name:"Phoebe",
  discovered:"Phoebe was discovered August 1898 by American astronomer William Pickering.",
  history: "Phoebe is another name for the goddess that the Greeks called Artemis and the Romans called Diana. She was the youthful goddess of Earth's Moon, forests, wild animals, and hunting. Sworn to chastity and independence, she never married and was closely identified with her brother Apollo.",
  moon_radius:106.5
},
{
  planet_id:6,
  moon_name:"Polydeuces",
  discovered:"Polydeuces was discovered by the Cassini mission team on Oct. 21, 2004, and upon further review of Cassini images, scientists found it in images from April 9 of the same year.",
  history: "Originally designated S/2004 S5, Polydeuces (another name for Pollux) is named for the son of Leda and Zeus.",
  moon_radius:1.3
},
{
  planet_id:6,
  moon_name:"Prometheus",
  discovered:"The Voyager 1 science team discovered Prometheus in October 1980.",
  history: "Originally designated S/1980 S27, Prometheus [pro-MEE-thee-us] is named for the son of the Titan Iapetus and brother of Atlas and Epimetheus. He is best known in Greek mythology for stealing fire from the gods and giving it to humanity.​",
  moon_radius:43.1
},
{
  planet_id:6,
  moon_name:"Rhea",
  discovered:"Giovanni Cassini discovered Rhea on Dec. 23, 1672.",
  history: "The name Rhea comes from the Greek goddess (or Titan) Rhea, who was the daughter of Uranus and Gaea. Her husband was Kronus (the Roman Saturn). Rhea was also called the mother of the gods because she gave birth to several of the gods of Mount Olympus, including Zeus (the Roman Jupiter).​",
  moon_radius:764.3
},
{
  planet_id:6,
  moon_name:"S/2004 S13",
  discovered:"S/2004 S13 was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "S/2004 S13 was so designated because it is a satellite (S) that was discovered in 2004, and was the 13th satellite of Saturn (S) to be found that year.",
  moon_radius:2.5
},
{
  planet_id:6,
  moon_name:"S/2004 S12",
  discovered:"S/2004 S12 was discovered on 12 Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "S/2004 S12 was so designated because it is a satellite (S) that was discovered in 2004, and was the 12th satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2004 S17",
  discovered:"S/2004 S17 was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "S/2004 S17 was so designated because it is a satellite (S) that was discovered in 2004, and was the 17th satellite of Saturn (S) to be found that year.",
  moon_radius:2
},
{
  planet_id:6,
  moon_name:"S/2004 S24",
  discovered:"S/2004 S24 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S24 was so designated because it is a satellite (S) that was discovered in 2004, and was the 24th satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2004 S21",
  discovered:"S/2004 S21 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S21 was so designated because it is a satellite (S) that was discovered in 2004, and was the 21st satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2004 S26",
  discovered:"S/2004 S26 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S26 was so designated because it is a satellite (S) that was discovered in 2004, and was the 26th satellite of Saturn (S) to be found that year.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"S/2004 S28",
  discovered:"S/2004 S28 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S28 was so designated because it is a satellite (S) that was discovered in 2004, and was the 28th satellite of Saturn (S) to be found that year.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"S/2004 S29",
  discovered:"S/2004 S29 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S29 was so designated because it is a satellite (S) that was discovered in 2004, and was the 29th satellite of Saturn (S) to be found that year.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"S/2004 S31",
  discovered:"S/2004 S31 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S31 was so designated because it is a satellite (S) that was discovered in 2004, and was the 31st satellite of Saturn (S) to be found that year.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"S/2004 S34",
  discovered:"S/2004 S34 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S34 was so designated because it is a satellite (S) that was discovered in 2004, and was the 34th satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2004 S36",
  discovered:"S/2004 S36 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S36 was so designated because it is a satellite (S) that was discovered in 2004, and was the 36th satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2004 S37",
  discovered:"S/2004 S37 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S37 was so designated because it is a satellite (S) that was discovered in 2004, and was the 37th satellite of Saturn (S) to be found that year.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"S/2004 S39",
  discovered:"S/2004 S39 was on of the 20 new Saturn moons announced on Oct. 7, 2019.",
  history: "S/2004 S39 was so designated because it is a satellite (S) that was discovered in 2004, and was the 39th satellite of Saturn (S) to be found that year.",
  moon_radius:2
},
{
  planet_id:6,
  moon_name:"S/2004 S7",
  discovered:"S/2004 S7 was discovered on Dec. 12, 2004, one of 12 Saturnian moons found that day by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna, using a wide-field camera on the Subaru 8.2-m reflector telescope on Mauna Kea, Hawaii. Brian Marsden computed the orbital elements.",
  history: "S/2004 S7 was so designated because it is a satellite (S) that was discovered in 2004, and was the 7th satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2006 S1",
  discovered:"S/2006 S1 was discovered on Mar. 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna, based on data obtained with the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii, during the months of January to April, 2006.",
  history: "S/2006 S1 was so designated because it is a satellite (S) that was discovered in 2006, and was the 1st satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2006 S3",
  discovered:"S/2006 S3 was discovered on Mar. 6, 2006 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna, based on data obtained with the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii, during the months of January to April, 2006.",
  history: "S/2006 S3 was so designated because it is a satellite (S) that was discovered in 2006, and was the 3rd satellite of Saturn (S) to be found that year.",
  moon_radius:2.5
},
{
  planet_id:6,
  moon_name:"S/2007 S2",
  discovered:"S/2007 S2 was discovered in 2007 by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna using the Subaru 8.2-meter reflector at the Mauna Kea Observatory on the island of Hawaii.",
  history: "S/2007 S2 was so designated because it is a satellite (S) that was discovered in 2007, and was the 2nd satellite of Saturn (S) to be found that year.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"S/2007 S3",
  discovered:"S/2007 S3 was discovered in 2007 by Scott S. Sheppard, David L. Jewitt and Jan T. Kleyna using the 8.2-meter Subaru reflector at the Mauna Kea Observatory on the island of Hawaii.",
  history: "S/2007 S3 was so designated because it is a satellite (S) that was discovered in 2007, and was the 3rd satellite of Saturn (S) to be found that year.",
  moon_radius:2
},
{
  planet_id:6,
  moon_name:"S/2009 S1",
  discovered:"S/2007 S3 was discovered in 2009",
  history: "S/2009 S1 was so designated because it is a satellite (S) that was discovered in 2009, and was the 1st satellite of Saturn (S) to be found that year.",
  moon_radius:0.3
},
{
  planet_id:6,
  moon_name:"S/2019 S1",
  discovered:"This moon was discovered in 2019 by E.J. Ashton, B.J. Gladman, J.-M. Petit, C. Veillet, M. Alexandersen",
  history: "S/2019 S1 was so designated because it is a satellite (S) that was discovered in 2019, and was the 1st satellite of Saturn (S) to be found that year.",
  moon_radius:1.5
},
{
  planet_id:6,
  moon_name:"Siarnaq",
  discovered:"Siarnaq was discovered on Sept. 23, 2000, by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea, Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Tarvos, Ijiraq, Thrymr, Skathi, Mundilfari, Erriapus, and Suttungr.",
  history: "Originally called S/2000 S3, Siarnaq was named for an Inuit goddess of sea creatures who was also queen of the underworld. Siarnaq is a very important deity because, when angered, she withholds seals, walruses and whales from their Inuit hunters. Siarnaq is better known as Sedna, but that name was already taken by an object, believed to be a dwarf planet, which orbits the sun far beyond the Kuiper Belt (possibly in the inner Oort Cloud).",
  moon_radius:20
},
{
  planet_id:6,
  moon_name:"Skathi",
  discovered:"Skathi was discovered on Sept. 23, 2000, by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea, Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Tarvos, Ijiraq, Thrymr, Siarnaq, Mundilfari, Erriapus, and Suttungr.",
  history: "Originally called S/2000 S8, Skathi was named for Skadi, a giantess in Norse mythology. Skadi donned armor and traveled to Asgard, home of the Norse gods, to avenge her father's death at their hands. However, she settled for an agreement that she could pick a husband from their ranks by inspecting only their feet, and that the gods would make her laugh. The latter was accomplished when Loki engaged in a tug of war with a goat, using a cord tied to the goat's beard and to a particularly sensitive part of Loki's anatomy.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Skoll",
  discovered:"Skoll was discovered on March 6, 2006, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2006 S8, Skoll was named for a giant wolf in Norse mythology, who pursues the sun (that is, the sun chariot and the girl who drives it — see Mundilfari for an explanation) across the sky. It is destined to catch and devour them at the doomsday time known as Ragnarok.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Skrymir",
  discovered:"This moon was discovered on Dec. 12, 2004, by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna at the Mauna Kea Observatories.",
  history: "Its provisional designation was S/2004 S23. It’s also known as Saturn LVI (56). According to the International Astronomical Union (IAU) – in mythology, Skrymir is a Norse giant who is a master of illusions.",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Surtur",
  discovered:"Surtur was discovered on March 6, 2006, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna using the Subaru 8.3-m reflector telescope on Mauna Kea, Hawaii.",
  history: "Originally called S/2006 S7, Surtur was named for Surt, who guards Muspell, the land of fire in Norse mythology. At the doomsday time known as Ragnarok, he is destined to lead the fire giants in battle against the gods. The gods will be vanquished and Heaven and Earth will be consumed in fire.",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Suttungr",
  discovered:"Suttungr was discovered in 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea, Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Tarvos, Ijiraq, Thrymr, Skathi, Siarnaq, Erriapus, and Mundilfari.",
  history: "Originally called S/2000 S12, Suttungr was named for Suttungr (also spelled Suttung), a giant in Norse mythology. Two dwarfs were responsible for the death of Suttungr's father in a 'boating accident.' Those same two dwarfs also murdered his mother. So Suttungr captured the dwarfs and took them to a reef, planning to leave them there to drown when the high tide came in. However, Suttung relented when the dwarfs offered to give him special mead (an alcoholic drink made of honey and, in this special case, the blood of a traveling wise man they had killed) which made anyone who drank the mead a poet or scholar. Suttungr ultimately lost the mead to Odin, the supreme Norse god.​",
  moon_radius:3.5
},
{
  planet_id:6,
  moon_name:"Tarqeq",
  discovered:"Tarqeq was discovered on Jan. 16, 2007, by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Subaru 8.2-m reflector at the Mauna Kea Observatory in Hawaii.",
  history: "Originally called S/2007 S1, Tarqeq was named for the Inuit spirit of Earth's Moon. This spirit is said to be a mighty hunter who watches over human behavior. In the mythology of the indigenous people of northern Alaska, he controls the animals.​",
  moon_radius:3
},
{
  planet_id:6,
  moon_name:"Tarvos",
  discovered:"Tarvos was discovered on Sept. 23, 2000, by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea, Hawaii, with adaptive optics. They discovered seven other Saturnian moons at the same time: Siarnaq, Ijiraq, Thrymr, Skathi, Mundilfari, Erriapus and Suttungr.",
  history: "Originally called S/2000 S4, Tarvos was named for a bull in Celtic mythology. It is known from two stone sculptures, found in Paris and Trier, of a bull with three cranes and a tree which is presumed to be a willow. The narrative behind this imagery is lost to antiquity, but it has been hypothesized that the tree represents the cycle of life, the birds are spirits released when life has ended, and the bull represents the vigor and sexual potency that keeps the cycle spinning​",
  moon_radius:7.5
},
{
  planet_id:6,
  moon_name:"Telesto",
  discovered:"Telesto was discovered in 1980 using ground-based observations by Brad Smith, Harold Reitsema, Stephen Larson, and John Fountain.",
  history: "Telesto is a daughter of the Titans Oceanus and Tethys in Greek mythology. It was originally designated S/1981 S13.​",
  moon_radius:12.4
},
{
  planet_id:6,
  moon_name:"Tethys",
  discovered:"Giovanni Cassini discovered Tethys on March 21, 1684.",
  history: "The name comes from the Greek goddess (or Titan) Tethys, who was the daughter of Uranus and Gaea, a sister to Kronus and the wife of Oceanus. She was said to be the mother of the chief rivers, the mother of three thousand daughters called the Oceanids and the embodiment of the waters of the world.​",
  moon_radius:533
},
{
  planet_id:6,
  moon_name:"Thiazzi",
  discovered:"This moon was discovered on Dec. 12, 2004, by Scott S. Sheppard, David C. Jewitt, and Jan iT. Kleyna at the Mauna Kea Observatories.",
  history: "Its provisional designation was S/2004 S33. It’s also known as Saturn LXIII (63). According to the International Astronomical Union (IAU) – in mythology, Thiazzi is a Norse giant, and a son of Alvaldi who kidnapped Idun, guardian of the apples of the gods.​",
  moon_radius:4
},
{
  planet_id:6,
  moon_name:"Thrymr",
  discovered:"Thrymr was discovered in 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns using the 3.6-m Canada-France-Hawaii reflector on Mauna Kea in Hawaii, with adaptive optics.",
  history: "Originally called S/2000 S7, Thrymr was named for a giant in Norse mythology who stole Thor's hammer and offered to return it only if the gods gave him the very beautiful goddess Freyia to be his wife. The gods agree, but instead send Thor, disguised as Freyia. Thor as Freyia orders the hammer to be placed on 'her' knee, whereupon Thor uses the hammer to kill Thrymr, along with the giant's sister, who had asked for 'Freyia's' rings.​",
  moon_radius:3.5
},
{
  planet_id:6,
  moon_name:"Titan",
  discovered:"Dutch astronomer Christiaan Huygens discovered Saturn's largest moon, Titan, on March 25, 1655. It was nearly 300 years later, in 1944, when Dutch-American astronomer Gerard Kuiper discovered one of the characteristics that makes Titan exceptional: this distant moon actually has an atmosphere.",
  history: "Titan, the largest moon of Saturn, is named for the Titans of Greek mythology.​",
  moon_radius:2574.7
},
{
  planet_id:6,
  moon_name:"Ymir",
  discovered:"Ymir was discovered in 2000 by Brett J. Gladman, John J. Kavelaars, Jean-Marc Petit, Hans Scholl, Matthew J. Holman, Brian G. Marsden, Phillip D. Nicholson, and Joseph A. Burns at the European Southern Observatory in La Silla, Chile. They discovered Paaliaq and Kiviuq of the Inuit group at the same time.",
  history: "Originally called S/2000 S1, Ymir was named for the first living being in Norse mythology, the first of a race of frost giants. Odin and his brothers killed Ymir and used his body parts to fashion the Earth. His skull became the heavens.​",
  moon_radius:9
},
{
  planet_id:7,
  moon_name:"Ariel",
  discovered:"Ariel was discovered Oct. 24, 1851 by William Lassell, one of 19th century England's grand amateur astronomers, who used the fortune he made in the brewery business to finance his telescopes.",
  history: "In 'The Tempest,' Ariel is a spirit who serves Prospero, a magician who rescued Ariel from a tree in which he had been imprisoned by a witch called Sycorax. Both Prospero and Sycorax were taken as the names of other Uranian moons.​",
  moon_radius:578.9
},
{
  planet_id:7,
  moon_name:"Belinda",
  discovered:"Belinda was discovered on Jan. 13, 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U5, Belinda was named after the character whose lock of hair is stolen in Alexander Pope's 'Rape of the Lock.'​​",
  moon_radius:40.3
},
{
  planet_id:7,
  moon_name:"Bianca",
  discovered:"Bianca was discovered Jan. 23, 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U9, Bianca was named after the sister of Katharina (Kate) in Shakespeare's play, 'The Taming of the Shrew.'",
  moon_radius:25.7
},
{
  planet_id:7,
  moon_name:"Caliban",
  discovered:"Caliban was discovered on Sept. 6, 1997 at Palomar Observatory by B. Gladman, P. Nicholson, J. A. Burns, and J. Kavelaars. This group of astronomers also discovered another Uranian moon at the same time, which was named Sycorax after the mother of Caliban in William Shakespeare's play The Tempest.",
  history: "Originally called S/1997 U1, Caliban was named for a character in Shakespeare's play, 'The Tempest.' Caliban was forced into labor on an island owned by Prospero. He was human, but 'not honour'd with a human shape,' and is referred to as a mooncalf or freckled monster.",
  moon_radius:36
},
{
  planet_id:7,
  moon_name:"Codelia",
  discovered:"Cordelia was discovered on Jan. 20, 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U7, Cordelia was named for one of the youngest daughters of King Lear in William Shakespeare's play of the same name. King Lear disowns Cordelia for her refusal to flatter him. Others think highly of her, and the King of France marries her for her virtue alone. Cordelia forgives her father in spite of his cruelty toward her and remains loyal to him.",
  moon_radius:20.1
},
{
  planet_id:7,
  moon_name:"Cressida",
  discovered:"Cressida was discovered on Jan. 9, 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U3, Cressida was named for the title character in William Shakespeare's play, 'Troilus and Cressida.'",
  moon_radius:39.8
},
{
  planet_id:7,
  moon_name:"Cupid",
  discovered:"Cupid was discovered on Aug. 25, 2003 by M.R. Showalter and J.J. Lissauer, using the Hubble Space Telescope.",
  history: "Originally called S/2003 U2, Cupid was named for the Roman god of love, who appears in William Shakespeare's play, 'Timon of Athens' (in keeping with the custom of naming most of Uranus' moons after Shakespearean characters).",
  moon_radius:18
},
{
  planet_id:7,
  moon_name:"Desdemona",
  discovered:"Desdemona was discovered on Jan. 13 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U6, Desdemona was named after the wife of Othello in William Shakespeare's play, 'Othello, the Moor of Venice.' Desdemona is the daughter of a Venetian senator.",
  moon_radius:32
},
{
  planet_id:7,
  moon_name:"Ferdinand",
  discovered:"Ferdinand was discovered on Aug, 13, 2001 by Dan Milisavljevic, Matthew J. Holman, John J. Kavelaars, and Tommy Grav, at the Cerro Tololo Inter-American Observatory.",
  history: "Originally called S/2001 U2, Ferdinand was named for the son of Alonso, king of Naples in William Shakespeare's play, 'The Tempest.' Ferdinand eventually marries Miranda, daughter of Prospero, and aids his father-in-law in regaining his Dukedom in Milan.",
  moon_radius:10
},
{
  planet_id:7,
  moon_name:"Francisco",
  discovered:"Francisco was discovered on Aug. 13, 2001 at Cerro Tololo Inter-American Observatory by John J. Kavalaars, Matthew J. Holman, Dan Milisavljevic, and Tommy Grav.",
  history: "Originally called S/2001 U3, Francisco was named after a character in William Shakespeare's play, 'The Tempest.' Francisco is a nobleman who is shipwrecked along with King Alonso (father of Ferdinand) and others.",
  moon_radius:11
},
{
  planet_id:7,
  moon_name:"Juliet",
  discovered:"Juliet was discovered on Jan. 3, 1986 in images taken by Voyager 2. It is one of the 10 Uranian satellites discovered by the Voyager science team.",
  history: "Originally called S/1986 U2, Juliet was named for the title character in William Shakespeare's play, 'Romeo and Juliet.' Juliet is the daughter of the Capulets, who are sworn enemies to the Montagues. Nevertheless, she falls in love with Romeo, son of the Montagues.",
  moon_radius:46.8
},
{
  planet_id:7,
  moon_name:"Mab",
  discovered:"Mab was discovered on Aug. 23, 2003 by Mark R. Showalter and Jack J. Lissauer, using the Hubble Space Telescope.",
  history: "Mab is queen of the fairies in English folklore. She is mentioned in a speech given in William Shakespeare's play, 'Romeo and Juliet,' so the name is at least somewhat in keeping with the practice of naming most Uranian moons after characters in Shakespeare's plays. The original designation for this moon was S/2003 U1.​",
  moon_radius:24
},
{
  planet_id:7,
  moon_name:"Margaret",
  discovered:"Margaret was discovered on Aug. 29, 2003 by Scott S. Sheppard and David C. Jewitt with the Subaru 8.2-m reflector at the Mauna Kea Observatory on the island of Hawaii.",
  history: "Originally called S/2003 U3, Margaret was named after a woman who serves Hero in William Shakespeare's play, 'Much Ado About Nothing.'​",
  moon_radius:10
},
{
  planet_id:7,
  moon_name:"Miranda",
  discovered:"Miranda was discovered in telescopic photos of the Uranian system by Gerard P. Kuiper on Feb. 16, 1948 at the McDonald Observatory in western Texas. It was the last moon of Uranus to be discovered prior to Voyager 2's visit in 1986.",
  history: "Miranda was named for the daughter of Prospero in William Shakespeare's play, 'The Tempest.'​​",
  moon_radius:235.8
},
{
  planet_id:7,
  moon_name:"Oberon",
  discovered:"Oberon was discovered in Jan. 11, 1787 by William Herschel.",
  history: "Named by Herschel's son John in early 19th century for the king of the fairies in Shakespeare's 'A Midsummer Night's Dream.'​",
  moon_radius:761.4
},
{
  planet_id:7,
  moon_name:"Ophelia",
  discovered:"Ophelia was discovered in January 1986 in images sent back by the Voyager 2 spacecraft during its flyby of Uranus.",
  history: "This moon was originally designated S/1986 U8, but was later renamed for the character of Ophelia in Shakespeare's 'Hamlet.' Ophelia is the daughter of Polonius and fiance of Hamlet in the play.​",
  moon_radius:21.4
},
{
  planet_id:7,
  moon_name:"Perdita",
  discovered:"Perdita was discovered 13 years after its picture was taken by Voyager 2 during the spacecraft's flyby in 1986. University of Arizona's Erich Karkoschka found the moon in the public archive of Voyager 2 images when he compared them with those of the Hubble Space Telescope. The International Astronomical Union (IAU) recognized it as a moon of Uranus, but withdrew its designation as premature when subsequent efforts failed to observe it. Its existence was finally confirmed, however, in 2003, when the Hubble imaged an object right in Perdita's predicted location.",
  history: "Originally called S/1986 U10, Perdita was named for the daughter of Leontes and Hermione in William Shakespeare's play, 'The Winter's Tale.' In the play Leontes initially refuses to believe that Perdita is his daughter because he thinks that his wife has had an affair with king Polixenes of Bohemia. Circumstances lead to Perdita being abandoned by her father and later found and raised by a Bohemian shepherd. 16 years later Bohemian Prince Florizel meets and falls in love with Perdita and it is revealed that she is the princess of Sicily. Perdita's father Leontes reconciles his differences with king Polixenes, and the marriage is ratified.​",
  moon_radius:15
},
{
  planet_id:7,
  moon_name:"Portia",
  discovered:"Portia was discovered January 1986 in images sent back by the Voyager 2 spacecraft during its flyby of Uranus.",
  history: "This moon is named after Portia, the heroine of William Shakespeare's 16th century play 'The Merchant of Venice.' It was originally designated S/1986 U 1​​",
  moon_radius:67.6
},
{
  planet_id:7,
  moon_name:"Prospero",
  discovered:"Prospero was discovered July 18, 1999 by Matthew J. Holman, John J. Kavelaars, Brett J. Gladman, Jean-Marc Petit, and Hans Scholl using the Canada-France-Hawaii Telescope at the Mauna Kea Observatory on the island of Hawaii. They discovered Setebos and Stephano at the same time.",
  history: "Originally called S/1999 U3, Prospero was named for a sorcerer in William Shakespeare's play, 'The Tempest.' Prospero, rightfully Duke of Milan, has his dukedom usurped by his brother Antonio with the help of Alonso, King of Naples. He is forced to flee with his daughter Miranda to an island in the Mediterranean, where he perfects his magical powers, hoping to use them to regain his dukedom.​​",
  moon_radius:25
},
{
  planet_id:7,
  moon_name:"Puck",
  discovered:"Puck was discovered December 1985 in images sent back by the Voyager 2 spacecraft during its flyby of Uranus.",
  history: "Originally designated S/1985 U1, Puck is named for a mischievous sprite in William Shakespeare's 'A Midsummer Night's Dream.'​",
  moon_radius:81
},
{
  planet_id:7,
  moon_name:"Rosalind",
  discovered:"Rosalind was discovered by the Voyager 2 science team on 13 January 1986.",
  history: "Originally designated S/1986 U4, Rosalind was named for the daughter of a banished Duke in Shakespeare's play 'As You Like It.'​​",
  moon_radius:36
},
{
  planet_id:7,
  moon_name:"Setebos",
  discovered:"Setebos was discovered on July 18, 1999 by John J. Kavelaars, Brett Gladman, Matthew Holman, Jean-Marc Petit, and Hans Scholl Using the Canada-France-Hawaii Telescope at the Mauna Kea Observatory on the island of Hawaii. They discovered Prospero and Stephano at the same time.",
  history: "Originally called S/1999 U1, Setebos was the name of a South American (Patagonian) deity, which William Shakespeare used as the god worshipped by Sycorax the witch and her son Caliban in the play, 'The Tempest.'​",
  moon_radius:24
},
{
  planet_id:7,
  moon_name:"Stephano",
  discovered:"Stephano was discovered on July 18, 1999 by Brett Gladman, Matthew Holman, John J. Kavelaars, Jean-Marc Petit, and Hans Scholl using the Canada-France-Hawaii Telescope at the Mauna Kea Observatory on the island of Hawaii. They discovered Prospero and Setebos at the same time.",
  history: "Originally called S/1999 U2, Stephano was named for a boisterous butler of King Alonso in William Shakespeare's play, 'The Tempest.'​",
  moon_radius:16
},
{
  planet_id:7,
  moon_name:"Sycorax",
  discovered:"Sycorax was discovered on Sept. 6, 1997 by Philip D. Nicholson, Brett J. Gladman, Joseph A. Burns and John J. Kavelaars using the 200-inch Hale Telescope at Palomar Observatory. They discovered another Uranian moon at the same time, which was named Caliban after the son of Sycorax in Shakespeare's play.",
  history: "Originally called S/1997 U2, Sycorax was named for a witch who was the mother of Caliban in William Shakespeare's play, 'The Tempest,' and who has died before the action of the play begins.​",
  moon_radius:75
},
{
  planet_id:7,
  moon_name:"Titania",
  discovered:"Titania was discovered on Jan. 11, 1787 by British astronomer William Herschel.",
  history: "Titania is named for the queen of the fairies in William Shakespeare's 16th century play 'A Midsummer Night's Dream.'",
  moon_radius:788.9
},
{
  planet_id:7,
  moon_name:"Trinculo",
  discovered:"Trinculo was discovered on Aug. 13, 2001 by Matthew Holman, John J. Kavelaars and Dan Milisavljevic at the Dominion Astrophysical Observatory in Victoria, British Columbia, and by using the 4-m reflector at the Cerro Tololo Inter-American Observatory in Chile.",
  history: "Originally called S/2001 U1, Trinculo was named for the jester in Shakespeare's play 'The Tempest.'",
  moon_radius:9
},
{
  planet_id:7,
  moon_name:"Umbriel",
  discovered:"Umbriel was discovered on Oct. 24, 1851 by English astronomer William Lassell.",
  history: "Umbriel is named for a malevolent spirit in English poet Alexander Pope's 18th century poem 'Rape of the Lock.'",
  moon_radius:584.7
},
{
  planet_id:8,
  moon_name:"Despina",
  discovered:"Despina was discovered in July 1989 by the Voyager 2 science team.",
  history: "Despina is a daughter of Poseidon (the Roman god Neptune) and Demeter. Despina was originally designated S/1989 N3.",
  moon_radius:75
},
{
  planet_id:8,
  moon_name:"Galatea",
  discovered:"Galatea was discovered in July 1989 by the Voyager 2 science team.",
  history: "Galatea was a sea nymph who attended to Poseidon (the Roman god Neptune). The nymphs are also known as the Nereids. The moon was originally designated S/1989 N 4.",
  moon_radius:88
},
{
  planet_id:8,
  moon_name:"Halimede",
  discovered:"Halimede was discovered Aug. 14, 2002 by Matthew J. Holman, John J. Kavelaars, Tommy Grav, Wesley C. Fraser, and Dan Milisavljevic using images taken by the 4.0-meter Blanco telescope at the Cerro Tololo Inter-American Observatory in Chile and the 3.6-meter Canada-France-Hawaii Telescope in Hawaii.",
  history: "Moons of Neptune are named for characters from Greek or Roman mythology associated with Neptune or Poseidon, or the oceans. Irregular satellites are named for the Nereids, daughters of Nereus and Doris and the attendants of Neptune. Halimede is named after one of the Nereids. Halimede was originally designated S/2002 N 1.",
  moon_radius: 31
},
{
  planet_id:8,
  moon_name:"Hippocamp",
  discovered:"Hippocamp, originally designated S/2004 N1, was discovered by Mark Showalter on July 1, 2013 using Hubble Space Telescope images taken of the Neptune system between 2004 and 2009.",
  history: "Hippocamp is a half-horse half-fish from Greek mythology. The scientific name for the seahorse is Hippocampus, also the name of an important part of the human brain.",
  moon_radius: 9
},
{
  planet_id:8,
  moon_name:"Laomedeia",
  discovered:"Laomedeia was discovered Aug. 13, 2002 by Matthew J. Holman, John J. Kavelaars, Tommy Grav, Wesley C. Fraser, and Dan Milisavljevic using images taken by the 4.0-meter Blanco telescope at the Cerro Tololo Inter-American Observatory in Chile and the 3.6-meter Canada-France-Hawaii Telescope in Hawaii.",
  history: "Irregular satellites are named for the Nereids, daughters of Nereus and Doris and the attendants of Neptune. Laomedeia is named for one of the Nereids. Laomedeia was originally designated as S/2002 N 3.",
  moon_radius: 21
},
{
  planet_id:8,
  moon_name:"Larissa",
  discovered:"Although it was initially spotted by H. Reitsema, W. Hubbard, L. Lebofsky, and D. Tholen through ground-based telescopes in 1981, Larissa was officially discovered in July 1989 by the Voyager 2 science team.",
  history: "Larissa was a nymph from Greek mythology. The moon was originally designated S/1989 N 2.",
  moon_radius: 97
},
{
  planet_id:8,
  moon_name:"Naiad",
  discovered:"Naiad was the last moon to be discovered during the Voyager 2 flyby in September 1989.",
  history: "Naiad is named after a type of nymph who presided over fountains, wells, springs, streams, and brooks in Greek mythology. Naiad was originally designated S/1989 N 6.",
  moon_radius: 33
},
{
  planet_id:8,
  moon_name:"Nereid",
  discovered:"Nereid was discovered on May 1, 1949 by Gerard P. Kuiper with a ground-based telescope. It was the last satellite of Neptune to be discovered before Voyager 2's discoveries four decades later.",
  history: "Nereid is named after the Nereids, sea-nymphs, in Greek mythology.",
  moon_radius: 170
},
{
  planet_id:8,
  moon_name:"Neso",
  discovered:"Neso was discovered in 2002 by Matthew J. Holman, John J. Kavelaars, Tommy Grav, Wesley C. Fraser, and Dan Milisavljevic using the 4-m Blanco telescope at Cerro Tololo Observatory in Chile.",
  history: "Neso like many of the outer satellites of Neptune, is named after one of the Nereids. Neso was originally designated S/2002 N 4.",
  moon_radius: 30
},
{
  planet_id:8,
  moon_name:"Proteus",
  discovered:"Proteus was discovered in 1989 by the Voyager 2 spacecraft. This is unusual since a smaller moon, Nereid, was discovered 33 years earlier using an Earth-based telescope. Proteus was most likely overlooked because it is so dark and the distance between Earth and Neptune is so great.",
  history: "Proteus is named after the shape-changing sea god of Greek mythology. Proteus was originally designated S/1989 N 1.",
  moon_radius: 210
},
{
  planet_id:8,
  moon_name:"Psamathe",
  discovered:"Psamathe was discovered by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna Aug. 29, 2003 using the 8.3-m Subaru reflector at the Mauna Kea Observatory on the island of Hawaii.",
  history: "Psamathe like many of the satellites of Neptune, is named after one of the Nereids. Psamathe was originally designated S/2003 N 1.",
  moon_radius: 20
},
{
  planet_id:8,
  moon_name:"Sao",
  discovered:"Sao was discovered Aug. 14, 2002 by Tommy Grav, Matthew J. Holman, John J. Kavelaars, Wesley C. Fraser, and Dan Milisavljevic using images taken by the 4.0-m Blanco telescope at the Cerro Tololo Inter-American Observatory in Chile and the 3.6-m Canada-France-Hawaii Telescope in Hawaii. ",
  history: "Moons of Neptune are named for characters from Greek or Roman mythology associated with Neptune or Poseidon, or the oceans.",
  moon_radius: 22
},
{
  planet_id:8,
  moon_name:"Thalassa",
  discovered:"Thalassa was discovered in August 1989 in images taken by Voyager 2.",
  history: "Thalassa was named after a daughter of Aether and Hemera from Greek mythology. Thalassa is also the Greek word for sea. ",
  moon_radius: 41
},
{
  planet_id:8,
  moon_name:"Triton",
  discovered:"Triton was discovered on Oct. 10, 1846 by British astronomer William Lassell, just 17 days after Neptune itself was discovered.",
  history: "Triton is named after the son of Poseidon (the Greek god comparable to the Roman Neptune). Until the discovery of the second moon Nereid in 1949, Triton was commonly known as simply 'the satellite of Neptune.'",
  moon_radius: 1353.4
},

]
const dwarfData = [
  {
  name: "Pluto",
   name_origin: "The Disney cartoon character Pluto, Mickey's faithful dog, made his debut in 1930, the same year Tombaugh discovered the dwarf planet. There is speculation that Walt Disney named the animated dog after the recently discovered planet to capitalize on its popularity, but other accounts are less certain of a direct link.",
   radius: 1151,
   orbit: "248 years",
   rotation: "153 Hours",
   sun_distance: "5.9 billion km",
   type: "rocky",
   moon_num: 5,
   facts: ["Pluto has a thin atmosphere of nitrogen, methane and carbon monoxide. The atmosphere has a blue tint and distinct layers of haze.", "Pluto has 5 moons. The largest, Charon, is so big that Pluto and Charon orbit each other like a double planet.", "Pluto’s surface is far too cold, -378 to -396 degrees F (-228 to -238 C), to sustain life as we know it."]


},
{
 name: "Ceres",
 name_origin: "Ceres is named for the Roman goddess of corn and harvests. The word cereal comes from the same name.",
 radius: 476,
 orbit: "1682 Earth days",
 rotation: "9 Hours",
 sun_distance: "413 million km",
 type: "rocky",
 moon_num: 0,
 facts: ["Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter, and it's the only dwarf planet located in the inner solar system. ", "There’s no evidence of an atmosphere on Ceres, only sporadic water vapor—possibly from ice ejected by small impacts.", "In the video game, Destiny, Ceres was colonized by an alien race called the Fallen at the end of humanity's Golden Age."]


},
{
 name: "Makemake",
 name_origin: "Makemake was named after the Rapanui god of fertility.",
 radius: 715,
 orbit: "111,690 Earth days",
 rotation: "22.5 Hours",
 sun_distance: "6847 million km",
 type: "rocky",
 moon_num: 1,
 facts: ["Makemake holds an important place in the history of solar system studies because it – along with Eris – was one of the objects whose discovery prompted the International Astronomical Union to reconsider the definition of a planet and to create the new group of dwarf planets.", "If Earth were the size of a nickel, Makemake would be about as big as a mustard seed.", "We can't see too many details of Makemake's surface from so far away, but it does appear to be a reddish-brownish color, similar to Pluto. "]


},
{
 name: "Haumea",
 name_origin: "Haumea is named after the Hawaiian goddess of fertility.",
 radius: 620,
 orbit: "104025 Earth days",
 rotation: "4 Hours",
 sun_distance: "6452 million km",
 type: "rocky",
 moon_num: 2,
 facts: ["It is one of the fastest rotating large objects in our solar system. The fast spin distorts Haumea's shape, making this dwarf planet look like a football.", "If Earth were the size of a nickel, Haumea would be about as big as a sesame seed.", "Haumea is the first known Kuiper Belt Object to have rings. Scientists announced the discovery in 2017 after watching the dwarf planet pass in front of a star."]


},
{
 name: "Eris",
 name_origin: "Eris is named for the ancient Greek goddess of discord and strife. The name fits since Eris remains at the center of a scientific debate about the definition of a planet.",
 radius: 1163,
 orbit: "203,105 Earth days",
 rotation: "25.9 Hours",
 sun_distance: "10.125 billion km",
 type: "rocky",
 moon_num: 1,
 facts: ["If the Earth were the size of a nickel, Eris would be about as big as a popcorn kernel.", "Eris most likely has a rocky surface similar to Pluto. Scientists think surface temperatures vary from about -359 degrees Fahrenheit (-217 degrees Celsius) to -405 degrees Fahrenheit (-243 degrees Celsius).", "The dwarf planet is often so far from the Sun that its atmosphere collapses and freezes, falling to the surface as snow. As it gets closest to the Sun in its faraway orbit, the atmosphere thaws."]


},

  ]

module.exports = {
planetData,
moonData,
dwarfData
};
