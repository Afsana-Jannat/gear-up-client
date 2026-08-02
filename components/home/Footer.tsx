import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Gear', href: '/gear' },
  { name: 'Categories', href: '/categories' },
  { name: 'Dashboard', href: '/dashboard/customer' },
];

const categories = ['Camping', 'Cycling', 'Photography', 'Hiking', 'Football'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground">
                G
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">GearUp</h2>
                <p className="text-sm text-gray-400">Outdoor Gear Rental</p>
              </div>
            </div>

            <p className="leading-7 text-gray-300">
              Rent premium sports and outdoor equipment from trusted providers.
              Explore, book and enjoy your next adventure without buying
              expensive gear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>

            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Popular Categories</h3>

            <div className="space-y-3">
              {categories.map((item) => (
                <Link
                  key={item}
                  href="/gear"
                  className="block text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Contact Us</h3>

            <div className="space-y-5">
              <ContactItem
                icon={<MapPin size={18} />}
                text="Dhaka, Bangladesh"
              />

              <ContactItem
                icon={<Mail size={18} />}
                text="support@gearup.com"
              />

              <ContactItem icon={<Phone size={18} />} text="+880 1234-567890" />
            </div>

            <Link
              href="/gear"
              className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Explore Gear
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 GearUp. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary
        hover:bg-primary
        hover:text-primary-foreground
      "
    >
      {children}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-primary">{icon}</div>

      <span className="text-sm leading-6 text-gray-400">{text}</span>
    </div>
  );
}
