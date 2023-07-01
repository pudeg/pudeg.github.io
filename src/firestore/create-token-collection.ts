
import { firestore } from './firestore';
import fs from 'node:fs';

const { writeBatch, doc, getDocs, collection } = firestore;

export const saveJsonToFile = (name: string, data: any) => {
  const filename = `./${ name }.json`;

  console.log('running savejson', JSON.stringify(data, null, 2));


  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
};


export const createTokenCollection = async (min = 1, max = 778) => {
  const startTime = performance.now();

  let batchCount = 2;
  let batchCursor = 1;
  let cursor = min;

  while (batchCursor <= batchCount && cursor <= max) {

    const batch = writeBatch();

    while (cursor < (batchCursor * 500) && cursor < max) {
      const token = doc('tokens', cursor.toString());
      batch.set(token, { id: cursor, owner: null });

      ++cursor;
    }

    ++batchCursor;

    await batch.commit();
  }

  saveJsonToFile('token-batch-results.json', JSON.stringify({
    collection: 'tokens',
    count: (await getDocs(collection('tokens'))).size,
    elapsedTime: performance.now() - startTime
  }, null, 2));

  return {
    collection: 'tokens',
    count: (await getDocs(collection('tokens'))).size,
    elapsedTime: performance.now() - startTime
  };
};