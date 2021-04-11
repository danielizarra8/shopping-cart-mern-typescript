// this file is in charged to define routes of url in the server.
import { defaultCipherList } from 'constants';
import {Router} from 'express';
// * MEANS IMPORT ALL WITH THE NAME OF VIDEOCTRL
import * as userCtrl from '../controllers/users.controller';
import * as productCtrl from '../controllers/products.controllers';
 
//WE EXECUTE IT AND SET IT TO A CONST TO DEFINE NEW ROUTES
const router  = Router();
// when a route is required with /video value we use the following to response:
// we use the method .get to obtain the request
router.get('/videos', userCtrl.getUsers);
// TO GET JUST ONE VIDEO WE ASK FOR THE ID
router.get('/videos/:id', userCtrl.getUser)
// we use .post to create a video
router.post('/videos', userCtrl.createUser);
// to delte video we use the delete method and ask for id aswell.
router.delete('/videos/:id', userCtrl.deleteUser);
//to updatte videos we use put
router.put('/videos/:id', userCtrl.updateUser);

//                Product Route!

router.get('/products', productCtrl.getProducts);
router.get('/products/:id', productCtrl.getProduct);
router.post('/products', productCtrl.createProduct);
router.delete('/products/:id', productCtrl.deleteProduct);
router.put('/products/:id', productCtrl.updateProduct);

//TO LETTER USE IN APP
export default router;