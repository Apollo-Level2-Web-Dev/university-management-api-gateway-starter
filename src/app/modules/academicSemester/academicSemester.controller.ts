import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
