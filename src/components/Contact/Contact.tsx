import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';
import { LinkedInIcon } from '../Icons';
import {
  ContactChannel,
  ContactFormErrors,
  ContactFormState,
  ContactProps,
} from './Contact.interface';
import {
  CONTACT_CHANNELS,
  CONTACT_SECTION_HEADER,
  INITIAL_CONTACT_FORM,
} from './Contact.constants';
import {
  buildMailtoUrl,
  copyTextToClipboard,
  validateContactForm,
} from './Contact.helpers';
import './Contact.scss';

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const [formState, setFormState] =
    useState<ContactFormState>(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopy = async (id: string, value: string): Promise<void> => {
    const success = await copyTextToClipboard(value);
    if (success) {
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2200);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validateContactForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailtoUrl = buildMailtoUrl(formState);
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setFormState(INITIAL_CONTACT_FORM);
  };

  const renderChannelIcon = (iconName: ContactChannel['iconName']) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={20} />;
      case 'phone':
        return <Phone size={20} />;
      case 'linkedin':
        return <LinkedInIcon size={20} />;
      case 'map-pin':
        return <MapPin size={20} />;
    }
  };

  return (
    <section
      id="contact"
      className={`contact ${className}`.trim()}
      aria-labelledby="contact-heading"
    >
      <div className="contact__container">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <MessageSquare size={14} aria-hidden="true" />
            <span>{CONTACT_SECTION_HEADER.eyebrow}</span>
          </div>
          <h2 id="contact-heading" className="section-header__title">
            {CONTACT_SECTION_HEADER.titleStart}{' '}
            <span>{CONTACT_SECTION_HEADER.titleHighlight}</span>
          </h2>
          <p className="section-header__subtitle">
            {CONTACT_SECTION_HEADER.subtitle}
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__channels">
            {CONTACT_CHANNELS.map((channel) => {
              const isCopied = copiedId === channel.id;
              return (
                <div key={channel.id} className="contact__channel-card">
                  <div className="contact__channel-left">
                    <div className="contact__channel-icon" aria-hidden="true">
                      {renderChannelIcon(channel.iconName)}
                    </div>
                    <div>
                      <span className="contact__channel-label">
                        {channel.label}
                      </span>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          target={
                            channel.href.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            channel.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="contact__channel-value"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <span className="contact__channel-value">
                          {channel.value}
                        </span>
                      )}
                    </div>
                  </div>

                  {channel.copyable && (
                    <button
                      type="button"
                      className={`contact__copy-btn ${
                        isCopied ? 'contact__copy-btn--copied' : ''
                      }`}
                      onClick={() => handleCopy(channel.id, channel.value)}
                      aria-label={`Copy ${channel.label}`}
                    >
                      {isCopied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="contact__form-card">
            <h3 className="contact__form-title">Send a Direct Message</h3>
            <p className="contact__form-subtitle">
              Fill out the form below to open a pre-addressed message in your
              mail client.
            </p>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                  {errors.name && (
                    <span id="error-name" className="contact__error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <span id="error-email" className="contact__error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="contact__input"
                  placeholder="Senior React.js Opportunity / Project Inquiry"
                  value={formState.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? 'error-subject' : undefined
                  }
                />
                {errors.subject && (
                  <span id="error-subject" className="contact__error" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__textarea"
                  placeholder="Tell me about the role, team, or project..."
                  value={formState.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'error-message' : undefined
                  }
                />
                {errors.message && (
                  <span id="error-message" className="contact__error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="contact__submit-btn">
                <Send size={16} />
                <span>Compose Email</span>
              </button>

              {submitted && (
                <p className="contact__status" role="status">
                  ✓ Opening your email client with your message details!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
