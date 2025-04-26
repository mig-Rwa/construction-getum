import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { UserGroupIcon, TrophyIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Years of Experience', value: '25+' },
  { name: 'Projects Completed', value: '500+' },
  { name: 'Team Members', value: '50+' },
  { name: 'Client Satisfaction', value: '98%' },
];

const values = [
  {
    name: 'Quality Excellence',
    description: 'We maintain the highest standards in construction, using premium materials and innovative techniques.',
    icon: TrophyIcon,
  },
  {
    name: 'Client-Focused Approach',
    description: 'Your vision and satisfaction are our top priorities. We work closely with you at every step.',
    icon: UserGroupIcon,
  },
  {
    name: 'Professional Expertise',
    description: 'Our team brings decades of combined experience and continuous professional development.',
    icon: BuildingOfficeIcon,
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/john-smith.jpg',
    bio: '25+ years of construction industry experience',
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Director',
    image: '/images/team/sarah-johnson.jpg',
    bio: 'Expert in sustainable construction practices',
  },
  {
    name: 'Mike Williams',
    role: 'Lead Architect',
    image: '/images/team/mike-williams.jpg',
    bio: 'Award-winning architectural designer',
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Getum Construction</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Building excellence since 1998. We&apos;ve grown from a small local contractor to one of the region&apos;s most trusted construction companies.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Hundreds of Clients
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Tomorrow&apos;s World Today
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to deliver exceptional construction services while maintaining the highest standards of quality, safety, and customer satisfaction.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
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
      <div className="bg-white py-24 sm:py-32">
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
                    <div className="h-full w-full rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      {person.name[0]}
                    </div>
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