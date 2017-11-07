import {Injectable} from '@angular/core';
import {Agent} from './agent';
import {Vip} from './vip';
import {AGENTS} from './mock-agent';
import {VIPS} from './mock-vip';
import {Detail} from './detail';
import {DETAILS} from './mock-detail';

@Injectable()
export class AgentService {
	getAgents(): Agent[]  {
		return AGENTS;
	}
	getVips():Vip[]{
		return VIPS;
	}
	getDetails():Detail[]{
		return DETAILS;
	}
}