import {Router} from 'express'
import { AuthenticateUserController } from '../controllers/authenticate-user-controller'
import { CreateMessageController } from '../controllers/create-message-controller'
import { GetLastThreeMessagesController } from '../controllers/get_last_three_messages_controller'
import { ensureAuthenticated } from '../middleware/ensure-authenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)
router.get('/messages/last3', new GetLastThreeMessagesController().handle)

export {router}