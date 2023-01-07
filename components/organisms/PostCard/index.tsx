import Link from 'next/link'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const PostCard = ({post}) => {
	console.log(post)
	return (
    <Card sx={{ maxWidth: 300 }}>
			<Link href={`/posts/${post.slug}`} passHref>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={`/${post.frontMatter.image}`}
						alt={post.frontMatter.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{post.frontMatter.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{post.frontMatter.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
    </Card>
	)
}

export default PostCard