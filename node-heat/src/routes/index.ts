import {Router} from 'express'
import { AuthenticateUserController } from '../controllers/authenticate-user-controller'
import { CreateMessageController } from '../controllers/create-message-controller'
import { ensureAuthenticated } from '../middleware/ensure-authenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

export {router}