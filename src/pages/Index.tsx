
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, CreditCard, Globe, Smartphone, Users, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">PayPal</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Personal</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Developer</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">Log In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">
              Trusted by 400+ million users worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              The easier, safer way to
              <span className="text-blue-600 block">pay and get paid</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join millions of people who trust PayPal to handle their money. 
              Send, receive, and manage your finances with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PayPal Balance</span>
                  <Shield className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">$2,847.32</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Recent payment</span>
                    <span className="font-semibold text-green-600">+$150.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Coffee Shop</span>
                    <span className="font-semibold text-gray-900">-$4.25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose PayPal?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits that have made PayPal the world's leading digital payments platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bank-level security</h3>
              <p className="text-gray-600">
                Your financial information is encrypted and monitored 24/7 to help protect against fraud.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow hover-scale">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multiple payment options</h3>
              <p className="text-gray-600">
                Pay with your bank account, debit card, credit card, or PayPal balance - whatever works for you.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow hover-scale">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global reach</h3>
              <p className="text-gray-600">
                Send money to friends and family or pay for goods and services in over 200 markets worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-600 mb-6">For Personal Use</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send money to friends and family
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Send money instantly with just an email or phone number</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Split bills and expenses with groups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Request money easily and securely</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-xl">
                <Smartphone className="h-64 w-64 text-white mx-auto opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                <Users className="h-64 w-64 text-white mx-auto opacity-30" />
              </div>
            </div>
            <div>
              <Badge className="bg-white/20 text-white mb-6">For Business</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Grow your business with PayPal
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Accept payments online and in-person</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Get paid faster with invoicing tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Protect your business with seller protection</span>
                </div>
              </div>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Selling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Trusted by millions worldwide
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">400M+</div>
              <div className="text-gray-600">Active users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Markets worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-600">Currencies supported</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Customer support</div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-3 text-gray-600">4.8/5 rating from users</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of people who trust PayPal for their online payments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold">PayPal</span>
              </div>
              <p className="text-gray-400">
                The safer, easier way to pay and get paid.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">News</a>
                <a href="#" className="block hover:text-white transition-colors">Investor Relations</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block hover:text-white transition-colors">Security</a>
                <a href="#" className="block hover:text-white transition-colors">Community</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block hover:text-white transition-colors">User Agreement</a>
                <a href="#" className="block hover:text-white transition-colors">Fees</a>
                <a href="#" className="block hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PayPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
