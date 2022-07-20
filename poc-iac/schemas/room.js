import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "room",
  title: "Room",
  type: "document",
  icon,
  fields: [
    {
      name: "roomName",
      title: "Room Name",
      type: "string",
    },
    {
      name: "roomNumber",
      title: "Room Number",
      type: "string",
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: [{ type: "venue" }],
    },
    {
      name: "floorPlan",
      title: "Floor Plan",
      type: "string",
    },
  ],
};
