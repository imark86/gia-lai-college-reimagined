import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "video1",
    title: "Giới thiệu Trường Cao đẳng Gia Lai",
    description: "Tổng quan về cơ sở vật chất, đội ngũ giảng viên và môi trường học tập tại trường",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "5:30"
  },
  {
    id: "video2",
    title: "Tuyển sinh 2025 - Cơ hội nghề nghiệp",
    description: "Thông tin tuyển sinh và các ngành đào tạo hot nhất năm 2025",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "8:45"
  },
  {
    id: "video3",
    title: "Ký túc xá và đời sống sinh viên",
    description: "Cuộc sống sinh viên tại Cao đẳng Gia Lai - Nơi nuôi dưỡng ước mơ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "4:20"
  },
  {
    id: "video4",
    title: "Thực hành nghề nghiệp",
    description: "Sinh viên thực hành tại các xưởng, phòng lab hiện đại của trường",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "6:15"
  },
  {
    id: "video5",
    title: "Lễ tốt nghiệp và việc làm",
    description: "Câu chuyện thành công của cựu sinh viên sau khi ra trường",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "7:00"
  }
];

export function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setPlayingVideo(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setPlayingVideo(null);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-muted/30">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-primary/10 rounded-full mb-4">
            <Youtube className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Video giới thiệu</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Khám phá <span className="text-gradient">trường học</span> của bạn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Xem video để hiểu rõ hơn về môi trường học tập và cơ hội phát triển tại Cao đẳng Gia Lai
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/50">
            {/* Video Container */}
            <div className="relative aspect-video">
              {playingVideo === currentVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${currentVideo.thumbnail})`,
                      backgroundColor: 'hsl(var(--muted))'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setPlayingVideo(currentVideo.youtubeId)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="relative">
                      {/* Pulse effect */}
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30" />
                      <div className="relative w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </button>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full mb-3">
                      {currentVideo.duration}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {currentVideo.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base max-w-xl">
                      {currentVideo.description}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 shadow-lg z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50 shadow-lg z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide">
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => goToSlide(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 relative group rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-40 md:w-48 aspect-video relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${video.thumbnail})`,
                      backgroundColor: 'hsl(var(--muted))'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      index === currentIndex ? 'bg-primary' : 'bg-background/80 group-hover:bg-primary'
                    }`}>
                      <Play className="h-4 w-4 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/80 text-xs font-medium rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background to-transparent">
                  <p className="text-xs font-medium text-foreground line-clamp-1">
                    {video.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}