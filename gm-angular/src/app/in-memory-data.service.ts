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
     ];
     const touzhuDetails = [
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-01',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-02',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-03',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-04',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-05',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-06',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-07',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-08',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-09',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-10',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-11',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
      {uuid:135818,nickname:'jaly',serialnum:1879358,betmount:550,createtime:'2017-01-12',bettype:1,betresult:1,lotresult:'1,3,5',facevalue:100,cardcount:2,invitecode:1001,powerid:5,invitecode1:23442,powerid1:1},
     ]
    return {results,heroes,stats,touzhuDetails};
  }
}