export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  iconName: 'mail' | 'phone' | 'map-pin' | 'linkedin';
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactProps {
  className?: string;
}
