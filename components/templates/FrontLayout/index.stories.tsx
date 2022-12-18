import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FrontLayout from './index'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ProfileCard from '../../organisms/ProfileCard'

export default {
  title: 'templates/Front',
} as ComponentMeta<typeof FrontLayout>

const PostCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/react.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reactについて
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ReactでdeWebアプリを実装する上で役立つ内容をまとめました
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const index = [1,2,3,4,5,6];

const Children = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={9}>
        <Grid container spacing={2} rowSpacing={5}>
          {index.map((i) => (
            <Grid item xs={4}>
              <PostCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
    </Grid>
  )
}

const Template: ComponentStory<typeof FrontLayout> = () => (
  <FrontLayout>
    <Children />
  </FrontLayout>
)

export const Front = Template.bind({})
