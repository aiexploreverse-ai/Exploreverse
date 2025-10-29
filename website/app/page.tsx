import { Sparkles, Rocket, Globe, Zap, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 px-4 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Explore the Future</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to <br />
              <span className="bg-white bg-clip-text text-transparent">Exploreverse</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
              Discover innovative solutions that transform ideas into reality.
              Where technology meets imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to bring your vision to life, backed by cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-neutral-600 leading-relaxed">
                Built for speed and performance. Experience blazing-fast load times and seamless interactions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Global Scale</h3>
              <p className="text-neutral-600 leading-relaxed">
                Reach audiences worldwide with our robust infrastructure designed for global deployment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Smart Solutions</h3>
              <p className="text-neutral-600 leading-relaxed">
                Intelligent automation and AI-powered tools to streamline your workflow and boost productivity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-neutral-600 leading-relaxed">
                Stunning, modern interfaces that users love. Every pixel crafted with care and attention.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-neutral-600 leading-relaxed">
                Seamlessly integrate with your existing tools and workflows in minutes, not hours.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-neutral-600 leading-relaxed">
                Round-the-clock support from our dedicated team. We're here whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-text">Exploreverse</span>
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  We're on a mission to empower businesses and individuals with innovative
                  technology solutions that push boundaries and create new possibilities.
                </p>
                <p>
                  Founded by a team of passionate technologists and designers, Exploreverse
                  combines cutting-edge technology with intuitive design to deliver
                  experiences that inspire and delight.
                </p>
                <p>
                  Our approach is simple: listen to our users, iterate rapidly, and never
                  settle for "good enough." We believe in building products that people love,
                  backed by technology that scales.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-4xl font-bold gradient-text">100+</div>
                  <div className="text-neutral-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text">50K+</div>
                  <div className="text-neutral-600">Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text">99.9%</div>
                  <div className="text-neutral-600">Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-hard"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-secondary rounded-2xl shadow-hard"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-neutral-900 text-white py-16 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Exploreverse</h3>
              <p className="text-neutral-400 mb-6 max-w-md">
                Transforming ideas into reality through innovative technology and exceptional design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
              <div className="space-y-3 text-neutral-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@exploreverse.com" className="hover:text-white transition-colors">
                    hello@exploreverse.com
                  </a>
                </div>
                <button className="btn-primary w-full mt-4">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
            <p>&copy; 2025 Exploreverse. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
