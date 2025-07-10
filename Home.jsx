
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 px-6 py-12 md:px-16 lg:px-32 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Hussle Solutions Logo" width="48" height="48" className="rounded-full shadow" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">Hussle Solutions</h1>
          </div>
          <Button className="mt-6 md:mt-0 px-6 py-2 text-white bg-blue-700 hover:bg-blue-800 transition-all">
            Book Demo
          </Button>
        </header>

        <section className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Seamless automation for veterinary clinics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built around your existing tools like Cornerstone and Avimark — without forcing you to switch.
          </p>
          <div className="mt-10">
            <img src="/clinic-automation.png" alt="Clinic automation" className="rounded-xl shadow-lg mx-auto w-full max-w-4xl" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="shadow-lg border border-blue-100 hover:scale-[1.02] transition-transform">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">What We Do</h3>
              <ul className="text-gray-700 space-y-3 list-disc ml-6">
                <li>Digital intake forms synced to HubSpot CRM</li>
                <li>Automated email & SMS reminders</li>
                <li>Wave-based invoicing & client tracking</li>
                <li>Custom dashboards & pipeline stages</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-blue-100 hover:scale-[1.02] transition-transform">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">How It Works</h3>
              <ol className="list-decimal text-gray-700 space-y-3 ml-6">
                <li>Book a 30-minute system audit</li>
                <li>We analyze your software & workflow</li>
                <li>You receive a custom automation package</li>
                <li>We implement & train your staff</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="text-center py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Start Smart. Stay Focused.</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
            Book your free demo today and see how Hussle Solutions can digitize your clinic in under a week.
          </p>
          <Button className="text-white bg-blue-700 hover:bg-blue-800 px-8 py-3 text-lg rounded-xl shadow">
            Book Your Free Demo
          </Button>
        </section>

        <footer className="mt-24 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hussle Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
