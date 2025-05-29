import { Router } from 'express'

import {Login,generateCode} from '../controllers/auth.js'

const routes = Router()

routes.get('/login', Login )
routes.get('/login/:email/code', generateCode)

export default routes