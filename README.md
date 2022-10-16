# article-db-mockup
Repo for testing mockups for a vintage clothing shop's information database

## Stacks
Initially going to try a PERN stack, as I think SQL might be the right format for the intended data. I am more comfortable with MongoDB/NoSQL, but the practice with PostgreSQL and SQL in general will be welcome. As for the back-end, I am also pretty comfortable with Express/Node and am hopeful that I can work this first mockup up realtively quickly. For front-end, seems like I will never be able to get enough practice with React, so we'll go with that. 

### Addtional Tech
Will probably need to cloud-host the Postgres DB on ElephantSQL or maybe another platform. Uncertain at this point where I will host back and front ends. I've been having success with Render.com for back ends and either Github Pages, Netlify, or Fly.io for front-ends. 

Eventually, if this project is successful, a customer-facing app would likely require a paid hosting service. 

Might also need to play around with Redux or React Context if the components get complex.

### Potential Development Pain Points
- SQL querying
- Database Architecture -- need to work out with client full scope of data needed and adapt db architecture accordingly. 
- User Auth -- the ultimate goal here is to gate the most useful database content behind a paid subscription service. So we will need to develop appropriate user auth tools to manage admins, unpaid users, and paid users (perhaps in varying tiers). This will be largely new territory for me, so it will probably take a good amount of time to hash out.
- Efficient UI/UX -- How does client want users to be able to search? Build UI/UX that matches intent.
