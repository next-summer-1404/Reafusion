import FilterBlogs from '@/components/Pages/BlogPage/FilterBlogs'
import BlogCard from '@/components/Ui/BlogCard'
import Breadcrumb from '@/components/Ui/Breadcrumb'
import Container from '@/components/Ui/Container/Container'
import CustomPagination from '@/components/Ui/CustomPagination'
import { GetBlogList } from '@/core/Apis/GetBlogList'
import { AxiosResponse } from 'axios'
import React, { FC } from 'react'

interface IBlogDataValues {
  id: string;
  title: string;
  caption: string;
  estimated_reading_time: {
    seconds: number;
  };
  author_id: string;
  created_at: string; 
  category_id: string;
}

interface IBlogItem {
  dataValues: IBlogDataValues;
}

interface IBlogResponse {
  data: IBlogItem[];
  totalCount: number;
}

interface IBlogProps {
  searchParams: {
    page?: string;
    title?: string;
  };
}

const BlogPage: FC<IBlogProps> = async ({ searchParams }) => {
  // call api and connect params to that
  const limit = 8;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const title = searchParams.title as string;
  const response = await GetBlogList(limit, currentPage, title) as AxiosResponse<IBlogResponse>; 
  const { data, totalCount } = response.data;
  // call api and connect params to that end
   // calculated total pages
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculated total pages end

  return (
    <Container className='space-y-11'>
      <Breadcrumb
        homeElement={"خانه"}
        activeClasses="!text-dark dark:!text-thidary !font-bold"
        containerClasses="flex gap-4"
        listClasses="hover:text-dark dark:hover:text-borderColor text-gray dark:text-white"
        capitalizeLinks
      />
      {/* <FilterBlogs /> */}
      {/* blog list */}
      <div  className='flex flex-wrap justify-between max-md:justify-around space-y-9'>
        {data.map((blog) => (
          <div key={blog.dataValues.id}>
            <BlogCard
              title={blog.dataValues.title}
              caption={blog.dataValues.caption}
              estimatedReadingTime={blog.dataValues.estimated_reading_time?.seconds}
            />
          </div>     
        ))}      
      </div>
      <CustomPagination  totalPages={totalPages} currentPage={currentPage}/>
      {/* blog list end */}
    </Container>
  )
}

export default BlogPage