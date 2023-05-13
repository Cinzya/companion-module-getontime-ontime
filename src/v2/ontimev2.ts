import {
	CompanionActionDefinitions,
	CompanionFeedbackDefinitions,
	CompanionPresetDefinitions,
	CompanionVariableDefinition,
} from '@companion-module/base'
import { OnTimeInstance, OntimeClient } from '..'

import { actions } from './actions'
import { feedbacks } from './feedback'
import { presets } from './presets'
import { variables } from './variables'
import { connect, disconnectSocket } from './connection'
import { stateobj } from './state'

export class OntimeV2 implements OntimeClient {
	instance: OnTimeInstance

	constructor(instance: OnTimeInstance) {
		this.instance = instance
	}

	async connect(): Promise<void> {
		this.instance.states = stateobj

		connect(this.instance)
	}

	disconnectSocket(): void {
		disconnectSocket()
	}

	getVariables(): CompanionVariableDefinition[] {
		return variables()
	}

	getActions(): CompanionActionDefinitions {
		return actions(this.instance)
	}

	getFeedbacks(): CompanionFeedbackDefinitions {
		return feedbacks(this.instance)
	}

	getPresets(): CompanionPresetDefinitions {
		return presets()
	}
}
