import React from "react";

const About = () => {
  return (
    <main className="py-5">
      <div className="container">
        <h2 className="">About This Todo App</h2>
        <hr />
        <p>
          Welcome to our Todo application! This app is designed to help you keep
          track of your tasks and organize your day efficiently. Here's a quick
          overview of what you can do with our app:
        </p>
        <h5>Features:</h5>
        <ul>
          <li>Add new users to the system</li>
          <li>View users in a structured table format</li>
          <li>Edit user information</li>
          <li>Delete users using their ID</li>
          <li>Contact our team through the Contact page</li>
          <li>Browse a list of products on the Products page</li>
        </ul>
        <p>
          Our app empowers you to easily manage users, including adding,
          editing, and deleting user information, while also providing quick
          access to contact our team and browse a curated list of products.
        </p>
        <h5>Technologies used:</h5>
        <ul>
          <li>React for building the user interface</li>
          <li>Bootstrap for styling</li>
          <li>localStorage for data persistence</li>
        </ul>
        <p>
          Thank you for using our Todo app! We are constantly working to improve
          and add new features. If you have any feedback or suggestions, feel
          free to reach out to us through the Contact page.
        </p>
      </div>
    </main>
  );
};

export default About;
