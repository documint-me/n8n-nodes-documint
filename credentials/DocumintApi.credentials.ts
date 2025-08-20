import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class DocumintApi implements ICredentialType {
	name = 'documintApi';

	displayName = 'Documint API';

	documentationUrl = 'https://docs.documint.me/integrations/n8n/credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Project API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}