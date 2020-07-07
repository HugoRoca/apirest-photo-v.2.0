import { Router } from 'express'
import { createPhoto, getPhotos } from '../controllers/photo.controller'

const router = Router()

router.route('/photo')
  .post(createPhoto)
  .get(getPhotos)

export default router
