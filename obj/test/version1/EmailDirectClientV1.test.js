"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let assert = require('chai').assert;
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services_email_node_1 = require("pip-services-email-node");
const EmailDirectClientV1_1 = require("../../src/version1/EmailDirectClientV1");
const EmailClientFixtureV1_1 = require("./EmailClientFixtureV1");
suite('EmailDirectClientV1', () => {
    let client;
    let fixture;
    suiteSetup((done) => {
        let logger = new pip_services3_components_node_1.ConsoleLogger();
        let controller = new pip_services_email_node_1.EmailController();
        controller.configure(pip_services3_commons_node_2.ConfigParams.fromTuples("options.disabled", true));
        let references = pip_services3_commons_node_3.References.fromTuples(new pip_services3_commons_node_1.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_node_1.Descriptor('pip-services-email', 'controller', 'default', 'default', '1.0'), controller);
        controller.setReferences(references);
        client = new EmailDirectClientV1_1.EmailDirectClientV1();
        client.setReferences(references);
        fixture = new EmailClientFixtureV1_1.EmailClientFixtureV1(client);
        client.open(null, done);
    });
    suiteTeardown((done) => {
        client.close(null, done);
    });
    test('Send Email to Address', (done) => {
        fixture.testSendEmailToAddress(done);
    });
    test('Send Email to Recipients', (done) => {
        fixture.testSendEmailToRecipients(done);
    });
});
//# sourceMappingURL=EmailDirectClientV1.test.js.map