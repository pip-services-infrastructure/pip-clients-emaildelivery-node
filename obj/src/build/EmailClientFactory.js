"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const EmailNullClientV1_1 = require("../version1/EmailNullClientV1");
const EmailDirectClientV1_1 = require("../version1/EmailDirectClientV1");
const EmailHttpClientV1_1 = require("../version1/EmailHttpClientV1");
const EmailSenecaClientV1_1 = require("../version1/EmailSenecaClientV1");
class EmailClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(EmailClientFactory.NullClientV1Descriptor, EmailNullClientV1_1.EmailNullClientV1);
        this.registerAsType(EmailClientFactory.DirectClientV1Descriptor, EmailDirectClientV1_1.EmailDirectClientV1);
        this.registerAsType(EmailClientFactory.HttpClientV1Descriptor, EmailHttpClientV1_1.EmailHttpClientV1);
        this.registerAsType(EmailClientFactory.SenecaClientV1Descriptor, EmailSenecaClientV1_1.EmailSenecaClientV1);
    }
}
EmailClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-email', 'factory', 'default', 'default', '1.0');
EmailClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-email', 'client', 'null', 'default', '1.0');
EmailClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-email', 'client', 'direct', 'default', '1.0');
EmailClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-email', 'client', 'http', 'default', '1.0');
EmailClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-email', 'client', 'seneca', 'default', '1.0');
exports.EmailClientFactory = EmailClientFactory;
//# sourceMappingURL=EmailClientFactory.js.map