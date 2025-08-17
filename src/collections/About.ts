import { CollectionConfig } from "payload";

/**
 * About Us page content schema
 */
const About: CollectionConfig = {
  slug: "about",
  labels: {
    plural: 'About',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "banner",
      label: "Banner",
      type: "group",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
          required: true,
        },
        {
          name: "backgroundImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media", 
          required: true,
        },
      ],
    },
    {
      name: "ourMission",
      label: "Our Mission",
      type: "group",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
          required: true,
        },
        {
          name: "missionValues",
          label:  "Mission Values",
          type: "array",
          fields: [
            {
                name: "title",
                label: "Title",
                type: "text",
                required: true,
            },
            {
                name: "description",
                label: "Description",
                type: "richText",
                required: true,
            },
            {
                name: "image",
                label: "Image",
                type: "upload",
                relationTo: "media",
                required: true,
            },
          ]
        },
        {
          name: "SISTProcess",
          label: "SIST Technology Process",
          type: "group",
          required: true,
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true
            },
            {
              name: "description",
              label: "Description",
              type: "richText",
              required: true
            },
            {
              name: "image",
              label: "Image",
              type: "upload",
              relationTo: "media",
              required: true
            },
            {
              name: "imageCaption",
              label: "Image Caption",
              type: "text",
              required: true
            },
          ]
        }
      ],
    },
    {
      name: "ourStory",
      label: "Our Story",
      type: "group",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,   
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
          required: true,   
        },
      ]
    },
    {
      name: 'therapeuticsIntro',
      label: 'Therapeutics Section',
      type: "group",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
          required: true,
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true
        },
        {
          name: 'clinicalDevelopmentPrograms',
          label: 'Clinical Development Programs',
          type: 'group',
          fields: [
            {
              name: 'title',
              label: 'Section Title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Section Description',
              type: 'richText',
              required: true,
            },
            {
              name: 'pipelines',
              label: 'Therapeutic Pipelines',
              type: 'array',
              fields: [
                {
                  name: 'iconBackgroundColor',
                  label: 'Icon Background Color',
                  type: 'text',
                  required: true, 
                },
                {
                  name: 'icon',
                  label: 'Icon Image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true, 
                },
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
              ],
            },
          ],
        },
        {
          name: 'closingText',
          label: 'Closing Text',
          type: 'text',
          required: true
        },
      ],
    },
  ],
};

export default About;
