//
// arm-parser-types.ts - ARM Parser
// Type definitions, interfaces and basic data classes
// Ben Coleman, 2019
//

import { Interface } from "readline";

export interface Policy {
    basePolicy: any
    userJourneys: UserJourney
}

export interface OrchestrationStep {
    id: string
    name: string
    order: string         // Not in ARM spec, used by parser to fully qualify resources
    type: string
    preconditions?: Precondition[]
    technicalProfileId: string
}

export interface Precondition {
    type: string
    executeactionsif: string
    value: string
    action: string
}

export interface UserJourney {
    orchestrationSteps: OrchestrationStep[]
}