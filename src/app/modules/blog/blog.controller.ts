import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const addBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.addBlog(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project added successfully!',
        data: result,
    });
});

export const BlogControllers = {
    addBlog,
}