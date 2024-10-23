import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"

const PrivacyPolicy = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
        </DialogHeader>

        <div className="mt-4 text-left">
          <h2 className="text-xl font-semibold mb-4">Lift Labs LLC Privacy Policy</h2>
          <p className="mb-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
            <p className="text-gray-600">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Mobile phone number and communication preferences</li>
              <li>Business information</li>
              <li>Service usage data</li>
              <li>SMS message content and metadata</li>
              <li>Communication history and preferences</li>
            </ul>
            
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">SMS Data Collection</h4>
              <p className="text-gray-600">
                When you opt in to receive SMS messages from us, we collect and store:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Your phone number and consent records</li>
                <li>Date and time of messages sent and received</li>
                <li>Message content and response history</li>
                <li>Delivery status information</li>
                <li>Opt-in and opt-out history</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
            <p className="text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Provide and improve our services</li>
              <li>Send you important service updates and notifications</li>
              <li>Process and manage your bookings and appointments</li>
              <li>Analyze and enhance our business operations</li>
              <li>Comply with legal obligations</li>
            </ul>

            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">SMS Communications</h4>
              <p className="text-gray-600">
                We use SMS communications for the following purposes:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Appointment confirmations and reminders</li>
                <li>Service updates and notifications</li>
                <li>Customer support communications</li>
                <li>Marketing messages (with explicit consent)</li>
                <li>Account security verification</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">3. SMS Consent and Opt-Out</h3>
            <p className="text-gray-600">
              Your consent to receive SMS messages is voluntary and can be revoked at any time. You can:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Opt out by replying STOP to any message</li>
              <li>Contact us directly to manage your messaging preferences</li>
              <li>Update your communication preferences in your account settings</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Message and data rates may apply. Message frequency varies. Carrier is not liable for delayed or undelivered messages.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">4. Information Sharing</h3>
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>SMS service providers and telecommunications carriers</li>
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">5. Security</h3>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information, including SMS data. Our security measures include encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">6. Your Rights</h3>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of SMS and other communications</li>
              <li>Review your SMS consent and messaging history</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
            <p className="text-gray-600">
              For questions about this privacy policy, our SMS practices, or our privacy practices in general, please contact us at:
              <br />
              Email: hello@liftlabstx.com
              <br />
              Address: 8706 Gelvani Grv, Boerne, Texas 78015
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;