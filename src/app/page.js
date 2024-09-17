import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import CardListItem from "../../components/CardListItem";
import { CardItem } from "../../components/CardItem";
import Test from "../../styles/test";
import { getAllBlogs } from "lib/api";

export default async function Home(blogParams) {
  console.table(blogParams);
  const allBlogs = await getAllBlogs();
  console.table(allBlogs);
  return (
    <PageLayout>
      <Test />
      <div className="blog-detail-page">
        <Row className="mb-5">
          {allBlogs.map((blogItem) => (
            <Col md="10">
              <CardListItem />
            </Col>
          ))}
          {allBlogs.map((blog) => (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                link={{ href: "/[slug]", as: `/${blog.slug}` }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  );
}
