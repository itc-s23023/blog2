import { getAllcategories } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

const Category = ({ name }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}

const getStaticPaths = async () => {
  const allCats = await getAllcategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

const getStaticProps = async context => {
  const catSlug = context.params.slug
  const allCats = await getAllcategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}

export default Category
export { getStaticPaths }
export { getStaticProps }
