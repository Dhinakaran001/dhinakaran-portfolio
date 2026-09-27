import { ContactFormErrors, ContactFormState } from './Contact.interface';
import { CONTACT_EMAIL } from './Contact.constants';

export const validateContactForm = (
  values: ContactFormState
): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).';
  }

  return errors;
};

export const buildMailtoUrl = (values: ContactFormState): string => {
  const subject = encodeURIComponent(
    `${values.subject} — via Portfolio (${values.name})`
  );
  const body = encodeURIComponent(
    `Hi Dhinakaran,\n\n${values.message}\n\nBest regards,\n${values.name}\nEmail: ${values.email}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
