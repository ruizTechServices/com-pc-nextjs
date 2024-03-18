import Head from 'next/head';
import React from 'react';

// Placeholder for the Navbar component
const Navbar = () => (<div className="bg-gray-800 text-white p-4">Navbar Placeholder</div>);

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Compulogic - Your Local Computer Shop</title>
        <meta name="description" content="Compulogic provides computer repairs, upgrades, and more." />
      </Head>
      <Navbar />
      <Header />
      <ServicesHero />
      <CallToAction />
      <EmailCaptureForm />
    </>
  );
};

const Header = () => (
  <div className="bg-blue-600 text-white text-center p-12">
    <h1 className="text-4xl font-bold mb-2">Welcome to Compulogic</h1>
    <p>Your one-stop shop for all computer needs.</p>
  </div>
);

const ServicesHero = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
    <ul className="list-disc space-y-2 pl-8">
      <li>Computer Repairs</li>
      <li>Computer Upgrades</li>
      <li>Malware Mitigation</li>
      <li>In-home & Onsite Servicing</li>
      <li>Camera Repairs and Installations</li>
    </ul>
  </div>
);

const CallToAction = () => (
  <div className="bg-green-500 text-white text-center p-8 mt-8">
    <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
    <p>Contact us now to book a service!</p>
  </div>
);

const EmailCaptureForm = () => (
  <div className="flex flex-col items-center justify-center p-8">
    <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
    <form className="flex flex-col sm:flex-row gap-2">
      <input type="email" placeholder="Enter your email" className="p-2 border-2 border-gray-200 rounded" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Subscribe</button>
    </form>
  </div>
);

export default LandingPage;
