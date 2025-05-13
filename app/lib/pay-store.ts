import fs from 'fs/promises';
import path from 'path';
import type { Pay } from './definitions';
import { generateRandomPaysForYear } from './placeholder-data';

// This file is created for central place to store the mock data with save and get pays operation support

const DATA_FILE = path.join(process.cwd(), 'data/pays.json');

export async function getPays(): Promise<Pay[]> {
  try {
    const json = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) throw new Error('Invalid pays.json');
    return parsed;
  } catch (err) {
    const mockPays = generateRandomPaysForYear();
    await savePays(mockPays);
    return mockPays;
  }
}

export async function savePays(pays: Pay[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(pays, null, 2));
}