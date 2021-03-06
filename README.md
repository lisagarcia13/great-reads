# [GreatReads](https://great-reads.netlify.app/)

# Summary

GreatReads is a website where users can lookup books and authors.They are able to click through images of books that will lead them to an individual detail page. A short description is provided for the user. On the author side, users can click through author images that will lead to their detail page which will list any books in the database. Once logged in, users get the ability to add books and authors to their respective collections.

# Dependencies

Below are the list of dependcies needed for me to complete this app :

<ul>
  <li> Django (djangorestframework, djangorestframework_simplejwt)</li>
  <li> psycopg2-binary</li>
  <li> React Router DOM</li>
  <li>Axios</li>

</ul>

# MVP

<ul>
  <li> Database using PostgreSQL</li>
  <li> REST JSON API in Django with user authentication</li>
  <li> Front-End in React</li>

</ul>

# Post-MVP

<ul>
<li> Add User Rating/Reviews</li>
<li> User can keep track what they're reading, what they want to read, what they have read.</li>
<li> Search Bar </li>
<li>Have links to buy books from external websites</li>
</ul>

# Wireframe

A basic wireframe created with figma

[Wireframe](https://www.figma.com/file/Jq5fMtpn4YR9m3gysUqg7R/Great-Reads?node-id=0%3A1 "Wireframe")

# Entity Relationship Diagram

Showing the relationships between authors and books.

[Entity Relationship Diagram](https://whimsical.com/WAKnLnGZ3HAttWGxrvbSKi "Entity Relationship Diagram")

# Componenet Hierarchy

Components tree for React

[Component Hierarchy](https://whimsical.com/JbbwtqmoUQxpBe53cwuK12 "component hierarchy")

# API Endpoints

/ - home

/books - Grabs all books

/books/id - Grabs book detail of the book with that ID

/books/id/update - Update book specified in ID

/books/id/delete - Delete book specified in ID

/authors - Grabs all authors

/authors/id - Grabs author detail of the author with that ID

/authors/id/update - Update author specified in ID

/authors/id/delete - Delete author specified in ID

/signup - Sign up page to create account

/login - Login page
