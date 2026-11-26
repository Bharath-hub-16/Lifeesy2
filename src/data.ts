export type Month = { month: number; vehicle: string[]; iphone: string; tv43: number; tv75: number; major?: string; other?: string[] }

export const months: Month[] = [
  { month: 1, vehicle: ['Royal Enfield Hunter 350', 'Honda Shine 125', 'Honda SP 125', 'Honda Shine 100', 'Hero Splendor Plus'], iphone: '2 × iPhone 16', tv43: 5, tv75: 0 },
  { month: 2, vehicle: ['Honda Activa 125', 'TVS Jupiter 125', 'Suzuki Access 125', 'Yamaha RayZR 125 Fi Hybrid', 'Hero Destini 125'], iphone: '1 × iPhone 16 Pro', tv43: 5, tv75: 0 },
  { month: 3, vehicle: ['Bajaj Platina 110', 'TVS Raider 125', 'Hero Passion Plus', 'Ola S1 X (EV)', 'Ampere Magnus Neo (EV)'], iphone: '1 × iPhone 15 Pro', tv43: 5, tv75: 0, other: ['3 bikes + 2 electric scooters'] },
  { month: 4, vehicle: ['Hero Glamour', 'Honda Unicorn', 'Bajaj Pulsar 125', 'TVS Radeon', 'Yamaha FZ-S Fi'], iphone: '1 × iPhone 15 Pro', tv43: 5, tv75: 0 },
  { month: 5, vehicle: ['Honda Shine 100CC', 'TVS Jupiter 110CC', 'Hero Splendor Plus', 'Bajaj Platina 100CC', 'Honda Activa 110CC'], iphone: '1 × iPhone 15', tv43: 5, tv75: 0 },
  { month: 6, vehicle: [], iphone: '1 × iPhone 16 Pro', tv43: 4, tv75: 1, major: 'Swift' },
  { month: 7, vehicle: ['Honda SP 125CC', 'TVS Ronin 125CC', 'Bajaj Platina 110CC', 'Bajaj Pulsar 150CC', 'TVS Zest 110'], iphone: '1 × iPhone 16 Pro', tv43: 5, tv75: 0 },
  { month: 8, vehicle: ['TVS Raider 125CC', 'Hero Splendor Plus', 'Bajaj Pulsar NS125CC', 'Honda Activa 125CC', 'Hero Pleasure'], iphone: '1 × iPhone 16 Pro', tv43: 5, tv75: 0 },
  { month: 9, vehicle: ['Hero Destini 110CC', 'Suzuki Access 125CC', 'Hero Passion Plus', 'Honda Shine 125CC', 'Bajaj Platina 110CC'], iphone: '1 × iPhone 15', tv43: 3, tv75: 2 },
  { month: 10, vehicle: ['Ola S1 Z (EV)', 'Suzuki Avenis 125CC', 'Yamaha Fascino 125CC', 'Hero HF 100CC', 'Bajaj Platina 110CC'], iphone: '1 × iPhone 16', tv43: 5, tv75: 0 },
  { month: 11, vehicle: ['Honda SP 125CC', 'TVS Radeon', 'Hero Splendor Plus', 'Honda Dio 125CC', 'TVS Jupiter 125CC'], iphone: '1 × iPhone 16', tv43: 3, tv75: 2 },
  { month: 12, vehicle: [], iphone: '1 × iPhone', tv43: 3, tv75: 2, major: 'Venue' },
  { month: 13, vehicle: ['Royal Enfield Hunter 350CC', 'Suzuki Gixxer 155CC', 'Suzuki Access 125CC', 'Hero Destini 125CC', 'Hero Passion Plus'], iphone: '1 × iPhone 17e', tv43: 3, tv75: 2 },
  { month: 14, vehicle: ['Yamaha FZ-X', 'Bajaj Pulsar 150CC', 'Ola S1 Z (EV)', 'Honda Activa 110CC', 'TVS Radeon'], iphone: '1 × iPhone 17e', tv43: 3, tv75: 2 },
  { month: 15, vehicle: ['TVS Apache RTR 160 4V', 'Honda Unicorn 160CC', 'Hero VIDA VX2 Go', 'Hero Destini 110CC', 'Honda Shine 100CC'], iphone: '1 × iPhone 17e', tv43: 3, tv75: 2 },
  { month: 16, vehicle: ['Bajaj Pulsar NS160CC', 'Yamaha Fascino 125CC', 'Hero Destini 110CC', 'Hero Splendor Plus', 'TVS Sport'], iphone: '1 × iPhone 17e', tv43: 3, tv75: 2 },
  { month: 17, vehicle: ['Suzuki Gixxer 155CC', 'Yamaha FZ-S FI V4', 'Suzuki Access 125CC', 'TVS Jupiter 125CC', 'Bajaj Pulsar 125CC'], iphone: '1 × iPhone 17e', tv43: 3, tv75: 2 },
  { month: 18, vehicle: [], iphone: '1 × iPhone', tv43: 3, tv75: 2, major: 'TATA “Aries”' },
  { month: 19, vehicle: ['TVS Apache RTR 160 4V', 'Bajaj Pulsar 220', 'Ola S1 X (EV)', 'Yamaha Fascino 125CC', 'Hero Splendor Plus'], iphone: '1 × iPhone', tv43: 3, tv75: 2 },
  { month: 20, vehicle: ['Hero Splendor Plus', 'Honda Activa 110CC', 'TVS NTORQ 125CC', 'Ola S1 Z (EV)', 'Hero Xtreme 160R'], iphone: '1 × iPhone', tv43: 3, tv75: 2 },
  { month: 21, vehicle: ['Yamaha FZ-X', 'Bajaj Pulsar 150CC', 'Honda QC1 (EV)', 'Suzuki Access 125CC', 'TVS Jupiter 125CC'], iphone: '1 × iPhone', tv43: 3, tv75: 2 },
  { month: 22, vehicle: ['Royal Enfield Hunter 350CC', 'Bajaj Pulsar N250CC', 'Ola S1 Z (EV)', 'Hero Destini 125CC', 'Hero Splendor Plus'], iphone: '1 × iPhone', tv43: 3, tv75: 2 },
  { month: 23, vehicle: [], iphone: '1 × iPhone', tv43: 3, tv75: 2, major: 'Swift Dzire' },
  { month: 24, vehicle: ['Honda CB350'], iphone: '1 × iPhone', tv43: 0, tv75: 3, major: '1 BHK House (₹50 lakh worth)', other: ['1 bike: Honda CB350'] },
]

