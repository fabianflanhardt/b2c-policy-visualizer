//
// b2c-policy-parser.ts - B2C Policy Parser
// Class to parse B2C custom policy files and return a set of elements for rendering with Cytoscape
// Fabian Flanhardt, 2021 - 2020
//

// import * as xml2js from 'xml2js';
import * as path from 'path';
import * as fs from 'fs';

// import TelemetryReporter from 'vscode-extension-telemetry';
import { TextEditor } from 'vscode';


import * as parser from 'fast-xml-parser';
import { Policy, OrchestrationStep, Precondition } from './b2c-policy-parser-types';

var options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    stopNodes: ["parse-me-as-string"]
};

export default class PolicyParser {
    private policy: Policy;
    // private policyContent: string;

    constructor(
        policyContent: string
    ) {
        this.policy = this.parseXML(policyContent);
    }

    private parseXML(policyContent: string): any {

        const policy = parser.parse(policyContent, options);

        // Otherwise we're good! We have something parsed
        return policy;
    }


}