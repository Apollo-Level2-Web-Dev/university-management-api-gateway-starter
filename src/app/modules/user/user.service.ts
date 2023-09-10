import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { ICloudinaryResponse, IUploadedFile } from '../../../interfaces/file';
import { AuthHttpService } from '../../../shared/axios';

const createStudent = async (req: Request): Promise<IGenericResponse> => {

};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {

};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {

};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const assignPermissions = async (req: Request): Promise<IGenericResponse> => {

};

const removePermissions = async (req: Request): Promise<IGenericResponse> => {

};

const getUserAvailablePermissions = async (req: Request): Promise<IGenericResponse> => {

};

const getUserAssignedPermissions = async (req: Request): Promise<IGenericResponse> => {

};

const resetUserPasswordToDefault = async (req: Request): Promise<IGenericResponse> => {

};

const getMyProfile = async (req: Request): Promise<IGenericResponse> => {

};

const forceLoggedOut = async (req: Request): Promise<IGenericResponse> => {

};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  assignPermissions,
  removePermissions,
  getUserAvailablePermissions,
  getUserAssignedPermissions,
  resetUserPasswordToDefault,
  getMyProfile,
  forceLoggedOut
};
