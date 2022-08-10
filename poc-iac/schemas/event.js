export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "abbreiatedName",
      title: "Abbreviated Name",
      type: "string",
    },
    {
      name: "theme",
      title: "Theme",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "eventTypes" }],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: [{ type: "venue" }],
    },
  ],
};
