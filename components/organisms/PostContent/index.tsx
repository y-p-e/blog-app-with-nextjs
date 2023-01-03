import { unified } from 'unified'
import { createElement, Fragment } from 'react'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

type PostContentProps = {
  contentString: string
}

const MyLink = ({ children, href }) => {
  return (
    <Link href={href}>
      {children[0]}
    </Link>
  )
}

const H1Typography = ({ children }) => {
  return (
    <Typography variant="h3" gutterBottom>
      {children[0]}
    </Typography>
  )
}

const H2Typography = ({ children }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children[0]}
    </Typography>
  )
}

const H3Typography = ({ children }) => {
  return (
    <Typography variant="h5" gutterBottom>
      {children[0]}
    </Typography>
  )
}

const BodyTypography = ({ children }) => {
  return (
    <Typography variant="body1" gutterBottom>
      {children[0]}
    </Typography>
  )
}

const toReactNode = (content) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        h1: H1Typography,
        h2: H2Typography,
        h3: H3Typography,
        p: BodyTypography,
      },
    })
    .processSync(content).result
}

const PostContent = (props: PostContentProps) => {
	const { contentString } = props
  return (
    <Card>
      <CardContent>
        {toReactNode(contentString)}
      </CardContent>
    </Card>
  )
}

export default PostContent
