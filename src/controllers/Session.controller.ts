import { Request, Response } from 'express';
import {CreateSessionService} from '../services/CreateSessions.service';

class SessionsController {
	public async create(
		request: Request,
		response: Response,
	): Promise<Response> {
		const { email, codigo } = request.body;
		const createSession = new CreateSessionService();

		const user = await createSession.execute({email, codigo});

		return response.json(user);
	}
}

export {SessionsController};