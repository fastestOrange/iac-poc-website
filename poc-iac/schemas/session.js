import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "session",
  title: "Session",
  type: "document",
  icon,
  fields: [
    {
      name: "sessionName",
      title: "Name",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "sessionTypes" }],
    },
    {
      name: "event",
      title: "Event",
      type: "reference",
      to: [{ type: "event" }],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "startTime",
      title: "Start Time",
      type: "datetime",
    },
    {
      name: "endTime",
      title: "End Time",
      type: "datetime",
    },
    {
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [{ type: "person" }],
    },
    {
      name: "moderators",
      title: "Moderators",
      type: "array",
      of: [{ type: "person" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "room" }],
    },
  ],
};
