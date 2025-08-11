import { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "footerLinks",
      label: "Footer Links",
      type: "array",
      required: true,
      fields: [
        {
          name: "label",
          label: "label",
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
      name: "footerData",
      label: "Contact Information",
      type: "group",
      required: true,
      fields: [
        {
          name: "address",
          label: "Address",
          type: "text",
          required: true,
        },
        {
          name: "number",
          label: "Number",
          type: "text",
          required: true,
        },
        {
          name: "mail",
          label: "Mail",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Footer;
