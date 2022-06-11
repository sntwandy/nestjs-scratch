/**
 *
 */

import { Controller, Get } from '@nestjs/common'

@Controller('/app')
export class AppController {
	@Get('/megan')
	getRootRoute() {
		return 'Hi there!!';
	}

	@Get('/bye')
	getByThere() {
		return 'Bye there!!';
	}
}
