'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Reviews.module.css';

interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  title: string;
  review: string;
  helpful: number;
  images?: string[];
  verified: boolean;
}

interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: '👩',
    date: 'January 15, 2024',
    rating: 5,
    title: 'Best dining experience ever!',
    review: 'Absolutely phenomenal! The food was exquisite, service was impeccable, and the ambiance was perfect. We ordered the grilled salmon and the beef steak - both cooked to perfection. The chef really knows how to balance flavors. Will definitely be coming back!',
    helpful: 24,
    images: ['🍽️', '🥩'],
    verified: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: '👨',
    date: 'January 12, 2024',
    rating: 5,
    title: 'Outstanding quality and service',
    review: 'I\'ve been to many restaurants, but Bites stands out. The attention to detail is remarkable. From the moment we walked in, we were treated like VIPs. The pasta carbonara was creamy and rich, exactly how it should be. Highly recommend!',
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: '👩',
    date: 'January 10, 2024',
    rating: 4,
    title: 'Great food, slightly pricey',
    review: 'The food quality is top-notch and you can taste the freshness in every bite. I particularly loved the Japanese dishes - the sushi was incredibly fresh. My only concern is the pricing, but I guess you get what you pay for. Worth it for special occasions!',
    helpful: 15,
    images: ['🍱', '🍣'],
    verified: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    avatar: '👨',
    date: 'January 8, 2024',
    rating: 5,
    title: 'Perfect for date night',
    review: 'Took my wife here for our anniversary and it was magical. The romantic ambiance, soft lighting, and excellent wine selection made it unforgettable. The lamb chops were tender and flavorful. Staff was attentive without being intrusive.',
    helpful: 21,
    verified: true,
  },
  {
    id: 5,
    name: 'Priya Sharma',
    avatar: '👩',
    date: 'January 5, 2024',
    rating: 5,
    title: 'Authentic flavors, modern twist',
    review: 'As someone who loves authentic cuisine, I was impressed by how they maintain traditional flavors while adding modern touches. The curry was perfectly spiced, and the naan was fresh from the tandoor. Vegetarian options are excellent too!',
    helpful: 19,
    images: ['🍛'],
    verified: true,
  },
  {
    id: 6,
    name: 'James Wilson',
    avatar: '👨',
    date: 'January 3, 2024',
    rating: 4,
    title: 'Solid choice for lunch',
    review: 'Good spot for business lunches. The service is quick during lunch hours, and the menu has plenty of lighter options. The salads are fresh and portions are generous. Would have given 5 stars if the parking was easier.',
    helpful: 12,
    verified: false,
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    avatar: '👩',
    date: 'December 30, 2023',
    rating: 5,
    title: 'Incredible desserts!',
    review: 'The dessert menu is to die for! We tried the chocolate cake and tiramisu - both were heavenly. The presentation was beautiful and the flavors were perfectly balanced. Coffee was excellent too. A dessert lover\'s paradise!',
    helpful: 28,
    images: ['🍰', '☕'],
    verified: true,
  },
  {
    id: 8,
    name: 'Robert Kim',
    avatar: '👨',
    date: 'December 28, 2023',
    rating: 5,
    title: 'Family-friendly excellence',
    review: 'Brought my whole family including kids, and everyone was happy! They have a good kids menu, and the staff was very accommodating. The portions are large enough to share. Great value for the quality you get.',
    helpful: 16,
    verified: true,
  },
  {
    id: 9,
    name: 'Maria Garcia',
    avatar: '👩',
    date: 'December 25, 2023',
    rating: 5,
    title: 'Holiday dinner perfection',
    review: 'Celebrated Christmas here and it was absolutely perfect. The special holiday menu was creative and delicious. The turkey was moist, sides were flavorful, and the whole experience felt festive and special.',
    helpful: 22,
    verified: true,
  },
  {
    id: 10,
    name: 'Kevin Brown',
    avatar: '👨',
    date: 'December 22, 2023',
    rating: 4,
    title: 'Great atmosphere',
    review: 'Love the vibe here! Modern yet cozy. Music volume is perfect - you can actually have a conversation. Food is consistently good. The only reason for 4 stars is that sometimes it gets quite busy and you might have to wait.',
    helpful: 14,
    verified: false,
  },
  {
    id: 11,
    name: 'Amanda White',
    avatar: '👩',
    date: 'December 20, 2023',
    rating: 5,
    title: 'Best brunch in town',
    review: 'Their weekend brunch is legendary! The pancakes are fluffy, eggs Benedict is perfect, and the fresh juice selection is amazing. Get there early though - it fills up fast!',
    helpful: 25,
    images: ['🥞', '🧃'],
    verified: true,
  },
  {
    id: 12,
    name: 'Daniel Lee',
    avatar: '👨',
    date: 'December 18, 2023',
    rating: 5,
    title: 'Exceptional wine pairing',
    review: 'The sommelier really knows his stuff. He recommended the perfect wines to pair with our meals. The wine list is extensive and fairly priced. This is fine dining done right.',
    helpful: 17,
    verified: true,
  },
];

