import {Injectable} from '@angular/core';
import {Agent} from './agent';
import {Vip} from './vip';
import {AGENTS} from './mock-agent';
import {VIPS} from './mock-vip';

@Injectable()
export class AgentService {
	getAgents(): Agent[]  {
		return AGENTS;
	}
	getVips():Vip[]{
		return VIPS;
	}
}