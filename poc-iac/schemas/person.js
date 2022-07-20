/* ASK:
email, address, country, and phone number stored in Firebase and not needed in Sanity?
*/

export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "professionalTitle",
      title: "Professional Title",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    // Bio isn't in the schema - add it so that it's available for speakers on sessions?
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "string",
    },
  ],
};
