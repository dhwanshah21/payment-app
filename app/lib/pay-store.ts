import fs from 'fs/promises';
import path from 'path';
 // your existing generator
import type { Pay } from './definitions'; // adjust if needed
import { generateRandomPaysForYear } from './placeholder-data';

const DATA_FILE = path.join(process.cwd(), 'data/pays.json');

export async function getPays(): Promise<Pay[]> {
  try {
    const json = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) throw new Error('Invalid pays.json');
    return parsed;
  } catch (err) {
    // If file doesn't exist or fails to parse, generate mock and save
    const mockPays = generateRandomPaysForYear();
    await savePays(mockPays);
    return mockPays;
  }
}

export async function savePays(pays: Pay[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(pays, null, 2));
}