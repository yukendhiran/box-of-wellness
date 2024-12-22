import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-around gap-8">
          {/* Company Logo and Mini About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-sm text-background mb-4">
              Eat clean, feel great—health made easy.
            </p>
            <div>
              {" "}
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:boxofwellness.diet@gmail.com"
                  className="hover:text-gray-300"
                >
                  boxofwellness.diet@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+91 6374759268" className="hover:text-gray-300">
                  +91 6374759268
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />

                <Link
                  href="https://www.google.com/maps/place/11,+Pillayar+Koil+St,+Potheri,+Kattankulathur,+Tamil+Nadu+603203/@12.831277,80.045219,20z/data=!4m6!3m5!1s0x3a52f76c610f42d7:0x55d3ade9602794d7!8m2!3d12.8199406!4d80.037902!16s%2Fg%2F11t894z4bh?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    06, Pillayar Kovil Street, Thailavaram, Chengalpattu
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/*

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Social Handles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556594750626&mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/box_of_wellness?igsh=MWp2b24yOGNxYmtyNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/box-of-wellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} BOX OF WELLNESS. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
