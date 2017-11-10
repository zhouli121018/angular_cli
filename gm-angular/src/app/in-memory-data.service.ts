import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' }
    ];
    const results= [
        "Item 1",
        "Item 2",
      ]
    return {results,heroes};
  }
}