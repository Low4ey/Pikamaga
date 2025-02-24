'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Rocket, Zap, DollarSign, TrendingUp, Cpu, Binary, Twitter } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  // Helper to return the correct text class (white doesn't follow the -500 pattern)
  const getColorClass = (color:any) => color === "white" ? "text-white" : `text-${color}-500`;

  return (
    <main className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image 
                src="/pika.jpg"
                width={192}
                height={192}
                alt="PIKAMAGA Mascot" 
                className="relative w-48 h-48 rounded-full border-4 border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
          </div>
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-300 to-blue-500 mb-4 animate-gradient">
            PIKAMAGA 🐾
          </h1>
          <p className="text-2xl text-blue-400 mb-8 font-semibold">
            SHOCKING ⚡ the Crypto World with 500% Gains! 🚀
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]">
              <Rocket className="mr-2 h-5 w-5" /> Buy Now
            </Button>
            <Link href="https://twitter.com/pikamagacoin" passHref>
                <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 shadow-[0_0_15px_rgba(0,0,255,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,255,0.5)]">
                  <Twitter className="mr-2 h-5 w-5" /> Twitter
                </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: DollarSign, title: "Market Cap", value: "$42.0M", color: "white" },
            { icon: TrendingUp, title: "24h Volume", value: "$13.7M", color: "blue" },
            { icon: Zap, title: "Holders", value: "42,069", color: "white" }
          ].map((stat, index) => {
            const textColor = getColorClass(stat.color);
            return (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,255,0.2)] group">
                <div className="flex items-center mb-4">
                  <stat.icon className={`h-8 w-8 ${textColor} mr-2 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-bold text-gray-200">{stat.title}</h3>
                </div>
                <p className={`text-3xl font-bold ${textColor}`}>{stat.value}</p>
              </Card>
            )
          })}
        </div>

        {/* Progress Card - Updating Soon */}
        <Card className="p-6 bg-black/40 backdrop-blur-xl border border-gray-800 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-200">Token Sale Progress</h3>
          <p className="text-center text-xl text-gray-400">Updating Soon</p>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-black/40 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,255,0.2)]">
            <div className="flex items-center mb-4">
              <Binary className="h-8 w-8 text-red-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-200">🚀 Tokenomics</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Total Supply: 1,000,000,000 PMG
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                40% Public Sale
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                30% Liquidity Pool
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                20% Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                10% Marketing
              </li>
            </ul>
          </Card>
          <Card className="p-6 bg-black/40 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,255,0.2)]">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-200">⚡ Features</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Anti-Rug Pull Mechanism
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Liquidity Locked for 1 Year
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Community Governed
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Deflationary Model
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Automatic LP Generation
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
