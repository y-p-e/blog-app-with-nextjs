import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


type BlogCardProps = {
  ogTitle?: string,
  ogUrl?: string,
  ogSiteName?: string,
  ogDescription?: string,
  ogImage?: string,
}

const BlogCard = (props: BlogCardProps) => {
	const {ogTitle, ogUrl, ogSiteName, ogDescription, ogImage} = props
  const onClickCard = () => {
    window.open(ogUrl, '_blank')
  }

  return (
    <Card sx={{ display: 'flex', '&:hover': {cursor: 'pointer'} }} onClick={onClickCard}>
			<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						{ogTitle}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						{ogDescription}
					</Typography>
					<Typography component="div" variant="button" sx={{ pt: 3 }}>
						{ogSiteName}
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={ogImage}
				alt="Live from space album cover"
			/>
    </Card>
  );
}

export default BlogCard