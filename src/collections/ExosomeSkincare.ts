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
          name: "image",
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
      name: "skinCareSection",
      label: "Skin Care & Rejuvenation Section",
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
      name: "woundCareSection",
      label: "Advanced Wound Care Section",
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
              type: "text",
              required: true,
            },
            {
              name: "icon",
              label: "Icon",
              type: "select",
              options: [
                { label: "Deep Penetration", value: "penetration" },
                { label: "Natural Regeneration", value: "regeneration" },
                { label: "Proven Safety", value: "safety" },
              ],
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
  ],
};

export default ExosomeSkincare;
