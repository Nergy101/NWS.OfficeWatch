<p align=center>
    <img src="./Logo_Nemic-40.png" width="200" height:"200"/>
</p>

# NWS.OfficeWatch

Nemic Web Solutions OfficeWatch repository.

OfficeWatch aims to help all the offices with leftover space.

It allows you to sign-up your office and the many spaces you want to rent to others.
Then in OfficeWatch others can find and send reservations for your available office-spaces.

This is not only better for your wallet- it's also better for the environment and helps with enabling a flexible/remote working environment for everybody.

---

# Table of contents

- [NWS.OfficeWatch](#nwsofficewatch)
- [Table of contents](#table-of-contents)
  - [Built with](#built-with)
  - [GraphQL API](#graphql-api)

---

## Built with

| Frontend  | Backend |     Other      |
| :-------: | :-----: | :------------: |
|    Vue    | Nest.js | Apollo GraphQL |
| Bootstrap | Node.js |    MongoDB     |

## GraphQL API

We use a GraphQL API so the minimal amount of data is sent across the wire at all times.
There wont be any 'over'- or 'under'-fetching as we can request exactly what we want in a single request for displaying.
