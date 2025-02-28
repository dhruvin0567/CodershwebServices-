import GridBlog from "../../components/blog/grid-blog";
import BreadCrumb from "../../components/common/Breadcrumb";
function BlogGridPage() {
	return (
		<>
			<BreadCrumb title="Our Blog" />
			<GridBlog />
		</>
	);
}

export default BlogGridPage;
