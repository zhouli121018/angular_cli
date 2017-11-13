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
     const exchanges = [
     {uuid:135818,nickname:'jaly',money:101,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:102,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:103,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:104,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:105,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:106,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:107,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:108,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:109,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:110,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:111,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:112,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:113,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:114,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:115,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:116,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:117,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:118,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:119,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:120,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:121,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:122,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:123,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:124,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     {uuid:135818,nickname:'jaly',money:125,createtime:'2017-11-11',randomnum:'mLsZs0SBx9z02kwYt56cptRGb7TdTo89',status:1},
     ];

     const notices=[
      {id:1,content:"最正宗嘅清远本地麻将，2人、3人也可开局，再也不用担心三缺一了！有任何问题请联系官方客服：waleqipai3，获取更多活动资讯请关注公众号：waleqp28",managerid:25,noticetype:1},
      {id:2,content:"挖乐28隆重上线！斗牛 28两不误！",managerid:39,noticetype:2},
      {id:3,content:"牛大帅改版即便完成，改版后将包括三公，赢三张，麻将等多款产品，玩法丰富，体验流畅，敬请期待！",managerid:22,noticetype:3}
     ]
    return {results,heroes,stats,touzhuDetails,exchanges,notices};
  }
}