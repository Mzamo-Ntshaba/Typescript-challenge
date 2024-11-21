/**
 * This interface defines the structure of the address details
 * for each person. It includes street address, city, and zip code.
 */
interface AddressDetails {
  /**
   * The street address of the person.
   * @example "123 Main St"
   */
  address: string;

  /**
   * The city where the person lives.
   * @example "Wonderland"
   */
  city: string;

  /**
   * The zip code of the person's address.
   * @example 12345
   */
  zipCode: number;
}

/**
 * This interface defines the structure of a person object.
 * Each person has an id, name, status, birthdate, etc.
 * The person object includes information about the person's address, skills, and more.
 */
interface Person {
  /**
   * A unique identifier for the person.
   * @example 1
   */
  id: number;

  /**
   * The name of the person.
   * @example "Alice"
   */
  name: string;

  /**
   * A boolean flag to indicate if the person is active or not.
   * @example true
   */
  isActive: boolean;

  /**
   * The person's age.
   * @example 25
   */
  age: number;

  /**
   * A list of skills that the person possesses.
   * @example ["JavaScript", "TypeScript", "React"]
   */
  skills: string[];

  /**
   * The address details of the person, based on the AddressDetails structure.
   */
  details: AddressDetails;

  /**
   * The score of the person. Can be a number or null.
   * @example 100 or null
   */
  score: number | null;

  /**
   * The status of the person, which can be a string, null, or undefined.
   * @example "Active", undefined, or null
   */
  status: string | null | undefined;

  /**
   * The person's birthdate as a Date object.
   * @example new Date("1998-05-15")
   */
  birthdate: Date;

  /**
   * A method to greet the person by returning a string with their name.
   * @returns A greeting string such as "Hello, I'm Alice".
   */
  greet: () => string;
}

/**
 * An array of person objects that follows the structure defined in the Person interface.
 * Each object contains information like name, skills, address, score, etc.
 */
const complexArray: Person[] = [
  {
    id: 1,
    name: "Alice",
    isActive: true,
    age: 25,
    skills: ["JavaScript", "TypeScript", "React"],
    details: {
      address: "123 Main St",
      city: "Wonderland",
      zipCode: 12345,
    },
    score: null,
    status: undefined,
    birthdate: new Date("1998-05-15"),
    greet: function () {
      return `Hello, I'm ${this.name}`;
    },
  },
  {
    id: 2,
    name: "Bob",
    isActive: false,
    age: 30,
    skills: ["Python", "Django", "Machine Learning"],
    details: {
      address: "456 Side St",
      city: "Shire",
      zipCode: 54321,
    },
    score: 100,
    status: null,
    birthdate: new Date("1993-08-20"),
    greet: function () {
      return `Hello, I'm ${this.name}`;
    },
  },
  {
    id: 3,
    name: "Charlie",
    isActive: true,
    age: 28,
    skills: ["Java", "Spring Boot", "Kotlin"],
    details: {
      address: "789 Circle Dr",
      city: "Gotham",
      zipCode: 67890,
    },
    score: 85,
    status: undefined,
    birthdate: new Date("1995-02-10"),
    greet: function () {
      return `Hello, I'm ${this.name}`;
    },
  },
];

/**
 * This line selects the HTML element with the id 'people-list',
 * where the person cards will be inserted. If the element exists, we proceed to display the data.
 */
const peopleListElement = document.getElementById("people-list");

/**
 * Check if the element 'people-list' exists in the DOM.
 * If it does, we loop through the complexArray and display each person's information in a card format.
 */
if (peopleListElement) {
  // Iterate through each person in the complexArray.
  complexArray.forEach((person) => {
    /**
     * Create a div element for each person's card. This card will contain all the details about the person.
     * The class 'person-card' is added so we can style the cards using CSS.
     */
    const personCard = document.createElement("div");
    personCard.classList.add("person-card");

    /**
     * Format the birthdate of the person into a human-readable string.
     * We use 'en-GB' locale and specify the format as 'day month year'.
     * This makes the birthdate look like: "15 May 1998".
     */
    const formattedBirthdate = person.birthdate.toLocaleDateString("en-GB", {
      day: "numeric",  // Show day as a number.
      month: "long",   // Show the full name of the month.
      year: "numeric", // Show the full year.
    });

    /**
     * Build the inner HTML for the personCard.
     * This includes the person's name, age, address, status, score, birthdate, skills, and greeting.
     * It uses the person's details and dynamically generates HTML content.
     */
    personCard.innerHTML = `
      <h3>${person.name}</h3>
      <p><strong>Age:</strong> ${person.age}</p>
      <p><strong>Address:</strong> ${person.details.address}, ${person.details.city} ${person.details.zipCode}</p>
      <p><strong>Status:</strong> ${person.status ?? "N/A"}</p>
      <p><strong>Score:</strong> ${person.score ?? "N/A"}</p>
      <p><strong>Birthdate:</strong> ${formattedBirthdate}</p>
      <p><strong>Skills:</strong></p>
      <ul class="skills">
        ${person.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      <p class="greet"><strong>Greet:</strong> ${person.greet()}</p>
    `;

    /**
     * After populating the personCard with data, we append the card to the peopleListElement.
     * This will add the person's card to the webpage and display it on the UI.
     */
    peopleListElement.appendChild(personCard);
  });
}
