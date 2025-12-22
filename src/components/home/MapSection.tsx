import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const campuses = [
  {
    id: 1,
    name: "Trụ sở chính",
    address: "Đường Trần Nhật Duật, P. Diên Hồng, TP. Pleiku, Gia Lai",
    phone: "0269 3824 007",
    hours: "07:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.3!2d107.9833!3d13.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bfe!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEdpYSBMYWk!5e0!3m2!1svi!2svn!4v1",
    image: "https://cdgl.edu.vn/wp-content/uploads/2024/03/anh-truong-1.jpg",
    isMain: true,
  },
  {
    id: 2,
    name: "Cơ sở Cách Mạng Tháng 8",
    address: "Cách Mạng Tháng 8, P. Pleiku, TP. Pleiku, Gia Lai",
    phone: "0269 3824 008",
    hours: "07:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.5!2d107.985!3d13.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bfe!2zQ8ahIHPhu58gMg!5e0!3m2!1svi!2svn!4v1",
    image: "https://cdgl.edu.vn/wp-content/uploads/2024/03/co-so-2.jpg",
    isMain: false,
  },
  {
    id: 3,
    name: "Cơ sở Nguyễn Chí Thanh",
    address: "140 Nguyễn Chí Thanh, P. Hội Phú, TP. Pleiku, Gia Lai",
    phone: "0269 3824 009",
    hours: "07:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.6!2d107.99!3d13.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bfe!2zQ8ahIHPhu58gMw!5e0!3m2!1svi!2svn!4v1",
    image: "https://cdgl.edu.vn/wp-content/uploads/2024/03/co-so-3.jpg",
    isMain: false,
  },
  {
    id: 4,
    name: "Cơ sở An Khê",
    address: "282 Hoàng Hoa Thám, P. An Khê, TX. An Khê, Gia Lai",
    phone: "0269 3824 010",
    hours: "07:00 - 17:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881!2d108.66!3d13.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c00!2zQ8ahIHPhu58gQW4gS2jDqg!5e0!3m2!1svi!2svn!4v1",
    image: "https://cdgl.edu.vn/wp-content/uploads/2024/03/co-so-an-khe.jpg",
    isMain: false,
  },
];

export function MapSection() {
  const [selectedCampus, setSelectedCampus] = useState(campuses[0]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/30 via-card to-muted/50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
      
      {/* Tây Nguyên pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="map-ethnic" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <circle cx="40" cy="40" r="6" fill="currentColor" className="text-secondary" />
            <circle cx="40" cy="40" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#map-ethnic)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Hệ thống cơ sở đào tạo</span>
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            4 cơ sở <span className="text-gradient">trải rộng Gia Lai</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mạng lưới cơ sở đào tạo rộng khắp tỉnh, thuận tiện cho sinh viên ở mọi khu vực
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campus List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCampus(campus);
                  setShowPopup(true);
                }}
                className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 hover-lift ${
                  selectedCampus.id === campus.id 
                    ? "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 shadow-glow" 
                    : "bg-card border-border/50 hover:border-primary/30 shadow-card hover:shadow-elevated"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    selectedCampus.id === campus.id
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground"
                  }`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground truncate">{campus.name}</h3>
                      {campus.isMain && (
                        <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs font-medium rounded-full flex-shrink-0">
                          Chính
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{campus.address}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {campus.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50 h-[500px]">
              {/* Main Map showing all of Gia Lai */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248672.76985168748!2d107.73805393299813!3d13.85839689454673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c00c1affb60e3%3A0x2d60f23b6a90b50a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEdpYSBMYWk!5e0!3m2!1svi!2s!4v1703123456789!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Custom markers overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Marker indicators */}
                <div className="absolute top-4 left-4 right-4 pointer-events-auto">
                  <div className="flex flex-wrap gap-2">
                    {campuses.map((campus) => (
                      <button
                        key={campus.id}
                        onClick={() => {
                          setSelectedCampus(campus);
                          setShowPopup(true);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                          selectedCampus.id === campus.id
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "bg-card/90 backdrop-blur-sm text-foreground hover:bg-primary/10 border border-border/50"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${
                          campus.isMain ? "bg-secondary" : "bg-primary"
                        }`} />
                        {campus.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Campus Info Popup */}
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-elevated overflow-hidden"
                >
                  {/* Campus Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={selectedCampus.image}
                      alt={selectedCampus.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-2 right-2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    {selectedCampus.isMain && (
                      <span className="absolute top-2 left-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                        Trụ sở chính
                      </span>
                    )}
                  </div>

                  {/* Campus Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-lg mb-3">{selectedCampus.name}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{selectedCampus.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{selectedCampus.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{selectedCampus.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCampus.address)}`, '_blank')}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Chỉ đường
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        onClick={() => window.open(`tel:${selectedCampus.phone.replace(/\s/g, '')}`, '_blank')}
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary/50 rounded-tl-xl" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-secondary/50 rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-secondary/50 rounded-bl-xl" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-primary/50 rounded-br-xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
}
