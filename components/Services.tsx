"use client";

import { services, ServiceItem } from "@/data/services";
import { Layout, Server, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case "Layout":
      return <Layout className="w-6 h-6 text-primary" />;
    case "Server":
      return <Server className="w-6 h-6 text-primary" />;
    case "ShoppingBag":
      return <ShoppingBag className="w-6 h-6 text-primary" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6 text-primary" />;
    default:
      return <Layout className="w-6 h-6 text-primary" />;
  }
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30 border-y border-border/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Services &amp; Solutions
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Clean, functional, and modern web development services focused on delivering great user experiences.
          </p>
        </div>

        {/* Services Grid (FR-S1, FR-S2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-border/50">
                  {service.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
