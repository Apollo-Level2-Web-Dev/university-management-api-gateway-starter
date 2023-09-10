import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

export const OfferedCourseClassScheduleService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
