
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-yellow-400 to-green-500 p-8 text-white text-center">
        <h1 className="text-4xl font-bold">Radiant Power</h1>
        <p className="text-lg mt-2">Power Your Future with Clean Solar Energy</p>
        <button className="mt-4 text-lg bg-white text-black px-4 py-2 rounded">See if You Qualify</button>
      </header>
      <main className="max-w-3xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          {submitted ? (
            <div className="text-center text-green-600 text-xl">
              Thank you! We’ll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block">Full Name</label>
                <input id="name" required className="w-full border p-2 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block">Email</label>
                <input id="email" type="email" required className="w-full border p-2 rounded" />
              </div>
              <div>
                <label htmlFor="phone" className="block">Phone Number</label>
                <input id="phone" required className="w-full border p-2 rounded" />
              </div>
              <div>
                <label htmlFor="zip" className="block">Zip Code</label>
                <input id="zip" required className="w-full border p-2 rounded" />
              </div>
              <div>
                <label htmlFor="homeowner" className="block">Are you a homeowner?</label>
                <select id="homeowner" required className="w-full border p-2 rounded">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label htmlFor="bill" className="block">Average Monthly Electric Bill</label>
                <select id="bill" required className="w-full border p-2 rounded">
                  <option value="">Select</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="over-200">Over $200</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent">I agree to be contacted by Radiant Power</label>
              </div>
              <button type="submit" className="w-full text-lg bg-green-500 text-white py-2 rounded">
                Submit
              </button>
            </form>
          )}
        </div>
      </main>
      <footer className="text-center text-sm text-gray-500 p-4">
        &copy; {new Date().getFullYear()} Radiant Power. All rights reserved.
      </footer>
    </div>
  );
}
