import { CollectionConfig } from "payload";

/**
 * Therapies page content schema
 */
const Investors: CollectionConfig = {
  slug: "investors",
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
          name: "CTA",
          label: "CTA",
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
            },
          ],
        },
      ],
    },
    {
      name: "investmentOpportunity",
      label: "Investment Opportunity",
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
          name: "cardData",
          label: "Card Data",
          type: "richText",
          required: true,
        },
        {
          name: "marketNeeds",
          label: "Market Needs",
          type: "group",
          required: true,
          fields: [
            {
              name: "title",
              label: "Tittle",
              type: "text",
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
              name: "pointers",
              label: "Pointer",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "invest",
      label: "Invest Section",
      type: "group",
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
          name: "cards",
          label: "Card",
          type: "array",
          required: true,
          fields: [
            {
              name: "icon",
              label: "Icon",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              label: "title",
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
      ],
    },
    {
      name: "marketAnalysis",
      label: "Market Analysis",
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
          name: "primaryCard",
          label: "Primary Card",
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
              name: "feature",
              label: "Feature",
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
                  name: "text",
                  label: "Text",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "secondaryCard",
          label: "Secondary Card",
          type: "array",
          required: true,
          fields: [
            {
              name: "icon",
              label: "Icon",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "point",
              label: "Point",
              type: "array",
              required: true,
              fields: [
                {
                  name: "text",
                  label: "Text",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "technologyAndInnovation",
      label: "Technology & Innovation",
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
          name: "card",
          label: "Card",
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
          ],
        },
        {
          name: "card2",
          label: "Single Card",
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
              label: "Features",
              type: "array",
              required: true,
              fields: [
                {
                  name: "icon",
                  label: "Icon",
                  type: "upload",
                  relationTo: "media",
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
          ],
        },
      ],
    },
    {
      name: "corning",
      label: "Corning",
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
          name: "cards",
          label: "Card",
          type: "array",
          required: true,
          fields: [
            {
              name: "title",
              label: "title",
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
      ],
    },
    {
      name: "clinicalApplications",
      label: "Clinical Applications",
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
          name: "card",
          label: "Card",
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
              name: "icon",
              label: "Icon",
              type: "upload",
              relationTo: "media",
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
              name: "stage",
              label: "Stage",
              type: "text",
              required: true,
            },
            {
              name: "filing",
              label: "Filing",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "regulatoryStrategy",
          label: "Regulatory Strategy",
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
              name: "points",
              label: "Point",
              type: "array",
              required: true,
              fields: [
                {
                  name: "text",
                  label: "Text",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "growthPath",
      label: "Growth Path",
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
          name: "phases",
          label: "Phase",
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
          ],
        },
        {
          name: "cta",
          label: "CTA",
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
              name: "link",
              label: "Link",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "mobileTimeline",
          label: "Mobile Timeline",
          type: "group",
          required: true,
          fields: [
            {
              name: "current",
              label: "Current",
              type: "text",
              required: true,
            },
            {
              name: "year1",
              label: "Year 1",
              type: "text",
              required: true,
            },
            {
              name: "year2",
              label: "Year 2",
              type: "text",
              required: true,
            },
          ]
        }
      ],
    },
    {
      name: "companyProfile",
      label: "Company Profile",
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
          name: "mission",
          label: "Mission",
          type: "group",
          required: true,
          fields: [
            {
              name: "title",
              label: "Mission Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Mission Description",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "mission2",
          label: "Mission",
          type: "group",
          required: true,
          fields: [
            {
              name: "title",
              label: "Mission Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Mission Description",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "companyHighlights",
          label: "Company Highlights",
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
              name: "highlights",
              label: "Highlight",
              type: "array",
              required: true,
              fields: [
                {
                  name: "highlight",
                  label: "Highlight",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "CTA",
          label: "CTA",
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
            },
          ],
        },
      ],
    },
  ],
};

export default Investors;
