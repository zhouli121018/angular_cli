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
     ];
     const stats = [
      {name:'zholi',id:1,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:2,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:3,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:4,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:5,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:6,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:7,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:8,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:9,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:10,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:11,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2},
      {name:'zholi',id:12,tel:13798225061,weixin:'zhou',invitecode:23442,uuid:135818,accountnumber:2,money:55,powerid:2}
     ]
    return {results,heroes,stats};
  }
}