import {type Author} from '@prisma/client';

export class AuthorEntity implements Author {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}
