import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { BuildingOfficeIcon, HomeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Residential Construction',
    description: 'Custom homes, renovations, and additions designed to meet your family\'s needs and lifestyle.',
    icon: HomeIcon,
  },
  {
    name: 'Commercial Projects',
    description: 'Office buildings, retail spaces, and industrial facilities built to commercial standards.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Renovation & Remodeling',
    description: 'Transform your existing space with our expert renovation and remodeling services.',
    icon: WrenchScrewdriverIcon,
  },
];

const projects = [
  {
    name: 'Modern Family Home',
    description: 'A contemporary 4-bedroom family home with sustainable features',
    category: 'Residential',
    image: '/images/modern-family home.jpeg',
  },
  {
    name: 'Office Complex',
    description: 'A state-of-the-art office building with modern amenities',
    category: 'Commercial',
    image: '/images/office-complex.jpeg',
  },
  {
    name: 'Historic Renovation',
    description: 'Restoration of a century-old building while maintaining its character',
    category: 'Renovation',
    image: '/images/historic-renovations.jpeg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Building Dreams into Reality
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getum Construction brings your vision to life with expert craftsmanship, quality materials, and unparalleled service. From residential to commercial projects, we deliver excellence in every build.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </a>
              <a href="/projects" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Work <span aria-hidden="true">→</span>
          </a>
        </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <Image
                src="/images/hero-bg.jpg"
                alt="Construction site showcase"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your construction project
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of construction services to meet all your building needs, from initial design to final completion.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <a href="/services" className="text-sm font-semibold leading-6 text-blue-600">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Work</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a look at some of our recent projects that showcase our expertise and commitment to quality.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col items-start">
                <div className="relative w-full">
          <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2024" className="text-gray-500">
                      {project.category}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="/projects">
                        <span className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View All Projects
        </a>
          </div>
        </div>
    </div>

      <Footer />
    </main>
  );
}
