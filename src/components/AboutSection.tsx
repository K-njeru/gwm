"use client"

import { Leaf, BookOpen, HeartHandshake, HandHeart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';

const values = [
    {
        icon: HandHeart, // Represents serving others with love
        title: "Servant Leadership",
        description:
            "Inspired by Christ's example, we equip believers to lead by serving others with humility and love, reflecting the heart of a true disciple.",
        color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
    },
    {
        icon: HeartHandshake, // Represents compassion and connection
        title: "Compassion",
        description:
            "We nurture a culture of compassion, teaching believers to love and care for others as Christ did, bringing hope and healing to a broken world.",
        color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    },
    {
        icon: Leaf, // Represents humility and growth
        title: "Humility",
        description:
            "We emphasize the importance of humility, encouraging believers to live with a Christ-like attitude of meekness and dependence on God.",
        color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    },
    {
        icon: BookOpen, // Represents truth and integrity
        title: "Truthfulness",
        description:
            "We uphold the value of truthfulness, guiding believers to live with integrity and honesty, rooted in the unchanging truth of God's Word.",
        color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
    },
];
export default function AboutSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-gray-50/50 dark:bg-[hsl(220_56%_15%)] transition-colors" id="About">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Values</h2>
                    <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                        Godly Wisdom exists to equip and disciple believers of Jesus Christ in their faith and knowledge of the truth that leads to godliness.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((item, index) => (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col gap-2 p-6 bg-white dark:bg-[hsl(220_56%_17%)] rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className={`p-2 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-start">
                            <Link
                                href="/about"
                                className="w-full flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-md text-white font-bold hover:bg-transparent hover:text-foreground hover:border hover:border-blue-500"
                            >
                                Learn More About Our Mission <ArrowRight className="ml-4"></ArrowRight>
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
                        <Image
                            alt="Students engaged in learning"
                            className="object-cover"
                            fill
                            src="/scriptures.jpg?height=800&width=600"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

