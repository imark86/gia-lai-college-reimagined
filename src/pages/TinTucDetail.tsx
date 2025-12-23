import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Eye, Share2, Facebook, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { newsData } from "./TinTuc";

export default function TinTucDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 md:pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Không tìm thấy bài viết</h1>
            <p className="text-muted-foreground mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link to="/tin-tuc">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang tin tức
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsData
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Image */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back button */}
          <div className="absolute top-4 left-4 z-10">
            <Link to="/tin-tuc">
              <Button variant="outline" className="bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại
              </Button>
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="relative -mt-24 z-10 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-3xl shadow-elevated p-8 md:p-12"
              >
                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold rounded-full">
                    {article.category}
                  </span>
                  {article.isHot && (
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                      🔥 HOT
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    {article.views.toLocaleString()} lượt xem
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                  {article.title}
                </h1>

                {/* Share buttons */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
                  <span className="text-sm text-muted-foreground">Chia sẻ:</span>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full ml-auto">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                {/* Excerpt */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-ul:text-muted-foreground prose-ul:my-4
                    prose-li:my-2
                    prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
                  <span className="text-sm text-muted-foreground">Từ khóa:</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">{article.category}</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Trường Cao đẳng Gia Lai</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Tây Nguyên</span>
                </div>
              </motion.article>

              {/* Related News */}
              {relatedNews.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Tin tức liên quan</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedNews.map((item) => (
                      <Link
                        key={item.id}
                        to={`/tin-tuc/${item.slug}`}
                        className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}