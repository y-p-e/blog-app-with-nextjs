---
title: 'Next.jsでmarkdownブログを構築'
date: '2022-07-13'
description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
image: react.jpg
---

Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

# タイトル 1

## Next.js の準備

## プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

# 記事一覧

[記事一覧](/)

## プロジェクトの作成 1

### プロジェクトの作成 2

```js
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

### プロジェクトの作成 3

## プロジェクトの作成 4
