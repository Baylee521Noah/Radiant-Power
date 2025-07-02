import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectItem } from '@/components/ui/select';

export default function RadiantPowerLandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-yellow-400 to-green-500 p-8 text-white text-center">
        <h1 className="text-4xl font-bold">Radiant Power</h1>
        <p className="text-lg mt-2">Power Your Future with Clean Solar Energy</p>
        <Button className="mt-4 text-lg">See if You Qualify</Button>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <Card>
          <CardContent className="p-6">
            {submitted ? (
              <div className="text-center text-green-600 text-xl">
                Thank you! We’ll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required />
                </div>
                <div>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" required />
                </div>
                <div>
                  <Label htmlFor="homeowner">Are you a homeowner?</Label>
                  <Select id="homeowner" required>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bill">Average Monthly Electric Bill</Label>
                  <Select id="bill" required>
                    <SelectItem value="under-50">Under $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100-200">$100 - $200</SelectItem>
                    <SelectItem value="over-200">Over $200</SelectItem>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent">I agree to be contacted by Radiant Power</Label>
                </div>
                <Button type="submit" className="w-full text-lg">
                  Submit
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4">
        &copy; {new Date().getFullYear()} Radiant Power. All rights reserved.
      </footer>
    </div>
  );
}
