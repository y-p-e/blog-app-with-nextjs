### nextjs アプリ作成

```
npx create-next-app blog-app-with-nextjs  --ts --use-npm
```

### MUI インストール

```
npm install @mui/material @emotion/react @emotion/styled
```

### ESLint 用プラグインインストール

```
npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/
eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugi
n-import
```

### ESLint コマンド

```
npm run lint
npm run format
```

### StoryBook 起動コマンド

```
npm run storybook
```

# コンポーネント設計

### Organisms

## ヘッダー

### 管理画面用

- メニューアイコン設置
- メニューアイコンクリックでサイドバーを open, close できる
- 管理画面用の文字を表示
- ログアウト用の扉のアイコンを設置

### 公開用

- 公開用の文字を表示

### react-md-editor

https://github.com/uiwjs/react-md-editor
https://uiwjs.github.io/react-md-editor/
