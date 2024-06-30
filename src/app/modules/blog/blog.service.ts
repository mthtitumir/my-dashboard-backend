import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const addBlog = async (payload: TBlog) => {
    const result = await Blog.create(payload);
    return result;
}

export const BlogServices = {
    addBlog,
}