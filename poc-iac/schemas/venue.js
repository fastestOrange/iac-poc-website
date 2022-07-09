import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon,
  fields: [
    {
      name: 'sessionName',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'reference',
      to: [{type: 'person'}]
    },
    {
      name: 'moderators',
      title: 'Moderators',
      type: 'reference',
      to: [{type: 'person'}]
    },
    {
      name: 'roles',
      title: 'Roles',
      type: 'array', 
      of: [{type: 'block'}]
    },
  ],
}
