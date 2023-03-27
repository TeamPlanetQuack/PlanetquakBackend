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
      name_origin: "Venus is named after the Roman God of love and beauty due to it being the brightest object in the sky aside from the Sun and the Moon.",
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
    facts: ["Earth resides within the “habitable zone” of the Sun. This is the perfect distance from the Sun in which the temperatures are just right for liquid water to exist on the surface.", "Earth is the only planet in our solar system with liquid water on the surface. This is what makes it the most unique and capable of sustaining life.", "Earth is the only planet in our solar system with liquid water on the surface. This is what makes it the most unique and capable of sustaining life."]
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
]

module.exports = {
planetData,
moonData
};
