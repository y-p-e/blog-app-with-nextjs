import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdminPostCardList from '../../organisms/AdminPostCardList/index'
import BackOfficeLayout from './index'

export default {
  title: 'templates/BackOffice',
} as ComponentMeta<typeof BackOfficeLayout>
const post1 = {
  postId: 1,
  title: '記事一覧画面について',
  status: '公開中',
}
const post2 = {
  postId: 2,
  title: '記事一覧詳細画面について',
  status: '一時保存',
}
const post3 = {
  postId: 3,
  title: 'ログイン画面について',
  status: '非公開',
}
const posts = [post1, post2, post3]

const Children = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AdminPostCardList posts={posts} />
      </Grid>
      <Grid item xs={8}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Grid>
    </Grid>
  )
}

const Template: ComponentStory<typeof BackOfficeLayout> = () => (
  <BackOfficeLayout>
    <Children />
  </BackOfficeLayout>
)

export const BackOffice = Template.bind({})
