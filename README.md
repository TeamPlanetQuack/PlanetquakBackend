# Space_planet

<b>Description: </b>

PlanetQuack is an education single-page application showcasing a profile about each of the planets in our solar system. This repository is the back-end repository for our website. In this readme you can find links to the deployment, instructions for viewing the site locally on your computer, screenshots, teammembers, the tech stack used, and the requirements for the Quackathon challenge it was submitted for with descriptions of how we met and/or exceeded those goals.

<b>Deployment: </b>

<b>To start the project locally: </b>

<b>Seed your database with: npm run seed

   Start you api with: npm run start:dev

   If you'd like local host the api it is http://localhost:8080/api </b>


<b>Team Members: </b>
- Alexa Mullin
- Maaya Yamauchi
- Jessy Piesco
- Nelson Luna


<b>Tech Stack: </b>

For the back-end we are using Express.js, Node.js, and postgreSQL.

<b>Quackathon requirments: </b>

-- All planet and moon content MUST be stored in a database.
- How we met this goal: All planet and moon data is stored in the database.
- How we exceeded this goal: We also stored dwarf planet data and quiz questions data.

-- You must use foreign keys.
- How we met this goal: We used foreign keys by the moon table referencing the planet table with planet_id.


-- Planets and Moons must be stored separate from one another.
- How we met this goal: Planets and moons have their own table.
- How we exceeded this goal:Dwarf planets and Quiz questions also have their own table.

-- You must incorporate one ENUM for the planet data.
- How we met this goal: The planet name's are in an Enum
- How we exceeded this goal: We also have the planet type as an Enum, as well as dwarf planet names and type as Enum.
