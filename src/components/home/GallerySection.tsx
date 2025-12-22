import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    alt: "Khuôn viên trường",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    alt: "Lễ tốt nghiệp",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    alt: "Giảng đường",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    alt: "Phòng thực hành",
  },
  {
    src: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop",
    alt: "Sinh viên",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    alt: "Hoạt động ngoại khóa",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    alt: "Thể thao",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
    alt: "Sự kiện",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    alt: "Thư viện",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    alt: "Nghiên cứu",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Hình ảnh
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Khoảnh khắc tại CDGL
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.src)}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                  Xem ảnh
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-lg shadow-elevated"
          />
        </motion.div>
      )}
    </section>
  );
}
