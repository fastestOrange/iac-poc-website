import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "venue",
  title: "Venue",
  type: "document",
  icon,
  fields: [
    {
      name: "venueName",
      title: "Venue Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "contact",
      title: "Contact",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};
