'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: '📍',
    title: 'Visit Us',
    details: ['123 Gourmet Street', 'Downtown District', 'Nairobi, Kenya'],
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: ['+254 712 345 678', '+254 734 567 890', 'Mon-Sun: 10AM - 10PM'],
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: ['info@bites-restaurant.com', 'reservations@bites-restaurant.com'],
  },
];

const operatingHours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Public Holidays', hours: '10:00 AM - 9:00 PM' },
];

const socialLinks: SocialLink[] = [
  { platform: 'Facebook', icon: '📘', url: '#' },
  { platform: 'Instagram', icon: '📷', url: '#' },
  { platform: 'Twitter', icon: '🐦', url: '#' },
  { platform: 'TikTok', icon: '🎵', url: '#' },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              We'd love to hear from you! Reach out for reservations, inquiries, or feedback
            </p>
          </div>
        </section>

        <div className="container">
          {/* Contact Info Cards */}
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={styles.infoCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <div className={styles.infoDetails}>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Content: Form and Details */}
          <section className={styles.mainSection}>
            <div className={styles.mainGrid}>
              {/* Contact Form */}
              <div className={styles.formSection}>
                <h2 className={styles.sectionTitle}>Send Us a Message</h2>
                <p className={styles.sectionSubtitle}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {submitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="+254 712 345 678"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="event">Private Event</option>
                        <option value="catering">Catering Request</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Tell us what you need..."
                        rows={6}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div className={styles.detailsSection}>
                {/* Operating Hours */}
                <div className={styles.detailCard}>
                  <h3 className={styles.detailTitle}>
                    <span className={styles.detailIcon}>🕒</span>
                    Operating Hours
                  </h3>
                  <div className={styles.hoursList}>
                    {operatingHours.map((item, index) => (
                      <div key={index} className={styles.hoursItem}>
                        <span className={styles.day}>{item.day}</span>
                        <span className={styles.hours}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className={styles.detailCard}>
                  <h3 className={styles.detailTitle}>
                    <span className={styles.detailIcon}>🗺️</span>
                    Find Us
                  </h3>
                  <div className={styles.mapPlaceholder}>
                    <div className={styles.mapIcon}>📍</div>
                    <p className={styles.mapText}>123 Gourmet Street</p>
                    <p className={styles.mapText}>Downtown District, Nairobi</p>
                    <button className={styles.directionsBtn}>
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Social Media */}
                <div className={styles.detailCard}>
                  <h3 className={styles.detailTitle}>
                    <span className={styles.detailIcon}>🌐</span>
                    Follow Us
                  </h3>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.socialIcon}>{social.icon}</span>
                        <span>{social.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do I need a reservation?</h3>
                <p className={styles.faqAnswer}>
                  While walk-ins are welcome, we highly recommend making a reservation, especially for dinner and weekends, to ensure we have a table ready for you.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do you accommodate dietary restrictions?</h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We offer vegetarian, vegan, gluten-free, and halal options. Please inform us of any allergies or dietary requirements when ordering.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do you offer delivery?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We deliver within a 10km radius. You can order through our website or popular delivery apps. Delivery typically takes 30-45 minutes.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Can you host private events?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We have a private dining area that can accommodate up to 50 guests. Contact us for event packages and custom menus.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>What payment methods do you accept?</h3>
                <p className={styles.faqAnswer}>
                  We accept cash, all major credit cards, mobile money (M-Pesa), and digital wallets. Payment is required upon delivery or at the restaurant.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Is parking available?</h3>
                <p className={styles.faqAnswer}>
                  Yes, we have complimentary valet parking and a secure parking lot with 30+ spaces available for our guests.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Dine With Us?</h2>
              <p className={styles.ctaText}>
                Experience exceptional cuisine and hospitality. Make a reservation today!
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/menu" className={styles.ctaBtn}>
                  View Menu
                </Link>
                <a href="tel:+254712345678" className={styles.ctaBtnSecondary}>
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
