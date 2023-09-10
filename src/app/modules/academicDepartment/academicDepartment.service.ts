import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {

};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

export const AcademicDepartmentService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    insertIntoDB
};
