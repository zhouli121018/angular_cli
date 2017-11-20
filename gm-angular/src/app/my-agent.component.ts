import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';
import * as $ from 'jquery';


@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	templateUrl:'./my-agent.component.html'
})
export class MyAgentComponent implements OnInit{
	title = "我的代理";
	agents:Agent[];
  lists=[
    {na:"周莉",age:18,childAgent:[{na:"子",age:2,childAgent:[{na:"zhis1",age:19,childAgent:[]},{na:"zhis2",age:19,childAgent:[]}]}]},
    {na:"zhis2",age:19,childAgent:[]},
    {na:"zhis3",age:19,childAgent:[]},
    {na:"zhis4",age:19,childAgent:[]},
    {na:"zhis5",age:19,childAgent:[]}
  ];
	constructor(private agentService:AgentService){}
    getAgents():void{
    	this.agents=this.agentService.getAgents();
    };
  tr="";
  inittr(arr):void{
    var html="";
    var n=1;
    var m=1;
    var l=1;
    var o=1;
    for(var i=0;i<arr.length;i++){
      html+=`
      <tr class="${'treegrid-'+n}">
        <td>${arr[i].name}</td>
        <td>${arr[i].id}</td>
        <td>${arr[i].tel}</td>
        <td>${arr[i].weixin}</td>
        <td>${arr[i].qq}</td>
        <td>${arr[i].invitecode}</td>
        <td>${arr[i].uuid}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].money}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].id}</td>
        <td>${arr[i].weixin}</td>
        <td>${arr[i].tel}</td>
        <td><button type="button" class="btn btn-warning btn-sm" title='${JSON.stringify(arr[i])}'>修改</button></td>
      </tr>`;
      m=n;
      n++;
      if(arr[i].childAgent.length>0){
        for(var j=0;j<arr[i].childAgent.length;j++){
          var p=arr[i].childAgent[j];
          html+=`
            <tr class="${'treegrid-'+n} ${'treegrid-parent-'+m}" >
              <td>${p.name}</td>
              <td>${p.id}</td>
              <td>${p.tel}</td>
              <td>${p.weixin}</td>
              <td>${p.qq}</td>
              <td>${p.invitecode}</td>
              <td>${p.uuid}</td>
              <td>${p.name}</td>
              <td>${p.money}</td>
              <td>${p.name}</td>
              <td>${p.id}</td>
              <td>${p.weixin}</td>
              <td>${p.tel}</td>
              <td><button type="button" class="btn btn-warning btn-sm" title='${JSON.stringify(p)}'>修改</button></td>
            </tr>
          `;
          l=n;
          n++;
          if(p.childAgent.length>0){
            for(var k=0;k<p.childAgent.length;k++){
              var q=p.childAgent[k];
              html+=`
                <tr class="${'treegrid-'+n} ${'treegrid-parent-'+l}" >
                  <td>${q.name}</td>
                  <td>${q.id}</td>
                  <td>${q.tel}</td>
                  <td>${q.weixin}</td>
                  <td>${q.qq}</td>
                  <td>${q.invitecode}</td>
                  <td>${q.uuid}</td>
                  <td>${q.name}</td>
                  <td>${q.money}</td>
                  <td>${q.name}</td>
                  <td>${q.id}</td>
                  <td>${q.weixin}</td>
                  <td>${q.tel}</td>
                  <td><button type="button" class="btn btn-warning btn-sm" title='${JSON.stringify(q)}'>修改</button></td>
                </tr>
              `;
              o=n;
              n++;
              if(q.childAgent.length>0){
                for(var s=0;s<q.childAgent.length;s++){
                    var r=q.childAgent[s];
                    html+=`
                      <tr class="${'treegrid-'+n} ${'treegrid-parent-'+o}" >
                        <td>${r.name}</td>
                        <td>${r.id}</td>
                        <td>${r.tel}</td>
                        <td>${r.weixin}</td>
                        <td>${r.qq}</td>
                        <td>${r.invitecode}</td>
                        <td>${r.uuid}</td>
                        <td>${r.id}</td>
                        <td>${r.money}</td>
                        <td>${r.name}</td>
                        <td>${r.id}</td>
                        <td>${r.weixin}</td>
                        <td>${r.tel}</td>
                        <td><button type="button" class="btn btn-warning btn-sm" title='${JSON.stringify(r)}'>修改</button></td>
                      </tr>
                    `;
                }
                
              }
            }
          }
        }
      }
    }
    this.tr=html;
  }
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
    this.inittr(this.agents);
    $('#agentTable tbody').html(this.tr);
    $('.tree').treegrid();
    $('.tree').treegrid('collapseAll');
    var _this=this;
      $('#agentTable tbody button').click(function(){
        var param =JSON.parse($(this).attr('title'));
        console.log(param);
          _this.showEdit(param);
      })
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

  searchInfo={starttime:"",endtime:"",invitecode:""};
  showAddForm=false;
  showEditForm=false;
  showChargeForm=false;
  selectedAgent={};
  chargeInfo={uuid:"",mount:""};
  addAgent={};

  search():void{
    console.dir(this.searchInfo);
  }
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
