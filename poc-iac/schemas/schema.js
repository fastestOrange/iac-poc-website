// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import event from "./event";
import session from "./session";
import room from "./room";
import sessionTypes from "./sessionTypes";
import eventTypes from "./eventTypes";
import venueTypes from "./venueTypes";
import venue from "./venue";
import person from "./person";
import roleTypes from "./roleTypes";
import role from "./role";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    event,
    session,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    room,
    sessionTypes,
    eventTypes,
    venueTypes,
    venue,
    person,
    roleTypes,
    role,
  ]),
});
