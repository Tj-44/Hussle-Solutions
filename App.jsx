import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Hussle Solutions Logo" width={48} height={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">Hussle Solutions</h1>
          </div>
          <Button className="mt-4 md:mt-0 px-6 py-2 text-white bg-blue-700 hover:bg-blue-800">
            Book Demo
          </Button>
        </header>

        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Smart Systems Built Around the Tools You Already Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed specifically for veterinary clinics using Cornerstone, Avimark, and other trusted systems — we modernize your workflow without replacing it.
          </p>
          <div className="mt-10">
            <Image src="/clinic-automation.png" alt="Veterinary Clinic Automation" width={800} height={400} className="rounded-xl shadow-lg mx-auto" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-lg border border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">What We Do</h3>
              <ul className="text-gray-700 space-y-3 list-disc ml-6">
                <li>Digital intake forms synced to HubSpot CRM</li>
                <li>Automated email & SMS reminders</li>
                <li>Wave-based invoice setup & client tracking</li>
                <li>Custom dashboards & pipeline stages</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">How It Works</h3>
              <ol className="list-decimal text-gray-700 space-y-3 ml-6">
                <li>Book your free 30-minute system audit</li>
                <li>We assess your tools & processes</li>
                <li>You receive a custom automation package</li>
                <li>We build, test, and train your team</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="text-center py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Modernize Your Clinic — Without Changing Software</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
            Hussle Solutions helps you stay focused on care, not admin. Let's bring your clinic online smoothly and professionally.
          </p>
          <Button className="text-white bg-blue-700 hover:bg-blue-800 px-8 py-3 text-lg rounded-xl shadow">
            Book Your Free Demo
          </Button>
        </section>

        <footer className="mt-20 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hussle Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
