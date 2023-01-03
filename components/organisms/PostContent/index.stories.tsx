import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostContent from './index'

const contentString = `
<p>Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。</p>
<h1 id="タイトル-1">タイトル 1</h1>
<h2 id="nextjs-の準備">Next.js の準備</h2>
<h2 id="プロジェクトの作成">プロジェクトの作成</h2>
<p>npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。</p>
<h1 id="記事一覧">記事一覧</h1>
<p><a href="/">記事一覧</a></p>
<h2 id="プロジェクトの作成-1">プロジェクトの作成 1</h2>
<h3 id="プロジェクトの作成-2">プロジェクトの作成 2</h3>
<div class="remark-highlight"><pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Layout</span></span> <span class="token keyword module">from</span> <span class="token string">'../components/layout'</span><span class="token punctuation">;</span>
<span class="token keyword module">import</span> <span class="token string">'../styles/globals.css'</span><span class="token punctuation">;</span>
<span class="token keyword module">import</span> <span class="token string">'../styles/prism.css'</span><span class="token punctuation">;</span>
<span class="token keyword module">import</span> <span class="token constant">SEO</span> <span class="token keyword module">from</span> <span class="token string">'../next-seo.config'</span><span class="token punctuation">;</span>
<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">DefaultSeo</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">'next-seo'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">MyApp</span></span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token maybe-class-name">Component</span><span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&#x3C;</span><span class="token maybe-class-name">Layout</span><span class="token operator">></span>
      <span class="token operator">&#x3C;</span><span class="token maybe-class-name">DefaultSeo</span> <span class="token punctuation">{</span><span class="token spread operator">...</span><span class="token constant">SEO</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&#x3C;</span><span class="token maybe-class-name">Component</span> <span class="token punctuation">{</span><span class="token spread operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&#x3C;</span><span class="token operator">/</span><span class="token maybe-class-name">Layout</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token maybe-class-name">MyApp</span><span class="token punctuation">;</span>
</code></pre></div>
<h3 id="プロジェクトの作成-3">プロジェクトの作成 3</h3>
<h2 id="プロジェクトの作成-4">プロジェクトの作成 4</h2>
`

export default {
  title: 'organisms/PostContent',
  argTypes: {
    contentString: {
      control: { type: 'string' },
      description: 'コンテンツ',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof PostContent>

const Template: ComponentStory<typeof PostContent> = (args) => (
  <PostContent {...args}/>
)

export const FrontPostContent = Template.bind({})
FrontPostContent.args = {
  contentString: contentString,
}

