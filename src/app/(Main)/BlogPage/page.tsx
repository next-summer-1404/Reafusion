import ScrollReveal from '@/components/Ui/Animations/ScrollReveal'
import BlogCard from '@/components/Ui/BlogCard'
import Breadcrumb from '@/components/Ui/Breadcrumb'
import Container from '@/components/Ui/Container/Container'
import CustomPagination from '@/components/Ui/CustomPagination'
import { GetBlogList } from '@/core/Apis/GetBlogList'
import React, { FC } from 'react'

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
  const response = await GetBlogList(limit, currentPage, title); 
  const { data, totalCount } = response;
  // call api and connect params to that end
   // calculated total pages
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculated total pages end

  return (
    <Container className='space-y-11'>
      <ScrollReveal>
          <Breadcrumb
            homeElement={"خانه"}
            activeClasses="!text-dark dark:!text-thidary !font-bold"
            containerClasses="flex gap-4"
            listClasses="hover:text-dark dark:hover:text-borderColor text-gray dark:text-white"
            capitalizeLinks
          />
          {/* <FilterBlogs /> */}
          {/* blog list */}
          <div className='flex flex-wrap justify-between mt-7 max-md:justify-around space-y-9'>
            {data.map((blog) => (
              <div key={blog.id}>
                <BlogCard
                  title={blog.title}
                  caption={blog.caption}
                  estimatedReadingTime={blog.estimated_reading_time?.seconds}
                />
              </div>     
            ))}      
          </div>
          <CustomPagination  totalPages={totalPages} currentPage={currentPage}/>
          {/* blog list end */}
      </ScrollReveal>   
    </Container>
  )
}

export default BlogPage