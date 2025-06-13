"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Coins,
  ArrowRightLeft,
  Globe,
  BookOpen,
  GraduationCap,
  Briefcase,
  Building,
  UserCheck,
  ExternalLink,
  X,
  MessageCircle,
  Send,
  Instagram,
  Music,
  Sparkles,
  Star,
  TrendingUp,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const socialLinks = [
  { name: "Discord", icon: MessageCircle, url: "#", color: "hover:text-teal-300" },
  { name: "Telegram", icon: Send, url: "#", color: "hover:text-teal-300" },
  { name: "X", icon: X, url: "#", color: "hover:text-gray-300" },
  { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-orange-300" },
  { name: "TikTok", icon: Music, url: "#", color: "hover:text-orange-300" },
  { name: "Reddit", icon: MessageSquare, url: "#", color: "hover:text-orange-400" },
]

const features = [
  {
    title: "Talent Swap",
    description: "Swipe to match and exchange skills with peers.",
    icon: ArrowRightLeft,
    gradient: "from-teal-500 to-teal-600",
    bgGradient: "from-teal-500/10 to-teal-600/10",
  },
  {
    title: "PeerLearn",
    description: "Teach and learn subjects through peer-to-peer matching.",
    icon: BookOpen,
    gradient: "from-teal-600 to-cyan-600",
    bgGradient: "from-teal-600/10 to-cyan-600/10",
  },
  {
    title: "Talent Marketplace",
    description: "Hire or offer services with low fees and fair disputes.",
    icon: Briefcase,
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-500/10 to-emerald-500/10",
  },
  {
    title: "Talent Academy",
    description: "Access free or paid courses with an AI Co-Teacher option.",
    icon: GraduationCap,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "CollabEZ",
    description: "Connect startups with talent, offering equity, future allocations or paid roles.",
    icon: Building,
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-500/10 to-pink-500/10",
  },
  {
    title: "Mentor2Earn",
    description: "Hire mentors or earn by mentoring others in specific skills.",
    icon: UserCheck,
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-500/10 to-orange-600/10",
  },
]

const dynamicButtons = [
  { text: "Explore Talent Swap", icon: ArrowRightLeft },
  { text: "Explore PeerLearn", icon: BookOpen },
  { text: "Explore Talent Marketplace", icon: Briefcase },
  { text: "Explore Talent Academy", icon: GraduationCap },
  { text: "Explore CollabEZ", icon: Building },
  { text: "Explore Mentor2Earn", icon: UserCheck },
]

const stats = [
  { label: "Active Users", value: "50,000+", icon: Users, color: "text-teal-300" },
  { label: "Talent Earned", value: "$2.5M", icon: Coins, color: "text-orange-300" },
  { label: "Swaps Completed", value: "125,000", icon: ArrowRightLeft, color: "text-teal-300" },
  { label: "Countries", value: "85", icon: Globe, color: "text-orange-300" },
]

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="animate-float"
    style={{
      animationDelay: `${delay}s`,
      animation: `float 6s ease-in-out infinite ${delay}s`,
    }}
  >
    {children}
  </div>
)

