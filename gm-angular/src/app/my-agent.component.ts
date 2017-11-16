import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';

@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	templateUrl:'./my-agent.component.html'
})
export class MyAgentComponent implements OnInit{
	title = "我的代理";
	agents:Agent[];
	constructor(private agentService:AgentService){}
    getAgents():void{
    	this.agents=this.agentService.getAgents();
    };
    
	ngOnInit(): void {
	    this.bindpage(1);
      this.agentService.getHeroes().then(data=>console.log(data));
	}
  pageIndex = 1;
  pageCount = 1;
  totalNum = 0;
  private bindpage(event:number):void {
    var agentsInfo = this.agentService.getAgents();
    this.agents = agentsInfo.slice((event-1)*10,event*10);
    this.pageIndex = event;
    this.totalNum = agentsInfo.length;
    if(agentsInfo.length%10==0){
      this.pageCount = Math.floor(agentsInfo.length/10);
    }else{
      this.pageCount = Math.floor(agentsInfo.length/10)+1;
    }
  }
  datas={
    link_title:"本周新增代理数量",
    x_data:[21231,1212,21231,3213,2222,6666,7777],
    y_data:[212,666,555,456,333,555,888],
    y_name:"代理数量",
    s_name:'新增代理数量'};
	bar(event:any){
    console.log(event);
  }

  agentdata = {
    title: {
      text: this.datas.link_title
    },
    color: ['#3398DB'],
    //气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        //显示缩放按钮
        dataZoom: {
          show: true
        },
        //显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        //显示是否还原
        restore: {
          show: true
        },
        //是否显示图片
        saveAsImage: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: this.datas.x_data,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: this.datas.y_name,
      type: 'value'
    }],
    series: [{
      name: this.datas.s_name,
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data:this.datas.y_data
    }]
  }
  showAddForm=false;
  showEditForm=false;
  showChargeForm=false;
  selectedAgent={
    aname:'zhoulid',
    uuid:'123456',
    invitecode:23442,
    tel:13798225061,
    weixin:'wein',
    qq:512167072,
    rebate:0.5,
    rootManager:0,
    powerId:4
  }
  chargeInfo={uuid:"",mount:""};
  addAgent={};
  showAdd():void{
    this.showAddForm=true;
  }
  showCharge():void{
    this.showChargeForm=true;
  }
  showEdit(p):void{
    this.showEditForm=true;
    this.selectedAgent=p;
  }
  add():void{
    console.dir(this.addAgent);
    this.showAddForm=false;
    this.addAgent={};
  }
  charge():void{
    if(this.chargeInfo.uuid==""||this.chargeInfo.mount==""){
      alert('游戏ID或充值钻石数量不能为空！');
      return;
    }
    console.dir(this.chargeInfo);
    this.showChargeForm=false;
    this.chargeInfo={uuid:"",mount:""};
  }
  edit():void{
    console.dir(this.selectedAgent);
    this.showEditForm=false;
    this.selectedAgent={};
  }
  hideAdd():void{
    this.showAddForm=false;
  }
  hideEdit():void{
    this.showEditForm=false;
  }
  hideCharge():void{
    this.showChargeForm=false;
  }
}