const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, count: 324, percentage: 78 },
  { stars: 4, count: 67, percentage: 16 },
  { stars: 3, count: 18, percentage: 4 },
  { stars: 2, count: 6, percentage: 1 },
  { stars: 1, count: 2, percentage: 1 },
];

const ReviewsPage: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('recent');

  // Calculate overall stats
  const totalReviews = reviews.length;
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
  const verifiedCount = reviews.filter(r => r.verified).length;

  // Filter and sort reviews
  let filteredReviews = filterRating 
    ? reviews.filter(r => r.rating === filterRating)
    : reviews;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful - a.helpful;
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      default: // recent
        return b.id - a.id;
    }
  });

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={styles.star}>
        {i < rating ? '⭐' : '☆'}
      </span>
    ));
  };

  return (
    <>
      <Header />
      <main className={styles.reviewsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>Customer Reviews</h1>
            <p className={styles.heroSubtitle}>
              See what our customers are saying about their experience at Bites
            </p>
          </div>
        </section>

        <div className="container">
          {/* Overall Rating Section */}
          <section className={styles.overallSection}>
            <div className={styles.overallCard}>
              <div className={styles.overallLeft}>
                <div className={styles.ratingNumber}>{averageRating}</div>
                <div className={styles.starsLarge}>
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <p className={styles.totalReviews}>
                  Based on {totalReviews} reviews
                </p>
                <p className={styles.verifiedBadge}>
                  ✓ {verifiedCount} Verified Reviews
                </p>
              </div>

              <div className={styles.overallRight}>
                <h3 className={styles.breakdownTitle}>Rating Breakdown</h3>
                <div className={styles.breakdownList}>
                  {ratingBreakdown.map((item) => (
                    <button
                      key={item.stars}
                      className={`${styles.breakdownItem} ${filterRating === item.stars ? styles.active : ''}`}
                      onClick={() => setFilterRating(filterRating === item.stars ? null : item.stars)}
                    >
                      <span className={styles.breakdownStars}>
                        {item.stars} ⭐
                      </span>
                      <div className={styles.breakdownBar}>
                        <div 
                          className={styles.breakdownFill}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className={styles.breakdownCount}>
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Filter and Sort Bar */}
          <div className={styles.toolBar}>
            <div className={styles.filterInfo}>
              {filterRating ? (
                <>
                  Showing {sortedReviews.length} {filterRating}-star {sortedReviews.length === 1 ? 'review' : 'reviews'}
                  <button 
                    className={styles.clearFilter}
                    onClick={() => setFilterRating(null)}
                  >
                    Clear filter
                  </button>
                </>
              ) : (
                `Showing all ${totalReviews} reviews`
              )}
            </div>

            <div className={styles.sortBox}>
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="recent">Most Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="rating-high">Highest Rating</option>
                <option value="rating-low">Lowest Rating</option>
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className={styles.reviewsList}>
            {sortedReviews.map((review, index) => (
              <div 
                key={review.id} 
                className={styles.reviewCard}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.avatar}>{review.avatar}</div>
                    <div>
                      <div className={styles.reviewerName}>
                        {review.name}
                        {review.verified && (
                          <span className={styles.verifiedCheck} title="Verified Customer">
                            ✓
                          </span>
                        )}
                      </div>
                      <div className={styles.reviewDate}>{review.date}</div>
                    </div>
                  </div>
                  <div className={styles.reviewRating}>
                    {renderStars(review.rating)}
                  </div>
                </div>

                <h3 className={styles.reviewTitle}>{review.title}</h3>
                <p className={styles.reviewText}>{review.review}</p>

                {review.images && (
                  <div className={styles.reviewImages}>
                    {review.images.map((img, i) => (
                      <div key={i} className={styles.reviewImage}>
                        <span className={styles.imageEmoji}>{img}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.reviewFooter}>
                  <button className={styles.helpfulBtn}>
                    👍 Helpful ({review.helpful})
                  </button>
                  <button className={styles.shareBtn}>
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Write Review CTA */}
          <section className={styles.writeReviewSection}>
            <div className={styles.writeReviewCard}>
              <h2 className={styles.writeReviewTitle}>Share Your Experience</h2>
              <p className={styles.writeReviewText}>
                Have you dined with us? We'd love to hear about your experience!
              </p>
              <button className={styles.writeReviewBtn}>
                Write a Review
              </button>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Experience Bites?</h2>
            <p className={styles.ctaText}>
              Join thousands of satisfied customers and discover why we're rated so highly
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/menu" className={styles.ctaBtn}>
                View Menu
              </Link>
              <Link href="/contact" className={styles.ctaBtnSecondary}>
                Make a Reservation
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReviewsPage;
