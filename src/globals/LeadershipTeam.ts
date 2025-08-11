import { GlobalConfig } from 'payload';

const LeadershipTeam: GlobalConfig = {
  slug: 'leadershipTeam',
  label: 'Leadership Team',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'members',
      label: 'Team Members',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Position',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          label: 'Photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'linkedinURL',
          label: 'LinkedIn URL',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          label: 'Bio',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};

export default LeadershipTeam;
