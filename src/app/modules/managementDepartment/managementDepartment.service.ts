import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthHttpService } from '../../../shared/axios';

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

export const ManagementDepartmentService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    insertIntoDB
};
