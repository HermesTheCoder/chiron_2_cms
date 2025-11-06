import { CollectionConfig } from "payload";

/**
 * Home page content schema
 */
const Home: CollectionConfig = {
  slug: "home",
  labels: {
    plural: "Home",
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
        {
          name: "primaryCTA",
          label: "Primary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA text",
              type: "text",
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "secondaryCTA",
          label: "Secondary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA text",
              type: "text",
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "ourStorySection",
      label: "Our Story Section",
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
          name: "subtitle",
          label: "Subtitle",
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
          name: "videoSection",
          label: "Video Section",
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
              name: 'description',
              label: 'Description',
              type: 'richText',
              required: true,
            },
            {
              name: "primaryCTA",
              label: "Primary CTA",
              type: "group",
              required: true,
              fields: [
                {
                  name: "text",
                  label: "CTA text",
                  type: "text",
                  required: true,
                },
                {
                  name: "link",
                  label: "CTA Link",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "secondaryCTA",
              label: "Secondary CTA",
              type: "group",
              required: true,
              fields: [
                {
                  name: "text",
                  label: "CTA text",
                  type: "text",
                  required: true,
                },
                {
                  name: "link",
                  label: "CTA Link",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'cards',
          label: 'Card',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'icon',
              label: 'Icon',
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
            }
          ]
        }
      ],
    },
    {
      name: "advantages",
      label: "Key Advantages",
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
          name: "features",
          label: "Feature",
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
              name: "icon",
              label: "Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "therapySection",
      label: "Therapy Section",
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
          name: "therapies",
          label: "Therapy",
          type: "array",
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
              required: true,
            },
            {
              name: "link",
              label: "Link",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default Home;
