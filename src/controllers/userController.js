//Standardized response function
const handleResponse = (res, statusCode, success, message, data = null) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
}

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, true, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
}
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, true, "Users retrieved successfully", users);
  } catch (error) {
    next(error);
  }
}
export const getUserById = async (req, res, next) => {
  try {
    const user = await getUsersByIdService(req.params.id);
    if (!user) {
      return handleResponse(res, 404, false, "User not found");
    }
    handleResponse(res, 200, true, "User retrieved successfully", user);
  } catch (error) {
    next(error);
  }
}
export const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) {
      return handleResponse(res, 404, false, "User not found");
    }
    handleResponse(res, 200, true, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
}
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (!deletedUser) {
      return handleResponse(res, 404, false, "User not found");
    }
    handleResponse(res, 200, true, "User deleted successfully", deletedUser);
  } catch (error) {
    next(error);
  }
}
import {
  createUserService,
  getAllUsersService,
  getUsersByIdService,
  updateUserService,
  deleteUserService
} from "../models/userModel.js";

// This file contains the user controller functions that handle requests and responses for user-related operations.