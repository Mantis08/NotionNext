import BlogPostCard from '@/components/BlogPostCard'
import PaginationNumber from './PaginationNumber'
import BLOG from '@/blog.config'
import BlogPostListEmpty from '@/components/BlogPostListEmpty'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount }) => {
  const totalPage = Math.ceil(postCount / BLOG.postsPerPage)

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div id="container">
        {/* 文章列表 */}
        <div className="flex flex-wrap lg:space-y-4 space-y-1">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <PaginationNumber page={page} totalPage={totalPage} />
      </div>
    )
  }
}

export default BlogPostListPage
