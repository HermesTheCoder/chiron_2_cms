import { CollectionConfig } from "payload";

/**
 * Therapies page content schema
 */
const Therapies: CollectionConfig = {
  slug: "therapies",
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
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media", 
          required: true,
        },
      ],
    },
    {
      name: "ourApproach",
      label: "Our Approach",
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
          name: "primaryCTA",
          label: "Primary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA Text",
              type: "text",
              required: true
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
            },
          ]
        },
        {
          name: "secondaryCTA",
          label: "Secondary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA Text",
              type: "text",
              required: true
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
            },
          ]
        },
      ],
    },
    {
      name: "therapies",
      label: "Therapies",
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
          name: "primaryCTA",
          label: "Primary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA Text",
              type: "text",
              required: true
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
            },
          ]
        },
        {
          name: "secondaryCTA",
          label: "Secondary CTA",
          type: "group",
          required: true,
          fields: [
            {
              name: "text",
              label: "CTA Text",
              type: "text",
              required: true
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
            },
          ]
        },
        {
          name: "image1",
          label: "Image1",
          type: "upload",
          relationTo: "media", 
          required: true,
        },
        {          
          name: "image2",
          label: "Image2",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "caption",
          label: "Image Caption",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Therapies;
