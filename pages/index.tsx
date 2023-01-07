import type { NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import FrontLayout from '../components/templates/FrontLayout'
import ProfileCard from '../components/organisms/ProfileCard'
import Grid from '@mui/material/Grid'
import PostCard from '../components/organisms/PostCard'


export const getStaticProps = () => {
  const files = fs.readdirSync('posts')
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const {data} = matter(fileContent)
    return {
      frontMatter: data,
      slug
    }
  })
  return {
    props: {
      posts,
    }
  }
}

const Home: NextPage = ({posts}) => {
  return (
    <FrontLayout>
      <Grid container spacing={5}>
        <Grid item xs={9}>
          <Grid container spacing={2} rowSpacing={5}>
            {posts.map((post) => (
              <Grid item xs={4}>
                <PostCard key={post.slug} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <ProfileCard />
        </Grid>
      </Grid>
    </FrontLayout>
  )
}

export default Home
