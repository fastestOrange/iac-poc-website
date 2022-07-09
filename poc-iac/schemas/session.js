import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'session',
  title: 'Session',
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
      type: 'reference',
      to: [{type: 'sessionTypes'}]
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
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
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'room'}]
    },
  ],
}
