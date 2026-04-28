import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Coffee,
  Home,
  Heart,
  BookOpen,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Zap,
  Activity,
  GitBranch,
  Server,
  Brain,
  Network,
  CircleDot,
  Award,
  Sparkles,
  Terminal,
  Cloud,
  Cpu,
  FileCode,
  Download,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  CalendarDays,
  Clock
} from "lucide-react";

export default function App() {
  const currentYear = new Date().getFullYear();

  // Download CV with proper binary handling
  const downloadCV = async () => {
    try {
      // Fetch the PDF as ArrayBuffer to preserve binary data
      const response = await fetch('/MohammadMantach_cv.pdf');
      const arrayBuffer = await response.arrayBuffer();

      // Create blob from ArrayBuffer with correct MIME type
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });

      // Create object URL
      const url = URL.createObjectURL(blob);

      // Create temporary link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MohammadMantach_cv.pdf';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: direct link
      window.location.href = '/MohammadMantach_cv.pdf';
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      {/* Enhanced Ambient Background with Grid */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />

        {/* Enhanced Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section - ICONIC CINEMATIC */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-safe">
        {/* Mobile: Add top spacing (safe area + breathing room) */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 lg:h-16" />
        {/* Neural Network Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Particles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.25, 0.55, 0.25]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-indigo-400 rounded-full blur-sm"
          />

          {/* Data Flow Lines */}
          <div className="absolute top-1/2 left-0 right-0">
            <svg className="w-full h-64 opacity-5" viewBox="0 0 1000 200">
              <path
                d="M0,100 Q250,50 500,100 T1000,100"
                stroke="rgba(96, 165, 250, 0.3)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0,120 Q250,70 500,120 T1000,120"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* System Labels - Subtle AI Feel */}
       <div className="
  absolute 
  top-18 left-8
  sm:top-20 sm:left-15
  lg:top-24 lg:left-40
  z-10
  text-xs sm:text-sm
  text-blue-400/40
  font-mono
  tracking-[0.2em]
  pointer-events-none
">
  SYSTEM_INIT
</div>
          <div className="absolute bottom-20 right-20 text-[10px] text-purple-400/20 font-mono">
            NODE_ACTIVE
          </div>
        </div>

        {/* Glowing System Core - Central Visual Element */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-80 h-80 rounded-full border border-blue-500/20"
            />

            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-purple-500/20"
            />

            {/* Core Sphere with Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
              />
              <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-2xl animate-pulse" />
            </div>

            {/* Connection Nodes */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full ring-2 ring-blue-400/30 ring-offset-2 ring-offset-[#0B0F19]" />
            <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full ring-2 ring-purple-400/30 ring-offset-2 ring-offset-[#0B0F19]" />

            {/* System Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-mono">
              CORE_SYSTEM
            </div>
          </div>
        </motion.div>

        {/* CV Download Button - Responsive Positioning */}
        <motion.button
          onClick={downloadCV}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="group fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 cursor-pointer"
        >
          <div className="relative">
            {/* Glow on hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Button - Mobile optimized */}
            <div className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-2 sm:gap-3 group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all group-hover:scale-105 min-h-[44px]">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium">Download CV</span>
            </div>

            {/* Tooltip - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Click to download
            </div>
          </div>
        </motion.button>

        {/* View CV in Browser Button - Alternative option */}
        <motion.a
          href="/MohammadMantach_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="group fixed top-20 right-4 sm:top-24 sm:right-6 lg:top-28 lg:right-8 z-50"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />

            {/* Button */}
            <div className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-2 sm:gap-3 group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all group-hover:scale-105 min-h-[44px]">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-xs sm:text-sm font-medium">View CV</span>
            </div>

            {/* Tooltip */}
            <div className="hidden sm:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Open in browser
            </div>
          </div>
        </motion.a>

        <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 sm:space-y-12"
          >
            {/* System Status Badge - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
             className="mt-4 lg:mt-10 inline-flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
            >
              <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-500"></span>
              </div>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Available for Opportunities</span>
            </motion.div>

            {/* Main Typography - Responsive Sizing */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="mt-4 sm:mt-12 lg:mt-16 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.95]">
                  Mohammad
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      Mantach
                    </span>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 blur-2xl -z-10" />
                  </span>
                </h1>
              </motion.div>

              {/* Positioning Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-3 sm:space-y-4"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 max-w-3xl">
                  Full Stack Developer
                </p>

                {/* AI Evolution Overlay - Mobile optimized */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-mono">
                  <span className="text-blue-400">Full Stack Systems</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-purple-400">Scalable Architectures</span>
                  <span className="text-gray-600 hidden sm:inline">•</span>
                  <span className="text-indigo-400 w-full sm:w-auto mt-1 sm:mt-0">AI-Driven Thinking</span>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed pt-2 sm:pt-4">
                  Architecting intelligent systems that bridge modern web infrastructure with emerging AI capabilities. Building for scale, performance, and the future.
                </p>
              </motion.div>
            </div>

            {/* Enhanced Info Panels - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              {/* Location Panel */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-4 py-3 sm:px-6 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">LOCATION</p>
                      <p className="text-xs sm:text-sm text-gray-200">Beirut, Lebanon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack Panel */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-4 py-3 sm:px-6 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">PRIMARY STACK</p>
                      <p className="text-xs sm:text-sm text-gray-200">MERN • Next.js</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Panel */}
              <div className="group relative sm:col-span-2 lg:col-span-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-4 py-3 sm:px-6 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">SYSTEM STATUS</p>
                      <p className="text-xs sm:text-sm text-gray-200">Building • Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3.5 sm:px-10 sm:py-5 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 text-center min-h-[44px] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 text-sm sm:text-base">
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all text-center min-h-[44px] flex items-center justify-center text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="text-xs text-gray-500 font-mono">SCROLL TO EXPLORE</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Mobile-First Redesign */}
      <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              {/* Floating label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
                <p className="text-xs text-gray-500 font-mono tracking-wider">BACKGROUND</p>
              </div>

              {/* Enhanced Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-[3rem] blur-3xl opacity-50" />

              {/* Main Card - Mobile Optimized */}
              <div className="relative p-6 sm:p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="space-y-6 sm:space-y-8">
                  {/* Icon - Properly Sized (40-56px) */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-50" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Brain className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>

                  {/* Title with Accent Line */}
                  <div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                      About
                    </h2>
                    <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </div>

                  {/* Description - Broken into digestible paragraphs */}
                  <div className="space-y-4 sm:space-y-5">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                      Computer Science graduate specializing in full-stack development with the <span className="text-blue-400">MERN stack</span> <span className="text-purple-400">(MongoDB, Express.js, React, and Node.js)</span>.
                    </p>

                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                      Passionate about building intelligent, scalable systems that bridge modern web infrastructure with emerging AI capabilities.
                    </p>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      My approach combines clean architecture, user-centered design, and performance optimization to create applications that scale and evolve.
                    </p>
                  </div>

                  {/* Credentials - Mobile Optimized */}
                  <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-400 font-mono mb-1">EDUCATION</p>
                        <p className="text-sm sm:text-base text-gray-200 leading-snug">Lebanese University • BS in Computer Science • 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-400 font-mono mb-1">CURRENT</p>
                        <p className="text-sm sm:text-base text-gray-200 leading-snug">Full Stack Developer Intern @ Ceevtech</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats or Metrics - Mobile Optimized */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
                    <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-2xl sm:text-3xl text-blue-400 mb-1">4+</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">PROJECTS</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-2xl sm:text-3xl text-purple-400 mb-1">10+</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">TECH</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-2xl sm:text-3xl text-indigo-400 mb-1">2025</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono">GRAD</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Floating 3D Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 hidden lg:block relative h-[600px]"
            >
              {/* Layered floating cards suggesting depth */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20 rounded-3xl backdrop-blur-sm"
                style={{ transform: 'perspective(1000px) rotateY(-10deg)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Network className="w-20 h-20 text-blue-400/30" strokeWidth={1} />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotateZ: [0, -2, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent border border-purple-400/20 rounded-3xl backdrop-blur-sm"
                style={{ transform: 'perspective(1000px) rotateY(10deg)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <GitBranch className="w-24 h-24 text-purple-400/30" strokeWidth={1} />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 to-transparent border border-indigo-400/20 rounded-2xl backdrop-blur-sm"
                style={{ transform: 'perspective(1000px) rotateX(10deg)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section → PERFECT GRID SYSTEM */}
      <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
              <p className="text-xs text-gray-500 font-mono tracking-wider">TECHNICAL TAXONOMY</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Technical Expertise</h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Comprehensive technology stack spanning programming languages, frameworks, databases, and cloud infrastructure
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {/* Programming Languages - Full Width - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl blur-2xl opacity-50" />

              <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-orange-400/60 font-mono mb-0.5 sm:mb-1">FOUNDATION</p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-300">Programming Languages</h3>
                  </div>
                  <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
                  <div className="hidden lg:block text-[10px] text-orange-400/30 font-mono">LANG_CORE</div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['C', 'C++', 'Java', 'JavaScript', 'PHP'].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-xs sm:text-sm text-gray-300 hover:bg-orange-500/10 hover:border-orange-500/30 transition-colors"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Perfect Grid - Equal Heights - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Core Web Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:border-cyan-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-6 sm:h-6 bg-cyan-500 rounded-full ring-2 sm:ring-4 ring-cyan-500/20 ring-offset-1 sm:ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <FileCode className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                  </div>

                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <div>
                      <p className="text-[10px] sm:text-xs text-cyan-400/60 font-mono mb-1">CORE_WEB</p>
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-cyan-300 mb-2">Web Foundation</h3>
                    </div>

                    <div className="space-y-2">
                      {['HTML5', 'CSS3', 'JavaScript'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Frontend Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-blue-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full ring-4 ring-blue-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-blue-400/60 font-mono mb-1">FRONTEND</p>
                      <h3 className="text-2xl text-blue-300 mb-2">UI Frameworks</h3>
                    </div>

                    <div className="space-y-2">
                      {['React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Redux'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-purple-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-purple-500 rounded-full ring-4 ring-purple-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Server className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-purple-400/60 font-mono mb-1">BACKEND</p>
                      <h3 className="text-2xl text-purple-300 mb-2">Server Side</h3>
                    </div>

                    <div className="space-y-2">
                      {['Node.js', 'Express.js', 'PHP', 'RESTful APIs'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-purple-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-indigo-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Database className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-indigo-400/60 font-mono mb-1">DATABASE</p>
                      <h3 className="text-2xl text-indigo-300 mb-2">Data Layer</h3>
                    </div>

                    <div className="space-y-2">
                      {['MongoDB', 'MySQL'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-indigo-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dev Tools */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-emerald-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full ring-4 ring-emerald-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wrench className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-emerald-400/60 font-mono mb-1">DEV_TOOLS</p>
                      <h3 className="text-2xl text-emerald-300 mb-2">Development</h3>
                    </div>

                    <div className="space-y-2">
                      {['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jira'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cloud & APIs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-sky-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-sky-500 rounded-full ring-4 ring-sky-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cloud className="w-6 h-6 text-sky-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-sky-400/60 font-mono mb-1">CLOUD_API</p>
                      <h3 className="text-2xl text-sky-300 mb-2">Cloud & APIs</h3>
                    </div>

                    <div className="space-y-2">
                      {['Google Cloud Console', 'RESTful APIs', 'Axios'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-sky-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Methodologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="group relative h-full md:col-span-2 lg:col-span-1"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-violet-500/30 group-hover:-translate-y-1 flex flex-col">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-violet-500 rounded-full ring-4 ring-violet-500/20 ring-offset-2 ring-offset-[#0B0F19] flex items-center justify-center">
                    <CircleDot className="w-3 h-3 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-violet-400/60 font-mono mb-1">METHODOLOGY</p>
                      <h3 className="text-2xl text-violet-300 mb-2">Process</h3>
                    </div>

                    <div className="space-y-2">
                      {['Agile/Scrum', 'UML Design'].map((tech, i) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-1 h-1 bg-violet-400 rounded-full" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-16 flex items-center justify-center gap-4"
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 font-mono">DATA_FLOW_ACTIVE</span>
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline - Ultra-Realistic Vertical Design */}
      <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
              <p className="text-xs text-gray-500 font-mono tracking-wider">PROFESSIONAL JOURNEY</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Timeline</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
              A visual chronicle of my growth as a developer, from education to professional experience.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Gradient Line - Ultra-realistic */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-indigo-500/50">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-indigo-400/30 blur-sm" />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {/* 2025 - Full Stack Developer Intern */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline Node with Glow */}
                <div className="absolute left-0 sm:left-4 top-0 group">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-12 h-12 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all" />
                    {/* Node circle */}
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-[#0B0F19] shadow-lg shadow-blue-500/20">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    {/* Inner highlight */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                  </div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

                  {/* Card content */}
                  <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-blue-500/30 transition-all">
                    {/* Top highlight */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                      <CalendarDays className="w-3 h-3 text-blue-400" />
                      <span className="text-xs font-mono text-blue-300">2025 • 2 months</span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">Full Stack Developer Intern</h3>
                    <p className="text-base sm:text-lg text-blue-400 mb-4 font-medium">Ceevtech</p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                      Developed comprehensive website for "Custom Roast" coffee company using modern web technologies. Implemented full-stack solutions and collaborated effectively within cross-functional teams using Agile methodology.
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'Node.js', 'MongoDB', 'Agile'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 2024-2025 - Full Stack Web Developer Certification */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 sm:left-4 top-0 group">
                  <div className="relative">
                    <div className="absolute inset-0 w-12 h-12 bg-purple-500/20 rounded-full blur-lg group-hover:bg-purple-400/30 transition-all" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center border-4 border-[#0B0F19] shadow-lg shadow-purple-500/20">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                  </div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

                  <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-purple-500/30 transition-all">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
                      <CalendarDays className="w-3 h-3 text-purple-400" />
                      <span className="text-xs font-mono text-purple-300">2024 • 6 months</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">Full Stack Web Developer</h3>
                    <p className="text-base sm:text-lg text-purple-400 mb-4 font-medium">ESIEE[it] University, France & ESA Coding Lab</p>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                      Completed intensive web development training program. Gained practical experience in modern web technologies and developed Full Stack and MERN stack projects.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Full Stack', 'MERN Stack', 'Web Technologies'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 2021-2025 - Bachelor's Degree */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 sm:left-4 top-0 group">
                  <div className="relative">
                    <div className="absolute inset-0 w-12 h-12 bg-indigo-500/20 rounded-full blur-lg group-hover:bg-indigo-400/30 transition-all" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-[#0B0F19] shadow-lg shadow-indigo-500/20">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                  </div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

                  <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-indigo-500/30 transition-all">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                      <CalendarDays className="w-3 h-3 text-indigo-400" />
                      <span className="text-xs font-mono text-indigo-300">2021 - 2025</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">Bachelor's Degree in Computer Science</h3>
                    <p className="text-base sm:text-lg text-indigo-400 mb-4 font-medium">Lebanese University • Faculty of Sciences</p>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                      Completed comprehensive computer science education covering algorithms, data structures, software engineering, and modern development practices.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Computer Science', 'Software Engineering', 'Algorithms'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Timeline End Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-4 pl-16 sm:pl-24"
            >
              <div className="h-px w-24 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 font-mono">JOURNEY_CONTINUES</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile Optimized */}
      <section id="projects" className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <p className="text-xs text-gray-500 font-mono tracking-wider">CASE STUDIES</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Featured Work</h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Production-ready applications built with modern architecture, focusing on scalability, performance, and exceptional user experience
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Custom Roast */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
              style={{ transform: 'perspective(2000px)' }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-amber-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/10"
                   style={{ transform: 'rotateX(2deg)' }}>
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-64 sm:h-80 lg:h-[500px] bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-600/10 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.15),transparent_50%)]" />

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative" style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-2xl blur-2xl scale-110" />
                        <div className="relative bg-gradient-to-br from-amber-500/30 to-orange-500/30 backdrop-blur-sm border border-amber-400/30 rounded-3xl p-16 group-hover:scale-105 transition-transform duration-700">
                          <Coffee className="w-32 h-32 text-amber-300/80" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400/20 rounded-xl border border-orange-400/30 backdrop-blur-sm" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400/20 rounded-lg border border-amber-400/30 backdrop-blur-sm" />
                      </div>
                    </div>

                    <div className="absolute top-6 left-6 text-8xl font-bold text-amber-500/10">01</div>
                  </div>

                  <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-amber-500"></span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-amber-300 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono">Featured Project</span>
                      </div>

                      <div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                          Custom Roast
                        </h3>
                        <p className="text-amber-400/70 text-xs sm:text-sm font-mono">Coffee Company Digital Platform</p>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        End-to-end digital ecosystem for coffee company operations. Features a customer-facing corporate website with dynamic content delivery and a comprehensive admin dashboard with full CRUD functionality.
                      </p>

                      <div className="space-y-2 sm:space-y-3">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider">Key Features</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {['Admin Dashboard', 'Content Management', 'Dynamic CMS', 'Responsive Design'].map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                              <Zap className="w-3 h-3 text-amber-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-amber-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 sm:pt-4 flex items-center gap-4 sm:gap-8 text-xs sm:text-sm">
                        <div>
                          <p className="text-gray-500 mb-1 font-mono text-[10px] sm:text-xs">ROLE</p>
                          <p className="text-gray-300">Full Stack Dev</p>
                        </div>
                        <div className="h-8 sm:h-10 w-px bg-white/10" />
                        <div>
                          <p className="text-gray-500 mb-1 font-mono text-[10px] sm:text-xs">YEAR</p>
                          <p className="text-gray-300">2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* HouseLeb */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
              style={{ transform: 'perspective(2000px)' }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10"
                   style={{ transform: 'rotateX(-2deg)' }}>
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full ring-2 ring-blue-400/30" />
                        <span className="text-xs text-blue-300 uppercase tracking-[0.2em] font-mono">Full Stack Platform</span>
                      </div>

                      <div>
                        <h3 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                          HouseLeb
                        </h3>
                        <p className="text-blue-400/70 text-sm font-mono">Real Estate Rental Platform</p>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        Comprehensive rental marketplace tailored for the Lebanese market. Features advanced property search with intelligent filtering, role-based dashboards, and Google Maps integration.
                      </p>

                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Key Features</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['Advanced Search', 'Multi-role Dashboards', 'Property Filtering', 'Google Integration'].map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                              <Zap className="w-3 h-3 text-blue-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['React', 'Material UI', 'Redux', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 relative h-[500px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 overflow-hidden order-1 lg:order-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative" style={{ transform: 'perspective(1000px) rotateY(5deg)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl blur-2xl scale-110" />
                        <div className="relative bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-16 group-hover:scale-105 transition-transform duration-700">
                          <Home className="w-32 h-32 text-blue-300/80" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-400/20 rounded-xl border border-cyan-400/30 backdrop-blur-sm" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-lg border border-blue-400/30 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 text-8xl font-bold text-blue-500/10">02</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TalentAble */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
              style={{ transform: 'perspective(2000px)' }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
                   style={{ transform: 'rotateX(2deg)' }}>
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-[500px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-600/10 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative" style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-2xl scale-110" />
                        <div className="relative bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-16 group-hover:scale-105 transition-transform duration-700">
                          <Heart className="w-32 h-32 text-purple-300/80" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400/20 rounded-xl border border-pink-400/30 backdrop-blur-sm" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-lg border border-purple-400/30 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 text-8xl font-bold text-purple-500/10">03</div>
                  </div>

                  <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full ring-2 ring-purple-400/30" />
                        <span className="text-xs text-purple-300 uppercase tracking-[0.2em] font-mono">Social Impact Platform</span>
                      </div>

                      <div>
                        <h3 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                          TalentAble
                        </h3>
                        <p className="text-purple-400/70 text-sm font-mono">Inclusive Employment Marketplace</p>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        Purpose-driven platform connecting individuals with special needs to meaningful employment opportunities. Built with accessibility-first principles and inclusive design patterns.
                      </p>

                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Key Features</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['Accessibility First', 'Inclusive Design', 'Admin Analytics', 'UX Optimized'].map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                              <Zap className="w-3 h-3 text-purple-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['React', 'Material UI', 'Tailwind', 'Redux', 'Node.js', 'MongoDB'].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Library System */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
              style={{ transform: 'perspective(2000px)' }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/10"
                   style={{ transform: 'rotateX(-2deg)' }}>
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-emerald-400/30" />
                        <span className="text-xs text-emerald-300 uppercase tracking-[0.2em] font-mono">Resource Management</span>
                      </div>

                      <div>
                        <h3 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                          Library System
                        </h3>
                        <p className="text-emerald-400/70 text-sm font-mono">Digital Resource Management</p>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        Full-featured library management solution with cataloging, authentication, and reservation workflows. Dual-interface design for librarians and patrons.
                      </p>

                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Key Features</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['User Authentication', 'Book Cataloging', 'Reservation System', 'Dual Interface'].map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                              <Zap className="w-3 h-3 text-emerald-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-emerald-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 relative h-[500px] bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-600/10 overflow-hidden order-1 lg:order-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative" style={{ transform: 'perspective(1000px) rotateY(5deg)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-2xl scale-110" />
                        <div className="relative bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-16 group-hover:scale-105 transition-transform duration-700">
                          <BookOpen className="w-32 h-32 text-emerald-300/80" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-400/20 rounded-xl border border-teal-400/30 backdrop-blur-sm" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-400/20 rounded-lg border border-emerald-400/30 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 text-8xl font-bold text-emerald-500/10">04</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Ultra-Realistic Grid */}
      <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <p className="text-xs text-gray-500 font-mono tracking-wider">VERIFIED CREDENTIALS</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Certifications</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
              Professional certifications and training programs that validate my expertise and commitment to continuous learning.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Machine Learning Fundamentals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

              {/* Card */}
              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-blue-500/40 transition-all flex flex-col">
                {/* Top edge highlight */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Icon/Badge */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  {/* Inner highlight */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-lg blur-sm" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">Machine Learning Fundamentals</h3>
                  <p className="text-sm sm:text-base text-blue-400 mb-3 font-medium">SE Factory</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono">2025</span>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-300">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Time Management and Productivity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-purple-500/40 transition-all flex flex-col">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-lg blur-sm" />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">Time Management & Productivity</h3>
                  <p className="text-sm sm:text-base text-purple-400 mb-3 font-medium">SE Factory</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono">2025</span>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-300">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Introduction to DevOps, MLOps, and DataOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-indigo-500/40 transition-all flex flex-col">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-lg blur-sm" />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">DevOps, MLOps & DataOps</h3>
                  <p className="text-sm sm:text-base text-indigo-400 mb-3 font-medium">SE Factory</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono">2025</span>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-300">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full Stack Web Developer - Spans 2 columns on md+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative h-full md:col-span-2 lg:col-span-3"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />

              <div className="relative h-full p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-amber-500/40 transition-all">
                <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <Award className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                    </div>
                    <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 rounded-xl blur-sm" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2 text-white">Full Stack Web Developer</h3>
                        <p className="text-base sm:text-lg text-amber-400 font-medium">ESIEE[it] University, France & ESA Coding Lab</p>
                      </div>

                      <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500 font-mono">2024</span>
                        </div>
                        <span className="text-xs text-gray-600">•</span>
                        <span className="text-xs text-orange-400 font-mono">6 months</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                      Completed comprehensive web development training program. Gained practical experience in modern web technologies and developed Full Stack and MERN stack projects.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-300">Completed</span>
                      </div>

                      <div className="h-4 w-px bg-white/10" />

                      {['Full Stack', 'MERN Stack', 'Web Technologies'].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-gray-400 font-mono">VERIFIED_CREDENTIALS</span>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
                <p className="text-xs text-gray-500 font-mono tracking-wider">GET IN TOUCH</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                Let's Connect
              </h2>

              <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
                Open to new opportunities, collaborations, and building the next generation of intelligent systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <motion.a
                href="mailto:mantach15@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative min-h-[44px]"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono mb-1 sm:mb-2">EMAIL</p>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-200 group-hover:text-white transition-colors break-all">
                        mantach15@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Send message</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+96170851594"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative min-h-[44px]"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-purple-500/30 transition-all duration-500">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs text-gray-500 font-mono mb-1 sm:mb-2">PHONE</p>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-200 group-hover:text-white transition-colors">
                        +961 70 851594
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Call now</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 pt-8"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
              <a
                href="https://github.com/MohammadMantach"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center hover:border-white/30 transition-all overflow-hidden min-h-[44px] min-w-[44px]"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all" />
                <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-mantach-57b70b270"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center hover:border-white/30 transition-all overflow-hidden min-h-[44px] min-w-[44px]"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all" />
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform" />
              </a>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Dynamic Year */}
      <footer className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs sm:text-sm font-mono">© {currentYear} Mohammad Mantach</p>
                <p className="text-gray-600 text-[10px] sm:text-xs">All rights reserved</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono">Beirut, Lebanon</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-[10px] sm:text-xs font-mono">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
