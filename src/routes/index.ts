import { Router } from 'express'
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} from '../controllers/photo.controller'
import multer from '../libs/multer'

const router = Router()

router
  .route('/photo')
  .get(getPhotos)
  .put(updatePhoto)
  .post(multer.single('image'), createPhoto)

router.route('/photos/:id').get(getPhoto).delete(deletePhoto)

export default router
