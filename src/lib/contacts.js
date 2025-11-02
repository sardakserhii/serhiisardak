export const CONTACTS = [
  {
    type: "email",
    label: "E-mail",
    value: "hello@example.com",
    icon: "lucide:mail",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/yourprofile",
    icon: "simple-icons:linkedin",
  },
  { type: "github", label: "GitHub", value: "https://github.com/yourprofile" , icon: "simple-icons:github"},
  { type: "phone", label: "Telefon", value: "+49 151 23456789" , icon: "lucide:phone" },
];

export const toHref = ({ type, value }) =>
  type === "email"
    ? `mailto:${value}`
    : type === "phone"
    ? `tel:${value.replace(/\s+/g, "")}`
    : value;

export const isExternal = (type) => !(type === "email" || type === "phone");
