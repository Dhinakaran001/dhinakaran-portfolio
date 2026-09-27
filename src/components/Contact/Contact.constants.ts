import { ContactChannel, ContactFormState } from './Contact.interface';

export const CONTACT_SECTION_HEADER = {
  eyebrow: 'Get In Touch',
  titleStart: "Let's Build Something",
  titleHighlight: 'Impactful Together',
  subtitle:
    'Looking for a Senior React.js & TypeScript Frontend Engineer for your enterprise product or SaaS team? Reach out directly via email, phone, or LinkedIn.',
};

export const CONTACT_EMAIL = 'karandhina708@gmail.com';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email Address',
    value: 'karandhina708@gmail.com',
    href: 'mailto:karandhina708@gmail.com',
    copyable: true,
    iconName: 'mail',
  },
  {
    id: 'phone',
    label: 'Phone / WhatsApp',
    value: '+91-9080352865',
    href: 'tel:+919080352865',
    copyable: true,
    iconName: 'phone',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/dhinakaran-n',
    href: 'https://www.linkedin.com/in/dhinakaran-n',
    copyable: false,
    iconName: 'linkedin',
  },
  {
    id: 'location',
    label: 'Current Location',
    value: 'Bengaluru & Tamil Nadu, India',
    copyable: false,
    iconName: 'map-pin',
  },
];

export const INITIAL_CONTACT_FORM: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
