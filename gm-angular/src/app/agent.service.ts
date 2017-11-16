import {Injectable} from '@angular/core';
import {Agent} from './agent';
import {Vip} from './vip';
import {AGENTS} from './mock-agent';
import {VIPS} from './mock-vip';
import {Detail} from './detail';
import {DETAILS} from './mock-detail';
import {Paylog} from './paylog';
import {PAYLOGS} from './mock-paylog';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AgentService {
	private heroesUrl = 'api/heroes';
	private statsUrl = 'api/stats';
	private touzhudetailsUrl = 'api/touzhuDetails';
	private exchangeUrl = 'api/exchanges';
  private noticeUrl='api/notices';
	constructor(private http: Http) { }
	getHeroes(){
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data);
    }
    getTouzhuDetails(){
    	return this.http.get(this.touzhudetailsUrl)
               .toPromise()
               .then(response => response.json().data);
    }
    getExchanges(){
    	return this.http.get(this.exchangeUrl)
               .toPromise()
               .then(response => response.json().data);
    }
    getStats(){
    	return this.http.get(this.statsUrl)
               .toPromise()
               .then(response => response.json().data);
    }
    getNotices(){
      return this.http.get(this.noticeUrl)
               .toPromise()
               .then(response => response.json().data);
    }
	getAgents(): Agent[]  {
		return AGENTS;
	}
	getVips():Vip[]{
		return VIPS;
	}
	getDetails():Detail[]{
		return DETAILS;
	}
	getPaylogs():Paylog[]{
		return PAYLOGS;
	}

}