export default function HomePage() {
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentButtonIndex((prev) => (prev + 1) % dynamicButtons.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const currentButton = dynamicButtons[currentButtonIndex]

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14b8a6" />
      </Head>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(38, 166, 154, 0.4); }
          50% { box-shadow: 0 0 40px rgba(38, 166, 154, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes token-bounce {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes token-float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-25px) rotate(15deg) scale(1.1); }
          66% { transform: translateY(-10px) rotate(-10deg) scale(0.9); }
        }
        @keyframes token-float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-20px) rotate(-15deg) scale(1.05); }
          75% { transform: translateY(-5px) rotate(20deg) scale(0.95); }
        }
        @keyframes token-float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          40% { transform: translateY(-30px) rotate(25deg) scale(1.15); }
          80% { transform: translateY(-8px) rotate(-20deg) scale(0.85); }
        }
        .animate-token-bounce {
          animation: token-bounce 3s ease-in-out infinite;
        }
        .animate-token-float-1 {
          animation: token-float-1 4s ease-in-out infinite;
        }
        .animate-token-float-2 {
          animation: token-float-2 5s ease-in-out infinite 1s;
        }
        .animate-token-float-3 {
          animation: token-float-3 6s ease-in-out infinite 2s;
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative min-h-screen">
        {/* Header */}
        <header className="relative border-b border-gray-300/20 bg-teal-900/90 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Image
                        src="/images/talentmesh-logo-transparent.png"
                        alt="TalentMesh Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-white font-bold text-2xl bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  TalentMesh
                </span>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                {["Docs", "Blog", "Campaigns"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="relative text-gray-200 hover:text-white transition-all duration-300 group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}

                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className={`text-gray-300 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>

                <Button
                  asChild
                  className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 text-white font-medium"
                >
                  <Link href="https://app.talentmesh.xyz/dashboard">
                    Launch App <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Floating Token Elements */}
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 text-teal-400/30 animate-token-float-1">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center p-1">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Image
                    src="/images/talentmesh-logo-transparent.png"
                    alt="Token"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute top-40 right-20 text-orange-400/30 animate-token-float-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center p-1">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Image
                    src="/images/talentmesh-logo-transparent.png"
                    alt="Token"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </FloatingElement>
          <FloatingElement delay={4}>
            <div className="absolute bottom-40 left-20 text-teal-400/30 animate-token-float-3">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-orange-400 rounded-full flex items-center justify-center p-1">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Image
                    src="/images/talentmesh-logo-transparent.png"
                    alt="Token"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                </div>
              </div>
            </div>
          </FloatingElement>

          <div className="container mx-auto text-center relative z-10">
            <FloatingElement>
              <Badge className="mb-8 bg-gradient-to-r from-teal-500/20 to-orange-500/20 text-orange-200 border-orange-500/30 px-6 py-2 text-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Powered by $TALENT Token
              </Badge>
            </FloatingElement>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-orange-200 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Talent Economy
              </span>
            </h1>

            <p className="text-2xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              Learn, teach, collaborate, and earn in the world's first comprehensive talent ecosystem.
              <br className="hidden md:block" />
              From freelancing to talent-swapping, team building to AI-powered learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xl px-12 py-8 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 animate-gradient group text-white font-medium w-80"
              >
                <currentButton.icon className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                {currentButton.text}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-200/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </Button>

              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-xl px-12 py-8 transition-all duration-300 hover:scale-105 text-white font-medium shadow-lg hover:shadow-teal-500/25"
              >
                <UserCheck className="w-6 h-6 mr-3" />
                Earn as an Arbiter
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose TalentMesh Section */}
        <section className="relative py-32 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Why Choose TalentMesh?</h2>
              <p className="text-2xl text-gray-200 max-w-5xl mx-auto font-light">
                Built on blockchain technology to create a fair, transparent, and efficient talent economy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group relative bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                <CardContent className="relative p-8 z-10 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Smart Contract Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All transactions and agreements are secured by blockchain technology, ensuring trust and
                    transparency.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                <CardContent className="relative p-8 z-10 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Global Community</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Connect with talented individuals from around the world. Break geographical barriers.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                <CardContent className="relative p-8 z-10 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <div className="w-8 h-8 text-white">💡</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Collaborate & Create</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Join startups or build teams with talent from around the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                <CardContent className="relative p-8 z-10 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Grow Your Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Teach, mentor, or take courses to unlock your potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-32 px-4 bg-gradient-to-r from-gray-100/5 via-gray-200/10 to-gray-100/5">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                  6 Powerful Platforms,
                </span>
                <br />
                <span className="text-white">One Ecosystem</span>
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light">
                Everything you need to grow, learn, and monetize your talents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative bg-gray-100/10 border border-gray-300/20 backdrop-blur-xl hover:bg-gray-100/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <CardContent className="relative p-8 z-10">
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300">{feature.title}</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Stats */}
        <section className="relative py-32 px-4 bg-gradient-to-r from-teal-900/80 via-teal-800/50 to-teal-900/80">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r from-teal-600 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Token Economy Section */}
        <section className="relative py-32 px-4 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-8 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-200 border-orange-500/30 px-6 py-2 text-lg backdrop-blur-sm">
                <Coins className="w-4 h-4 mr-2" />
                $TALENT Token
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Powering the Talent Economy
                </span>
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light">
                Unlock Skills, Earn Rewards, Shape the Future
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Feature cards */}
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Coins className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Earn $TALENT</h3>
                      <p className="text-gray-300">
                        Complete projects, teach courses, or provide services to earn tokens.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 text-white">📊</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Stake & Govern</h3>
                      <p className="text-gray-300">
                        Stake tokens to participate in platform governance and earn rewards.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Access Premium Features</h3>
                      <p className="text-gray-300">Use $TALENT to unlock advanced tools and services.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 text-white">💳</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Flexible Payments</h3>
                      <p className="text-gray-300">Pay with 100% $TALENT (10% fee discount) or 50/50 with USDT.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right side - Main token card */}
              <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      $TALENT
                    </h3>
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center p-1 shadow-lg animate-token-bounce">
                      <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                        <Image
                          src="/images/talentmesh-logo-transparent.png"
                          alt="TALENT Token"
                          width={44}
                          height={44}
                          className="w-11 h-11 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4">The Future of Work</h4>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    $TALENT is the native utility token that powers the entire TalentMesh ecosystem. Use it to access
                    premium features, pay for services, and participate in governance.
                  </p>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Earn tokens by completing projects, teaching courses, mentoring others, or contributing to the
                    platform's growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Whitepaper
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-gray-700/50 bg-gray-900/90 backdrop-blur-xl py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Left column - Logo and description */}
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Image
                      src="/images/talentmesh-logo-transparent.png"
                      alt="TalentMesh Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-white font-bold text-2xl">TalentMesh</span>
                </Link>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  The world's first comprehensive decentralized talent ecosystem. Learn, teach, collaborate, and earn
                  with blockchain technology.
                </p>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/10`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Middle column - Company */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                <div className="space-y-4">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Press Kit
                  </Link>
                </div>
              </div>

              {/* Right column - Resources */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
                <div className="space-y-4">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2025 TalentMesh. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
