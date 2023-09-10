import express, { NextFunction, Request, Response } from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.get(
  '/my-profile',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  UserController.getMyProfile
);
router.get('/:id/available-permissions', UserController.getUserAvailablePermissions);
router.get('/:id/assigned-permissions', UserController.getUserAssignedPermissions);
router.get('/:id', UserController.getByIdFromDB);

router.post(
  '/create-admin',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
    return UserController.createAdmin(req, res, next);
  }
);
router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);
router.post(
  '/create-faculty',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createFaculty.parse(JSON.parse(req.body.data));
    return UserController.createFaculty(req, res, next);
  }
);

router.post(
  '/:id/remove-permissions',
  validateRequest(UserValidation.removePermissions),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.removePermissions
);

router.post(
  '/:id/assign-permissions',
  validateRequest(UserValidation.assignPermissions),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.assignPermissions
);

router.post(
  '/:id/reset-password-to-default',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.resetUserPasswordToDefault
);

router.post(
  '/:id/force-logged-out',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.forceLoggedOut
);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUser),
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  UserController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.deleteByIdFromDB
);

export const userRoutes = router;
