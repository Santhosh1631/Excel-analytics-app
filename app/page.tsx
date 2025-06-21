"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Upload, BarChart3, Brain, Shield, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LandingPage() {
  const [currentUser, setCurrentUser] = useState<"user" | "admin" | null>(null)
  const { scrollY } = useScroll()

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const bgY = useTransform(scrollY, [0, 500], [0, -100])
  const textY = useTransform(scrollY, [0, 500], [0, -50])

  if (currentUser) {
    return <Dashboard userRole={currentUser} onLogout={() => setCurrentUser(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: bgY }} className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            DataViz Pro
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Features
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              About
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div style={{ y: heroY }} className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            Transform Data
            <br />
            Into Insights
          </motion.h1>

          <motion.p
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Upload Excel files, generate stunning charts, and unlock AI-powered insights
            <br />
            with our advanced data visualization platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => setCurrentUser("user")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Login as User
            </Button>

            <Button
              onClick={() => setCurrentUser("admin")}
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Shield className="mr-2 h-5 w-5" />
              Login as Admin
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white/60 animate-bounce" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Powerful Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Excel Upload",
                description: "Drag and drop Excel files with instant preview and validation",
              },
              {
                icon: BarChart3,
                title: "Dynamic Charts",
                description: "Generate 2D and 3D visualizations with customizable styling",
              },
              {
                icon: Brain,
                title: "AI Insights",
                description: "Get intelligent analysis and recommendations from your data",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 rounded-2xl shadow-2xl">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-6 group-hover:text-purple-300 transition-colors" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <span className="text-2xl font-bold text-white">DataViz Pro</span>
          </div>
          <p className="text-gray-400">© 2024 DataViz Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Dashboard Component
function Dashboard({ userRole, onLogout }: { userRole: "user" | "admin"; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const userMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "upload", label: "Upload", icon: Upload },
    { id: "charts", label: "Charts", icon: BarChart3 },
    { id: "insights", label: "AI Insights", icon: Brain },
  ]

  const adminMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Shield },
  ]

  const menuItems = userRole === "admin" ? adminMenuItems : userMenuItems

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        className="fixed left-0 top-0 h-full w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 z-40"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">DataViz Pro</span>
          </div>

          <div className="flex items-center gap-3 mb-8 p-3 bg-white/10 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              {userRole === "admin" ? (
                <Shield className="h-5 w-5 text-white" />
              ) : (
                <Users className="h-5 w-5 text-white" />
              )}
            </div>
            <div>
              <p className="text-white font-medium">{userRole === "admin" ? "Admin User" : "User"}</p>
              <p className="text-gray-400 text-sm">{userRole}</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Button onClick={onLogout} variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
            Logout
          </Button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-14"}`}>
        <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-white/10 p-2 rounded-lg"
            >
              ☰
            </button>
            <h1 className="text-2xl font-bold text-white capitalize">{activeTab}</h1>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>
        </header>

        <main className="p-6">
          {activeTab === "dashboard" && <DashboardContent userRole={userRole} />}
          {activeTab === "upload" && <UploadContent />}
          {activeTab === "charts" && <ChartsContent />}
          {activeTab === "insights" && <InsightsContent />}
          {activeTab === "users" && userRole === "admin" && <UsersContent />}
          {activeTab === "analytics" && userRole === "admin" && <AnalyticsContent />}
        </main>
      </div>
    </div>
  )
}

// Dashboard Content Components
function DashboardContent({ userRole }: { userRole: "user" | "admin" }) {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Total Uploads", value: "24", icon: Upload, color: "from-blue-500 to-purple-500" },
          { title: "Charts Created", value: "18", icon: BarChart3, color: "from-purple-500 to-pink-500" },
          { title: "AI Insights", value: "12", icon: Brain, color: "from-pink-500 to-red-500" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              "Uploaded sales_data.xlsx",
              "Generated bar chart for Q4 revenue",
              "AI insight: Revenue increased 15%",
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-300">{activity}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

function UploadContent() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
      <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Excel File</h2>

        <div
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            dragActive ? "border-purple-400 bg-purple-400/10" : "border-white/30 hover:border-purple-400/50"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            setDragActive(false)
            // Handle file drop
          }}
        >
          <Upload className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {dragActive ? "Drop your file here" : "Drag & drop your Excel file"}
          </h3>
          <p className="text-gray-400 mb-6">or click to browse</p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Choose File
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

function ChartsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Your Charts</h2>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600">Create New Chart</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((chart) => (
          <motion.div
            key={chart}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: chart * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
              <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Chart {chart}</h3>
              <p className="text-gray-400 text-sm"> data visualization</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function InsightsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">AI Insights</h2>

      <div className="grid gap-6">
        {[
          {
            title: "Revenue Growth Analysis",
            insight: "Your Q4 revenue shows a 15% increase compared to Q3, driven primarily by product category A.",
            confidence: 92,
          },
          {
            title: "Seasonal Trends",
            insight: "Data indicates strong seasonal patterns with peaks in November and December.",
            confidence: 87,
          },
          {
            title: "Customer Segmentation",
            insight: "Three distinct customer segments identified with different purchasing behaviors.",
            confidence: 94,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.insight}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Confidence:</span>
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${item.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm text-white">{item.confidence}%</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function UsersContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600">Add User</Button>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white font-semibold py-3">Name</th>
                  <th className="text-left text-white font-semibold py-3">Email</th>
                  <th className="text-left text-white font-semibold py-3">Role</th>
                  <th className="text-left text-white font-semibold py-3">Status</th>
                  <th className="text-left text-white font-semibold py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
                  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
                  { name: "Bob Johnson", email: "bob@example.com", role: "Admin", status: "Active" },
                ].map((user, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 text-white">{user.name}</td>
                    <td className="py-4 text-gray-300">{user.email}</td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          user.role === "Admin" ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-300">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function AnalyticsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Users", value: "1,234", change: "+12%" },
          { title: "Active Sessions", value: "89", change: "+5%" },
          { title: "Files Uploaded", value: "456", change: "+23%" },
          { title: "Charts Generated", value: "789", change: "+18%" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
              <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-4">Usage Trends</h3>
        <div className="h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
          <BarChart3 className="h-16 w-16 text-purple-400" />
        </div>
      </Card>
    </motion.div>
  )
}