export const products = [
  'Himalayan Life Seabuckthorn Juice', 'Magnetic Care Kit (Gents)', 'Magnetic Care Kit (Ladies)',
  'Nithya Sanjeevini Juice', 'Daily Fresh Sanitary Napkin', 'Marine Collagen Powder', 'Foot Patch',
  'Spirulina & Shatavari Capsules', 'Red Ganoderma Coffee', 'Glamour Kit', 'Daily Care Kit',
  'Anti Diabetic Juice', 'Miracle Noni, Healthy Heart & Digestive Juice', 'Gas Safety',
]

export const productImages = [
  '/products/product-05.jpg', '/products/product-13.jpg', '/products/product-06.jpg',
  '/products/product-10.jpg', '/products/product-04.jpg', '/products/product-01.jpg',
  '/products/product-03.jpg', '/products/product-11.jpg', '/products/product-02.jpg',
  '/products/glamour-kit.jpeg', '/products/daily-care-kit.jpeg', '/products/product-12.jpg',
  '/products/product-08.jpg', '/products/product-07.jpg',
]

export const terms = [
  'Membership amount – ₹2,000/- per ID, with one product choice only.',
  'You will receive a participation ID, and it will continue until the last month.',
  'The scheme will be conducted on the 15th of every month, from 10 AM to 12 PM, live in the presence of the members present.',
  'The result of every month will be live-streamed on the Lifessy YouTube Channel, or the result will be sent to every member individually through WhatsApp.',
  'You can buy any number of IDs by paying ₹2,000/- per ID and selecting one product.',
  'After completing 24 months, along with the product, you will get a 43-inch Smart QLED TV.',
  'Remaining members who do not win any prize should select consolation prizes, which will be given to them within 60 days of the final month.',
  'Consolation prizes will be given.',
  'The monthly installment amount is not considered an investment; consider it as the prize amount for the 43-inch QLED TV.',
  "The organisers' decision will be the final decision.",
]
