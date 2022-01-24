# GreatReads

# Summary

GreatReads is a website where users can lookup books/authors and read reviews. Once logged in, users get the ability to add books/authors to their respective collections and leave their own reviews on the detail page.

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
<li> Add User Rating</li>
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
