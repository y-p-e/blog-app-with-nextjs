import fs from 'fs';
import matter from 'gray-matter'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { createElement, Fragment } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import rehypeSlug from 'rehype-slug';
import {toc} from 'mdast-util-toc';
import Link from 'next/link';
import Grid from '@mui/material/Grid'
import FrontLayout from '../../components/templates/FrontLayout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProfileCard from '../../components/organisms/ProfileCard';
import remarkPrism from 'remark-prism'
import { JSDOM } from "jsdom"

const MyLink = ({ children, href }) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

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
      },
    })
    .processSync(content).result;
};

const getToc = (options) => {
	return (node) => {
		const result = toc(node, options)
		node.children = [result.map]
	}
}

function extractOgp(metaElements: HTMLMetaElement[]): object {
  const ogp = metaElements
    .filter((element: Element) => element.hasAttribute("property"))
    .reduce((previous: any, current: Element) => {
      const property = current.getAttribute("property")?.trim();
      if (!property) return;
      const content = current.getAttribute("content");
      previous[property] = content;
      return previous;
    }, {});

  return ogp;
}


export async function getStaticProps({params}) {
	const url = "https://zenn.dev/ymmt1089/articles/20220429_interface"
	fetch(url).then(res => res.text()).then(text => {
		const dom = new JSDOM(text)
		const meta = dom.window.document.querySelectorAll("meta")
		const ogp = extractOgp([...meta])
	})
	const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8')
	const {data, content} = matter(file)
  const result = await unified()
    .use(remarkParse)
		.use(remarkPrism, {
			/* options */
		})
    .use(remarkRehype)
		.use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

		const toc = await unified()
		.use(remarkParse)
		.use(getToc, {
			tight: true,
		})
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(content);
	return { props: { frontMatter: data, content: result.toString(), toc: toc.toString() } };
}

export async function getStaticPaths() {
	const files = fs.readdirSync('posts')
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(/\.md$/, ''),
		}
	}))
	return {
		paths,
		fallback: false
	}
}

const Post = ({frontMatter, content, toc}) => {
	return (
		<FrontLayout>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h1>{frontMatter.title}</h1>
				</Grid>
				<Grid item xs={9}>
					<Card>
						<CardContent>
							{toReactNode(content)}
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<ProfileCard />
				</Grid>
			</Grid>
		</FrontLayout>
	)
}

export default Post