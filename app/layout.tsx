import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Ukrainian Village HVAC',
  description:
    'We service, install and mantain forced air heating and cooling including heat pumps, radiant heating including old and newer style radiators and heated floor, air quality such humidifiers, dehumidifiers, UV, plasma cleaners, ventilation'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Title */}
        <title>{metadata.title}</title>
        <meta name="author" content="Andre Birkus" />
        {/* Charset */}
        <meta charSet="utf-8" />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Specialized HVAC services for installing water heaters, house heaters, air conditioners, and more. Serving Ukrainian Village, Chicago, IL, 60622."
        />

        {/* Keywords (less significant nowadays, but doesn't hurt) */}
        <meta
          name="keywords"
          content="HVAC, Heating, Cooling, Ventilation, Air conditioning, Furnace, Boiler, Heat pump, Thermostat, Ductwork, Air handler, HVAC contractor, HVAC services, HVAC repair, HVAC installation, HVAC maintenance, HVAC replacement, HVAC technician, HVAC company, Air quality, Energy-efficient, HVAC products, HVAC solutions, Furnace repair, Furnace installation, Boiler repair, Boiler installation, AC repair, AC installation, AC maintenance, Heat pump repair, Heat pump installation, Duct cleaning, Duct sealing, Thermostat installation, Emergency HVAC, Radiant heating, Central air, Mini-split system, Zoned heating and cooling, Commercial HVAC, Residential HVAC, HVAC Ukrainian Village, Chicago, IL, 60622, Ukrainian Village, Chicago HVAC services, HVAC contractor in Ukrainian Village, Chicago, Air conditioning Ukrainian Village, Chicago, Furnace repair Ukrainian Village, Chicago, Boiler service Ukrainian Village, Chicago, HVAC West Town, Chicago, IL, West Town, Chicago HVAC services, HVAC contractor in West Town, Chicago, Air conditioning West Town, Chicago, Furnace repair West Town, Chicago, Boiler service West Town, Chicago, Best HVAC companies in Ukrainian Village, Chicago, How to improve indoor air quality, Energy-efficient HVAC solutions, HVAC maintenance tips, Cost of new AC unit in Ukrainian Village, Chicago, Signs my furnace needs repair, Benefits of duct cleaning, HVAC troubleshooting guide, When to replace HVAC system, Yearly HVAC maintenance checklist, UV light purification, Humidifiers, Dehumidifiers, Indoor air quality products, Air filters, HVAC warranties, HVAC financing, Green HVAC solutions, Energy Star HVAC, Programmable thermostats, Smart thermostats"
        />

        {/* Open Graph (For social media sharing) */}
        <meta property="og:title" content={metadata.title} />
        <meta
          property="og:description"
          content="Specialized HVAC services for installing water heaters, house heaters, air conditioners, and more. Serving Ukrainian Village, Chicago, IL, 60622."
        />

        <meta property="og:url" content="www.ukvhvac.com" />
      </Head>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
