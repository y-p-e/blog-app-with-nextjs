import { unified } from 'unified'
import { createElement, Fragment } from 'react'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type PostTocProps = {
  tocString: string
}

type TocInfo = { 
  nestLevel: number 
  tocTitle: string 
  href: string
  pl: number
}

const sideTocArr: TocInfo[] = []

const ThirdToc = (arr) => {
  arr.forEach(element => {
    if(typeof element === 'object' && element.type === 'a') {
      const tocInfo: TocInfo = {
        nestLevel: 3,
        tocTitle: element.props.children[0],
        href: element.props.href,
        pl: 8,
      }
      sideTocArr.push(tocInfo)
    }
  }) 
}

const SecondToc = (arr: any) => {
  arr.forEach(element => {
    if(typeof element === 'object') {
      if (element.type === 'a') {
        const tocInfo: TocInfo = {
          nestLevel: 2,
          tocTitle: element.props.children[0],
          href: element.props.href,
          pl: 4,
        }
        sideTocArr.push(tocInfo)
      } else {
        element.props.children.forEach(e => {
          if(typeof e === 'object' && e.type === 'li') {
            ThirdToc(e.props.children)
          }
        })
      }
    }
  })
}

const FirstToc = (arr: any) => {
  arr.forEach(element => {
    if(typeof element === 'object') {
      if (element.type === 'a') {
        const tocInfo: TocInfo = {
          nestLevel: 1,
          tocTitle: element.props.children[0],
          href: element.props.href,
          pl: 2,
        }
        sideTocArr.push(tocInfo)
      } else {
        element.props.children.forEach(e => {
          if(typeof e === 'object' && e.type === 'li') {
            SecondToc(e.props.children)
          }
        })
      }
    }
  })
}

const SideToc = (props:any) => {
  props.children.forEach(element => {
    if (typeof element === 'object' && element.type === 'li') {
      FirstToc(element.props.children)
    }
  })
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardContent>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              目次
            </ListSubheader>
          }
        >
          {sideTocArr.map((t) => (
            <ListItemButton href={t.href} sx={{ pl: t.pl }}>
              <ListItemText primary={t.tocTitle} />
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const toReactNodeToc = (content: any) => {
	return unified()
		.use(rehypeParse, {
			fragment: true,
		})
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: {
				ul: SideToc,
			},
		})
		.processSync(content).result;
}

const PostToc = (props: PostTocProps) => {
	const { tocString } = props
  return (
		<>
			{toReactNodeToc(tocString)}
		</>
  )
}

export default PostToc
