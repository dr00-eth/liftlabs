import React from 'react';
import { X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "../components/ui/dialog"

const PrivacyPolicy = ({ isOpen, onClose, showCloseButton = true }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
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
              <li>Business information</li>
              <li>Communication preferences</li>
              <li>Service usage data</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
            <p className="text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Analyze and enhance our business operations</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">4. Security</h3>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
            <p className="text-gray-600">
              For questions about this privacy policy or our practices, please contact us at:
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