[tRPC]:https://trpc.io/
[Set up with React Server Components - tRPC公式]:https://trpc.io/docs/client/react/server-components
[tRPCの簡易設定 (AppRouter) - hayato94087さん]:https://zenn.dev/hayato94087/articles/08d63958b57fbe


# example-next-trpc

本リポジトリは Next.js 15 プロジェクトに [tRPC] を導入するコード例です。


# 説明

はじめに、以下の Next.js チュートリアルコマンドで初期プロジェクトを生成しています。

```bash
npx create-next-app@latest
```

次に [Set up with React Server Components - tRPC公式] の指示に従い、関連 NPM Modules を導入します。

```bash
npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @tanstack/react-query@latest zod client-only server-only
```

その後も公式ドキュメントに従って進めたいのですが、公式ドキュメントの内容に従ってコードを書くと所々エラーが発生してしまいます。
そこで、エラーが発生せず期待通りに動作する所までコーディングしたのが本リポジトリです。

以下の２文献 (公式含む) を参考にさせて頂きました。

1. [Set up with React Server Components - tRPC公式]
2. [tRPCの簡易設定 (AppRouter) - hayato94087さん]
