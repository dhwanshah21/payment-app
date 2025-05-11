import { faker } from '@faker-js/faker';
import { Pay } from './definitions';
import { formatCurrency } from './utils';

// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const user = {
  id: '410544b2-4001-4271-9855-fec4b6a6442a',
  name: 'User',
  email: 'user@nextmail.com',
  password: '123456',
}

const contacts = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/contacts/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/contacts/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/contacts/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/contacts/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/contacts/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/contacts/balazs-orban.png',
  },
];

// TODO: Generate a years worth of random pays using the contacts above
const pays: Pay[] = generateRandomPaysForYear();

function generateRandomPaysForYear(): Pay[] {
  const pays: Pay[] = [];

  const months = [...Array(12).keys()]; // 0 to 11

  for (const month of months) {
    const numPays = faker.number.int({ min: 2, max: 5 });

    for (let i = 0; i < numPays; i++) {
      const isSender = faker.datatype.boolean();
      const contact = faker.helpers.arrayElement(contacts);

      pays.push({
        id: faker.string.uuid(),
        senderId: isSender ? user.id : contact.id,
        receiverId: isSender ? contact.id : user.id,
        amount: parseFloat(faker.finance.amount()),
        status: faker.helpers.arrayElement(['pending', 'paid']),
        note: faker.helpers.arrayElement(['Restaurants', 'Grocery', 'Movie', 'Dinner', 'Park Tickets']),
        timestamp: faker.date.between({ from: `2024-${month + 1}-01`, to: `2024-${month + 1}-28` }).toISOString(),
      });
    }
  }

  return pays;
}

export function getRandomDateInMonth(month: number): string {
  const year = 2024;
  const day = faker.number.int({ min: 1, max: 28 }); // Keep within 28 to avoid invalid dates
  const date = new Date(year, month, day, faker.number.int({ min: 0, max: 23 }), faker.number.int({ min: 0, max: 59 }));
  return date.toISOString();
}

// TODO: After you generate pays, calculate the activity for the respective months
const activity = calculateActivityByMonth();

function calculateActivityByMonth(): any {
  const monthActivity: Record<string, number> = {};

  pays.forEach((pay) => {
    let dateFromTimestamp = new Date(pay.timestamp);
    const month = dateFromTimestamp.toLocaleString('en-US', {month: 'short'});
    const amount = pay.amount;

    if (!monthActivity[month]) {
      monthActivity[month] = 0;
    }

    monthActivity[month] += amount;
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months.map((month) => ({
    month,
    activity: monthActivity[month] || 0,
  })); 
}

export { user, contacts, pays, activity };

