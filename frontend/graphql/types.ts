// ./articles.gql
export interface ArticlesQuery {
    articles: Array<ArticleQueryItem>
}
export interface ArticleQuery {
    article: ArticleQueryItem
}
interface ArticleQueryItem {
    id: number,
    title: string
}