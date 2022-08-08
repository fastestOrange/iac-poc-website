export default {
  name: "role",
  title: "Role",
  type: "document",
  fields: [
    {
      name: "roleTitle",
      title: "Role Title",
      type: "reference",
      to: { type: "roleTypes" },
    },
    {
      name: "event",
      title: "Event",
      type: "reference",
      to: { type: "event" },
    },
  ],
};
