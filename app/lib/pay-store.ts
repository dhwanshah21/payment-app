import type { Pay } from './definitions';
import { paysData } from './pays-data';

// TODO: Generate a years worth of random pays using the contacts above

// In-memory store for pays data
let inMemoryPays: Pay[] | null = null;

export async function getPays(): Promise<Pay[]> {
  // If in-memory store is not initialized, generate mock data
  if (!inMemoryPays) {
    inMemoryPays = paysData;
  }
  return inMemoryPays;
}

export async function savePays(pays: Pay[]) {
  // Update the in-memory store
  inMemoryPays = pays;
}