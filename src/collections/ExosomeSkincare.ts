import { CollectionConfig } from "payload";

/**
 * Exosome Skincare page content schema
 */
const ExosomeSkincare: CollectionConfig = {
  slug: "exosome-skincare",
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
          name: "subtitle",
          label: "Subtitle",
          type: "text",
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
      name: "introduction",
      label: "Introduction",
      type: "group",
      required: true,
      fields: [
        {
          name: "subtitle",
          label: "Subtitle",
          type: "text",
          required: true,
        },
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
      ],
    },
    {
      name: "exosomePoweredTherapiesSection",
      label: "Exosome Powered Skincare Therapies",
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
          name: "imageCaption",
          label: "Image Caption",
          type: "text",
          required: true,
        },
        {
          name: "linkedButtonText",
          label: "Linked Button Text",
            type: "text",
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
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true
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
              label: "CTA Text",
              type: "text",
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true
            },
          ],
        },
      ],
    },
    {
      name: "benefitsSection",
      label: "Technology Benefits Section",
      type: "group",
      required: true,
      fields: [
        {
          name: "subtitle",
          label: "Subtitle",
          type: "text",
          required: true,
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "benefits",
          label: "Benefits",
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
              label: "Icon",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "ctaSection",
      label: "Call to Action Section",
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
          type: "text",
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
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true
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
              label: "CTA Text",
              type: "text",
              required: true,
            },
            {
              name: "link",
              label: "CTA Link",
              type: "text",
              required: true
            },
          ],
        },
      ],
    },
  ],
};

export default ExosomeSkincare;
