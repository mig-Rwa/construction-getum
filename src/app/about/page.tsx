import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { UserGroupIcon, TrophyIcon, BuildingOfficeIcon, TruckIcon, WrenchScrewdriverIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const divisions = [
  {
    name: 'GETUM Supply Ltd – Quarry Extraction and Aggregate Production',
    description: 'We extract and crush top-grade materials to meet various construction needs. Our products include:',
    icon: TruckIcon,
    products: [
      'Stone base for road construction',
      'Aggregates (sizes 8/16 mm and 16/25 mm) for building construction',
      'Materials for bridge construction',
      'Concrete sand for bricks and blocks'
    ]
  },
  {
    name: 'GETUM Construction – Building and Infrastructure Projects',
    description: 'We build strong foundations for communities and businesses by offering:',
    icon: BuildingOfficeIcon,
    products: [
      'Residential and commercial building construction',
      'Infrastructure development (roads, bridges, drainage systems)'
    ]
  }
];

const whyChooseUs = [
  {
    name: 'High-quality Products',
    description: 'High-quality and certified products that meet industry standards for strength and durability.',
    icon: TrophyIcon,
  },
  {
    name: 'Expert Team',
    description: 'Experienced and professional team combining technical expertise with commitment to quality.',
    icon: UserGroupIcon,
  },
  {
    name: 'Reliable Service',
    description: 'On-time delivery and reliable service you can count on.',
    icon: ClockIcon,
  },
  {
    name: 'Sustainable Growth',
    description: 'Commitment to sustainability and community growth through our operations.',
    icon: WrenchScrewdriverIcon,
  }
];

const team = [
  {
    name: 'Michel MBABAZI',
    role: 'CEO & Founder',
    image: '/images/michel-mbabazi.jpg',
    bio: '25+ years of construction industry experience, leading innovative construction solutions',
  },
  {
    name: 'Evelyne K. UMUHOZA',
    role: 'General Manager',
    image: '/images/evelyne-umuhoza.jpg',
    bio: 'Expert in operational excellence and sustainable construction practices',
  },
  {
    name: 'Miguel T. MBABAZI',
    role: 'Chief Technology Officer',
    image: '/images/miguel-mbabazi.jpg',
    bio: 'Pioneering digital transformation in construction technology',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At GETUM Supplies and Construction, we are dedicated to delivering high-quality materials and exceptional construction services. With expertise in quarry extraction, aggregate production, and infrastructure development, we support Rwanda&apos;s growth through reliable and sustainable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Vision</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Rwanda&apos;s Future
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To be a trusted leader in supplying top-quality construction materials and delivering sustainable infrastructure projects across Rwanda and beyond.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To provide reliable, high-performance materials and construction services</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To contribute to Rwanda&apos;s development through quality, innovation, and integrity</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mt-1 flex items-center justify-center rounded-full bg-blue-600 text-white">•</span>
                <span className="ml-4 text-lg text-gray-600">To create job opportunities and empower local communities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divisions Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Divisions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Construction Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {divisions.map((division) => (
                <div key={division.name} className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <division.icon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
                    {division.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{division.description}</p>
                    <ul className="mt-4 space-y-2">
                      {division.products.map((product) => (
                        <li key={product} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose GETUM?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Every Aspect
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {whyChooseUs.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experienced professionals who make our success possible.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col gap-y-3 border border-gray-200 rounded-2xl p-6">
                  <div className="relative h-48 w-48 mx-auto">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-center">{person.name}</h3>
                  <p className="text-base leading-7 text-blue-600 text-center">{person.role}</p>
                  <p className="text-sm leading-6 text-gray-600 text-center">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
} 