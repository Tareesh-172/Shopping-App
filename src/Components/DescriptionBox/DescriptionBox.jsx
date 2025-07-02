import React, { useState } from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigation">
        <div
          className={`descriptionbox-nav-box ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === "reviews" ? "active fade" : "fade"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-description">
        {activeTab === "description" ? (
          <>
            <p>
              Discover the latest fashion trends at unbeatable prices. Quality products,
              trusted by thousands of happy customers. Explore the best deals on fashion, electronics,
              and more. Free Shipping on all orders above ₹499. Easy 7-Day Return Policy - No Questions Asked.
              100% Secure Payments with all major cards & UPI. New Arrivals Added Daily - Don’t Miss Out!
              Need Help? Our support team is available 24/7. Rated #1 by thousands of happy customers.
              Start shopping today and experience premium service. Track your orders live with real-time updates.
              GST billing available for all purchases.
            </p>
            <p>
              Explore the best deals on fashion, electronics, and more.
              Free Shipping on all orders above ₹499. Easy 7-Day Return Policy - No Questions Asked.
              100% Secure Payments with all major cards & UPI. New Arrivals Added Daily - Don’t Miss Out!
              Need Help? Our support team is available 24/7. Rated #1 by thousands of happy customers.
              Start shopping today and experience premium service. Track your orders live with real-time updates.
              GST billing available for all purchases.
            </p>
          </>
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};
