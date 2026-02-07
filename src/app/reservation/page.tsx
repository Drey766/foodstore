'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ReservationPage.module.css';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DayAvailability {
  date: string;
  dayName: string;
  status: 'available' | 'limited' | 'booked';
  slots: TimeSlot[];
}

const ReservationPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: 'casual',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Generate next 14 days with availability
  const generateAvailability = (): DayAvailability[] => {
    const days: DayAvailability[] = [];
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dateStr = date.toISOString().split('T')[0];
      const dayName = dayNames[date.getDay()];
      
      // Simulate availability (weekends are more limited)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isFullyBooked = i === 3 || i === 7; // Some days fully booked
      
      let status: 'available' | 'limited' | 'booked';
      if (isFullyBooked) {
        status = 'booked';
      } else if (isWeekend) {
        status = 'limited';
      } else {
        status = 'available';
      }
      
      // Generate time slots
      const timeSlots: TimeSlot[] = [
        { time: '11:00 AM', available: !isFullyBooked && Math.random() > 0.3 },
        { time: '12:00 PM', available: !isFullyBooked && Math.random() > 0.2 },
        { time: '1:00 PM', available: !isFullyBooked && Math.random() > 0.3 },
        { time: '2:00 PM', available: !isFullyBooked && Math.random() > 0.4 },
        { time: '6:00 PM', available: !isFullyBooked && Math.random() > 0.1 },
        { time: '7:00 PM', available: !isFullyBooked && Math.random() > 0.1 },
        { time: '8:00 PM', available: !isFullyBooked && Math.random() > 0.2 },
        { time: '9:00 PM', available: !isFullyBooked && Math.random() > 0.3 },
      ];
      
      days.push({
        date: dateStr,
        dayName,
        status,
        slots: timeSlots,
      });
    }
    
    return days;
  };

  const [availability] = useState<DayAvailability[]>(generateAvailability());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleDateSelect = (date: string): void => {
    setFormData((prev) => ({ ...prev, date, time: '' }));
    setStep(2);
  };

  const handleTimeSelect = (time: string): void => {
    setFormData((prev) => ({ ...prev, time }));
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setSubmitted(true);
  };

  const selectedDay = availability.find(day => day.date === formData.date);
  const availableSlots = selectedDay?.slots.filter(slot => slot.available) || [];

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Header />
      <main className={styles.reservationPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>Reserve Your Table</h1>
            <p className={styles.heroSubtitle}>
              Book a table and enjoy an unforgettable dining experience at Bites
            </p>
          </div>
        </section>

        <div className="container">
          {submitted ? (
            /* Success State */
            <section className={styles.successSection}>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Reservation Confirmed!</h2>
                <p className={styles.successText}>
                  Thank you, {formData.name}! Your table for {formData.guests} {formData.guests === 1 ? 'person' : 'people'} has been reserved.
                </p>
                
                <div className={styles.confirmationDetails}>
                  <div className={styles.confirmationItem}>
                    <span className={styles.confirmationIcon}>📅</span>
                    <div>
                      <p className={styles.confirmationLabel}>Date & Time</p>
                      <p className={styles.confirmationValue}>
                        {formatDate(formData.date)} at {formData.time}
                      </p>
                    </div>
                  </div>
                  <div className={styles.confirmationItem}>
                    <span className={styles.confirmationIcon}>👥</span>
                    <div>
                      <p className={styles.confirmationLabel}>Party Size</p>
                      <p className={styles.confirmationValue}>{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</p>
                    </div>
                  </div>
                  <div className={styles.confirmationItem}>
                    <span className={styles.confirmationIcon}>🎉</span>
                    <div>
                      <p className={styles.confirmationLabel}>Occasion</p>
                      <p className={styles.confirmationValue}>{formData.occasion}</p>
                    </div>
                  </div>
                </div>

                <p className={styles.confirmationNote}>
                  A confirmation email has been sent to <strong>{formData.email}</strong>
                </p>

                <div className={styles.successButtons}>
                  <Link href="/menu" className={styles.successBtn}>
                    View Menu
                  </Link>
                  <button 
                    className={styles.successBtnSecondary}
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        guests: 2,
                        occasion: 'casual',
                        specialRequests: '',
                      });
                    }}
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <div className={styles.mainContent}>
              {/* Progress Steps */}
              <div className={styles.progressSteps}>
                <div className={`${styles.progressStep} ${step >= 1 ? styles.active : ''} ${step > 1 ? styles.completed : ''}`}>
                  <div className={styles.stepNumber}>1</div>
                  <span className={styles.stepLabel}>Select Date</span>
                </div>
                <div className={styles.progressLine}></div>
                <div className={`${styles.progressStep} ${step >= 2 ? styles.active : ''} ${step > 2 ? styles.completed : ''}`}>
                  <div className={styles.stepNumber}>2</div>
                  <span className={styles.stepLabel}>Select Time</span>
                </div>
                <div className={styles.progressLine}></div>
                <div className={`${styles.progressStep} ${step >= 3 ? styles.active : ''}`}>
                  <div className={styles.stepNumber}>3</div>
                  <span className={styles.stepLabel}>Your Details</span>
                </div>
              </div>

              <div className={styles.contentGrid}>
                {/* Left: Booking Form */}
                <div className={styles.bookingSection}>
                  {step === 1 && (
                    <div className={styles.stepContent}>
                      <h2 className={styles.stepTitle}>Choose Your Date</h2>
                      <p className={styles.stepSubtitle}>Select an available date for your reservation</p>
                      
                      <div className={styles.calendarGrid}>
                        {availability.map((day, index) => (
                          <button
                            key={day.date}
                            className={`${styles.dateCard} ${
                              day.status === 'booked' ? styles.booked : ''
                            } ${
                              day.status === 'limited' ? styles.limited : ''
                            } ${
                              formData.date === day.date ? styles.selected : ''
                            }`}
                            onClick={() => day.status !== 'booked' && handleDateSelect(day.date)}
                            disabled={day.status === 'booked'}
                            style={{animationDelay: `${index * 0.05}s`}}
                          >
                            <div className={styles.dateDay}>{day.dayName}</div>
                            <div className={styles.dateNumber}>
                              {new Date(day.date).getDate()}
                            </div>
                            <div className={styles.dateMonth}>
                              {new Date(day.date).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                            {day.status === 'booked' ? (
                              <span className={styles.statusBadge}>Fully Booked</span>
                            ) : day.status === 'limited' ? (
                              <span className={`${styles.statusBadge} ${styles.limited}`}>Limited</span>
                            ) : (
                              <span className={`${styles.statusBadge} ${styles.available}`}>Available</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className={styles.stepContent}>
                      <button className={styles.backBtn} onClick={() => setStep(1)}>
                        ← Back to Date Selection
                      </button>
                      
                      <h2 className={styles.stepTitle}>Select Time</h2>
                      <p className={styles.stepSubtitle}>
                        Available times for {formatDate(formData.date)}
                      </p>

                      <div className={styles.timeSlotsGrid}>
                        {selectedDay?.slots.map((slot, index) => (
                          <button
                            key={slot.time}
                            className={`${styles.timeSlot} ${
                              !slot.available ? styles.unavailable : ''
                            } ${
                              formData.time === slot.time ? styles.selected : ''
                            }`}
                            onClick={() => slot.available && handleTimeSelect(slot.time)}
                            disabled={!slot.available}
                            style={{animationDelay: `${index * 0.05}s`}}
                          >
                            <span className={styles.timeIcon}>🕐</span>
                            <span className={styles.timeLabel}>{slot.time}</span>
                            {!slot.available && (
                              <span className={styles.unavailableLabel}>Booked</span>
                            )}
                          </button>
                        ))}
                      </div>

                      {availableSlots.length === 0 && (
                        <div className={styles.noSlots}>
                          <p>No available time slots for this date. Please select another date.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className={styles.stepContent}>
                      <button className={styles.backBtn} onClick={() => setStep(2)}>
                        ← Back to Time Selection
                      </button>
                      
                      <h2 className={styles.stepTitle}>Your Details</h2>
                      <p className={styles.stepSubtitle}>
                        Complete your reservation for {formatDate(formData.date)} at {formData.time}
                      </p>

                      <form className={styles.detailsForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                          <label htmlFor="name" className={styles.label}>Full Name *</label>
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
                            <label htmlFor="email" className={styles.label}>Email *</label>
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
                            <label htmlFor="phone" className={styles.label}>Phone *</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={styles.input}
                              placeholder="+254 712 345 678"
                              required
                            />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label htmlFor="guests" className={styles.label}>Number of Guests *</label>
                            <select
                              id="guests"
                              name="guests"
                              value={formData.guests}
                              onChange={handleChange}
                              className={styles.select}
                              required
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                              ))}
                              <option value="10+">10+ Guests (Contact us)</option>
                            </select>
                          </div>

                          <div className={styles.formGroup}>
                            <label htmlFor="occasion" className={styles.label}>Occasion</label>
                            <select
                              id="occasion"
                              name="occasion"
                              value={formData.occasion}
                              onChange={handleChange}
                              className={styles.select}
                            >
                              <option value="casual">Casual Dining</option>
                              <option value="birthday">Birthday</option>
                              <option value="anniversary">Anniversary</option>
                              <option value="business">Business Meeting</option>
                              <option value="date">Date Night</option>
                              <option value="celebration">Celebration</option>
                            </select>
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="specialRequests" className={styles.label}>
                            Special Requests (Optional)
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="Dietary restrictions, seating preferences, allergies, etc."
                            rows={4}
                          />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                          Confirm Reservation
                        </button>
                      </form>
                    </div>
                  )}
                </div>

                {/* Right: Restaurant Info */}
                <div className={styles.infoSection}>
                  <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>
                      <span className={styles.infoIcon}>📍</span>
                      Location
                    </h3>
                    <div className={styles.mapPlaceholder}>
                      <div className={styles.mapIcon}>🗺️</div>
                      <p className={styles.address}>123 Gourmet Street</p>
                      <p className={styles.address}>Downtown District</p>
                      <p className={styles.address}>Nairobi, Kenya</p>
                      <button className={styles.directionsBtn}>Get Directions</button>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>
                      <span className={styles.infoIcon}>ℹ️</span>
                      Reservation Policy
                    </h3>
                    <ul className={styles.policyList}>
                      <li>✓ Reservations confirmed via email</li>
                      <li>✓ Please arrive within 15 minutes of your reservation time</li>
                      <li>✓ Free cancellation up to 2 hours before</li>
                      <li>✓ For parties of 10+, please call us directly</li>
                      <li>✓ Smart casual dress code</li>
                    </ul>
                  </div>

                  <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>
                      <span className={styles.infoIcon}>📞</span>
                      Need Help?
                    </h3>
                    <p className={styles.helpText}>
                      Have questions or special requests? Our team is here to help!
                    </p>
                    <div className={styles.contactButtons}>
                      <a href="tel:+254712345678" className={styles.contactBtn}>
                        📞 Call Us
                      </a>
                      <Link href="/contact" className={styles.contactBtn}>
                        ✉️ Contact Form
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReservationPage;
