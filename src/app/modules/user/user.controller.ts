import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { UserService } from './user.service';

const getUserAvailablePermissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getUserAvailablePermissions(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getUserAssignedPermissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getUserAssignedPermissions(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const assignPermissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.assignPermissions(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removePermissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.removePermissions(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const resetUserPasswordToDefault = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.resetUserPasswordToDefault(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getMyProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const forceLoggedOut = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.forceLoggedOut(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  getAllFromDB,
  createAdmin,
  createStudent,
  createFaculty,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  assignPermissions,
  getUserAvailablePermissions,
  getUserAssignedPermissions,
  removePermissions,
  resetUserPasswordToDefault,
  getMyProfile,
  forceLoggedOut
};
