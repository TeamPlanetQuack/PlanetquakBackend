# Space_planet

<b>Description: </b>

PlanetQuack is an education single-page application showcasing a profile about each of the planets in our solar system. This repository is the back-end repository for our website. In this readme you can find links to the deployment, instructions for viewing the site locally on your computer, screenshots, teammembers, the tech stack used, and the requirements for the Quackathon challenge it was submitted for with descriptions of how we met and/or exceeded those goals.

<b>Deployment: </b>

<b>To start the project locally: </b>

<b>Seed your database with: npm run seed
   Start you api with: npm run start:dev
   If you'd like local host the api it is http://localhost:8080/api </b>

<b>Screenshots: </b>

<b>Team Members: </b>
- Alexa Mullin
- Maaya Yamauchi
- Jessy Piesco
- Nelson Luna


<b>Tech Stack: </b>

For the back-end we are using Express.js, Node.js, and postgreSQL.

<b>Quackathon requirments: </b>

-- All planet and moon content MUST be stored in a database.
- How we met this goal:
- How we exceeded this goal:

-- You must use foreign keys.
- How we met this goal: The moon table references the planet table with planet_id
- How we exceeded this goal:

-- Planets and Moons must be stored separate from one another.
- How we met this goal:
- How we exceeded this goal:

-- You must incorporate one ENUM for the planet data.
- How we met this goal: The planet name's are in an Enum
- How we exceeded this goal: We also have the planet type as an Enum
