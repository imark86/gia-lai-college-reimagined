import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Camera } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    alt: "Khuôn viên trường",
    category: "Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    alt: "Lễ tốt nghiệp",
    category: "Sự kiện",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    alt: "Giảng đường",
    category: "Học tập",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    alt: "Phòng thực hành",
    category: "Thực hành",
  },
  {
    src: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop",
    alt: "Sinh viên",
    category: "Sinh viên",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    alt: "Hoạt động ngoại khóa",
    category: "Hoạt động",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    alt: "Thể thao",
    category: "Thể thao",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
    alt: "Sự kiện",
    category: "Sự kiện",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    alt: "Thư viện",
    category: "Học tập",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    alt: "Nghiên cứu",
    category: "Nghiên cứu",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Tây Nguyên inspired decorative patterns */}
      <div className="absolute top-20 left-10 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary" />
          <circle cx="50" cy="50" r="15" fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-60 h-60 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="currentColor" className="text-secondary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4"
          >
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Thư viện ảnh</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Khoảnh khắc tại <span className="text-gradient">CDGL</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những hình ảnh đẹp về hoạt động học tập, sự kiện và cuộc sống sinh viên
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedImage(image.src)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 hover-lift ${
                index === 0 || index === 5 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-4">
                <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50" />
                <span className="text-primary-foreground font-medium text-sm">{image.alt}</span>
                <span className="text-primary-foreground/70 text-xs">{image.category}</span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/50 to-secondary/50 -rotate-45 -translate-y-12 translate-x-12" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover-lift">
            <Camera className="h-5 w-5" />
            Xem thêm hình ảnh
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-primary/20 hover:bg-primary/40 rounded-full text-primary-foreground transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-elevated"
          />
        </motion.div>
      )}
    </section>
  );
}
